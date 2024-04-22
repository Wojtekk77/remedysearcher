import Description from '@models/description';
import Remedy from '@models/remedy';
import { connectToDB } from "@utils/database";
import { remediesNotExistingInDB } from './medycynaHomeopatycznaGaba';

export const createNewRemedies = async (request) => {
    console.log('CREATE NEW REMEDIES START')
    
    try {
        await connectToDB();
        let startTime = new Date(); 
        const remedyNames = remediesNotExistingInDB;
        for await (const remedyName of remedyNames) {
            console.log('remedyName:', remedyName)
            let remedy = await Remedy.findOne({ name: remedyName });
            console.log(remedy, 'remedy');

            if (!remedy?._id) {

                const newRemedy = await Remedy.create({ name: remedyName }); 
                console.log('Remedy:', remedyName, 'created:', remedy?._id)
                remedy = { _id: newRemedy?._id}
            }

            // let desc = await Description.findOne({ remedy: remedy._id })
            // if (!desc?._id) {
            //     // for now we dont have desc so do not create desc model
            //     desc = await Description.create({
            //         remedy: remedy._id,
            //         description: '',
            //         sentences: [],
            //         words: [],
            //         wordSentencesAsText: '',
            //         remedyName,
            //         destroyed: false
            //     }); 
            //     console.log('Description for:', remedyName, 'created:', newDescription._id)
            
            // }
        } 
        
        let endTime = new Date(); 
        console.log(`New remedies created! Total Time ${endTime.getTime() - startTime.getTime()}ms !`);
        // res.json({ remedies: result });
        return new Response(JSON.stringify({}), { status: 200 })
    } catch (error) {
        return new Response("Failed to create a new comment", { status: 500 });
    }
}