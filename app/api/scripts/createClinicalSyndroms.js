import { connectToDB } from "@utils/database";
import { arrOfIllness } from './medycynaHomeopatycznaGaba';
import Illness from '@models/illness';
import Symptom from '@models/symptom';
import Remedy from '@models/remedy';
export const createClinicalSyndroms = async () => {

try {
    await connectToDB();
    let startTime = new Date(); 

    const arrOfIllnesToProcess = arrOfIllness;
    for await (const illnessObj of arrOfIllnesToProcess) {
        const { illnessName, dosage, description, arrOfRemedies } = illnessObj;
    
        let illness = await Illness.findOne({ name: illnessName });
        if (!illness?._id) {
            illness = await Illness.create({ name: illnessName, dosage, description });
        }

        if (illness?._id) {
            // console.log('Illness:', illnessObj.illnessName, 'created:', illness?._id);

            for (const remedyObj of arrOfRemedies) {
                // console.log(remedyObj, 'remedyObj')
                const remedy = await Remedy.findOne({ name: remedyObj.remedy.toLowerCase() });
                if (remedy?._id) {
                    if (remedyObj.mainSymptoms?.length) {
                        for (let i = 0; i < remedyObj.mainSymptoms.length; i++) {
                            const existingSymptom = await Symptom.findOne({ remedy: remedy._id, description: remedyObj.mainSymptoms[i], illness: illness._id })
                            if (!existingSymptom?._id) {
                                await Symptom.create({ description: remedyObj.mainSymptoms[i], remedy: remedy._id, illness: illness._id, order: i, isMainSymptop: true })
                            }
                        }
                    }
        
                    if (remedyObj.confirmingSymptoms?.length) {
                        for (let i = 0; i < remedyObj.confirmingSymptoms.length; i++) {
                            const existingSymptom = await Symptom.findOne({ remedy: remedy._id, description: remedyObj.confirmingSymptoms[i], illness: illness._id })
                            if (!existingSymptom?._id) {
                                await Symptom.create({ description: remedyObj.confirmingSymptoms[i], remedy: remedy._id, illness: illness._id, order: i, isMainSymptop: false })
                            }
                        }
                    }
                }
                else {
                    console.log('Remedy not found for: ', illnessName, remedyObj.remedy)
                }
            }
        }
        else {
            console.log('Illness:', illnessName, 'NOT created!!!.');
        }

    }

    
    
    let endTime = new Date(); 
    console.log(`Total Time ${endTime.getTime() - startTime.getTime()}ms !`);
    // res.json({ remedies: result });
    return new Response(JSON.stringify({}), { status: 200 })
    } catch (error) {
        return new Response("Failed to create a new comment", { status: 500 });
    }
}