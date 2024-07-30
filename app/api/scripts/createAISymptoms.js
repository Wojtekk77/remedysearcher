import Remedy from '@models/remedy';
import { jsonLeftRight } from './AICreated/jsonLeftRight';
import Illness from '@models/illness';
import { aiSymptoms } from './json/aiSymptoms';
import { appendTextToFile, processTextArrayOfObj } from './helpers';
import Symptom from '@models/symptom';



export const createAISymptoms = async () => {
    console.log('start');
    aiSymptoms.forEach(i => { console.log(`${i.description} \n ${i.descriptionAI}`) });
    console.log('stop');

    return 1;

    try {

        const arrayOfIllnessWithSymptoms = await Illness.aggregate([
            {
                $lookup: {
                    from: 'symptoms',
                    localField: '_id',
                    foreignField: 'illness',
                    as: 'symptoms',
                },
            },
            {
                $sort: { name: 1 },
            },
        ]);

        // return 1;
        let counter = 1;
        const len = arrayOfIllnessWithSymptoms.length
        let symptomsWithAIGeneratedDesc = [];
        for (let ilness of arrayOfIllnessWithSymptoms) {
            console.log(ilness.name, ': Started', counter, '/', len)


            const instruction = `Dostaniesz wyrażenie, które musisz zamienić tak by nie zmieniło logiki zdania jednak trochę się różniło.
                Przede wszystkim zachowaj znaczenie.
                Cały kontekst będzie odnosił się do choroby o nazwie: '${ilness.name}'. Miej to na uwadze.
                Jeżeli widzisz, że objawy są wypunkowane po przecinku - nie zmieniaj słów, ale pozamieniaj kolejność występowania.
            `;

            const aIGeneratedTexts = await processTextArrayOfObj(ilness.symptoms, 'description', instruction);

            await Promise.all(aIGeneratedTexts.map((symptom) => Symptom.updateOne({ _id: symptom._id }, { $set: { descriptionAI: symptom.descriptionAI } } ) ) );

            symptomsWithAIGeneratedDesc = symptomsWithAIGeneratedDesc.concat(aIGeneratedTexts);
            // console.log(ilness.name, ': Finished', counter, '/', len)
            counter += 1;
            }
        // console.log(symptomsWithAIGeneratedDesc, 'symptomsWithAIGeneratedDesc');

        await appendTextToFile('app/api/scripts/json', 'aiSymptoms.js', `export const aiSymptoms = ${JSON.stringify(symptomsWithAIGeneratedDesc)};`);
            
        console.log('END!')
        
        
        return new Response(JSON.stringify({}), { status: 200 })
    } catch (error) {
        return new Response(`Failed: ${error}`, { status: 500 });
    }
}

// "a crud": 'ant-c', 
// "a cr": 'ant-c',
// "a tart": 'ant-t',
// "a mur": 'am-m',