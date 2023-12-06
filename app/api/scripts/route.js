import Description from '@models/description';
import { connectToDB } from "@utils/database";
import WordSentence from '@models/descriptionWord';
import DescriptionSentence from '@models/descriptionSentence';
import PolishWordArray from '@models/polishWordArray';

export const POST = async (request) => {
    const { mind, general, specyfic, positiveModalities, negativeModalities } = await request.json();
try {
    await connectToDB();
    let startTime = new Date(); 

    const sanitizedArray = [];
    for (const word of getWorse) {
        const wordExistsInDesc = await Description.find({ words: word }).count();
        if (wordExistsInDesc) {
            // console.log(wordExistsInDesc, word);
            sanitizedArray.push(word);
        }
    }
    sanitizedArray.sort()
    // const x = await PolishWordArray.create({ variations: sanitizedArray, hasReference: true })
    
    let endTime = new Date(); 
    console.log(`Total Time ${endTime.getTime() - startTime.getTime()}ms !`);
    // res.json({ remedies: result });
    return new Response(JSON.stringify({}), { status: 200 })
    } catch (error) {
        return new Response("Failed to create a new comment", { status: 500 });
    }
}


