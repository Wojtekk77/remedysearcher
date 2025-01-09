import { connectToDB } from "@utils/database";
import RepertorySymptom from '@models/repertorySymptom';
import { createLookupParentPipeline, getRegexQuery } from '../helpers';
import mongoose from 'mongoose';

export const POST = async (request) => {

    const { values } = await request.json();
    let { text, property, repertorySymptoms } = values;

    const ids = repertorySymptoms?.map(rs => rs.id);
    
    try {

        await connectToDB()

        let matchStage = {};
        if (ids) {
          matchStage = { $match: { _id: { $in: ids.map(id => new mongoose.Types.ObjectId(id) )}} }
        }
        else {
          const { query: regexQuery, allWordsVariations } = await getRegexQuery({ text: text, field: 'name', queryJoiner: '$and' });
          matchStage = {
            $match: {
                ...property ? { property } : [], // Explicitly define the field name for clarity
                // parent: null, // Uncomment or remove this line based on your requirements
                $or: [
                    ...(allWordsVariations?.length ? [{ nameWords: { $in: allWordsVariations } }] : []),
                    { name: { $regex: text, $options: "i" } }, // Ensure proper syntax for the $regex query
                    { sanitizedName: { $regex: text, $options: "i" } }, // Ensure proper syntax for the $regex query
                    // ...(allWordsVariations?.length ? [regexQuery] : []), // Spread the array, ensuring it's properly structured
                ]
            },
          };
        }

        let repertorySymptoms = await RepertorySymptom.aggregate([
            matchStage,
            {
                $sort: {
                    property: 1,
                    name: 1,
                },
            },
            {
                $limit: 20
            },
            ...createLookupParentPipeline(),
        ]);

        const sortedRepertorySymptoms = groupByParent({ repertorySymptoms }).map(item => {
            return ({ _id: item._id, name: item.name.toString(), joinParency: '', parent: item.parent, isParent: item.isParent, depth: item.depth, property: item.property, selected: ids?.includes(item._id?.toString()) })
        });

        // return new Response(JSON.stringify({ imagesWithJSON: [{img1: '11 1'}, { img2: '2 12'}] }), { status: 200 })
        return new Response(JSON.stringify({ repertorySymptoms: sortedRepertorySymptoms }), { status: 200 })

    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
}

const groupByParent = ({ repertorySymptoms, numberOfLookups = 5 }) => {

    if (!repertorySymptoms.length) {
        return [];
    }

    let repertorySymptomObjs = {};
  
    // Merge repertory symptoms at each level
    repertorySymptoms.forEach(repertorySymptom => {
      const sortedRepertorySymptomObjs = flatParents(repertorySymptom, repertorySymptomObjs, numberOfLookups);
      Object.keys(sortedRepertorySymptomObjs).forEach(key => {
        repertorySymptomObjs[key] = Object.assign(repertorySymptomObjs[key] || {}, sortedRepertorySymptomObjs[key]);
      });
    });
  
    // Group children into parents
    for (let i = 0; i < numberOfLookups; i++) { 
      Object.entries(repertorySymptomObjs[i] || {}).forEach(([_id, child]) => {
  
        const parentObj = repertorySymptomObjs[i + 1]?.[child.parent];
        if (parentObj) {
          if (!parentObj.children) parentObj.children = [];
          parentObj.children.push(child);
        }
      });
    }
  
    const returnArrey = getParentAndChildren(Object.values(repertorySymptomObjs[numberOfLookups]), numberOfLookups)
    // Return the object
    return returnArrey;
  }


const getParentAndChildren = (children, depth = 5) => {
    const arr = [];
    
    const traverseChildren = (childList, depth) => {
      childList?.forEach(child => {
        arr.push({ ...child, depth });
        if (child.children?.length) {
          traverseChildren(child.children, depth - 1);
        }
      });
    };
    
    traverseChildren(children, depth);
    return arr;
  };


const flatParents = (repertorySymptom, repertorySymptomObjs, numberOfLookups = 5) => {

    let parentsTree = [repertorySymptom];
    for (let i = 1; i <= numberOfLookups; i++) {

        const parentObj = `parentObj${i}`;
        if (repertorySymptom[parentObj]?._id) {
            parentsTree.push(repertorySymptom[parentObj]);
        }
        
        // if (!repertorySymptom[parentObj]?._id) {
        //     parentObj[repertorySymptom[parentObj]._id] = repertorySymptom[parentObj]; 
        // }

    }
    parentsTree.reverse();

    parentsTree.forEach((sortedParentSymptom, i) => {
        if (!repertorySymptomObjs[numberOfLookups - i]) {
            repertorySymptomObjs[numberOfLookups - i] = {};
        }
        
        repertorySymptomObjs[numberOfLookups - i][sortedParentSymptom._id] = sortedParentSymptom;
    })


    return repertorySymptomObjs
}
