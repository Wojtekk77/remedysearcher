import Description from '@models/description';
import Remedy from '@models/remedy';
import { connectToDB } from "@utils/database";

export const convertTextByOpenAI = async (request) => {
    console.log('ASK OPEN AI')
    let chatHistory = [
        { role: "system", content: "You are a helpful assistant." },
      ];
    try {

        let startTime = new Date(); 

        const openai = new OpenAI();

        const results = await processTextLines([{ description: 'Zimne stopy o poranku' }, { description: 'Kaszel nie daje choremu zasnąć'}, { description: 'Odczucie ości w gardle'}], 'description', {name: 'kaszel'}, openai)
        
        console.log(results)
        let endTime = new Date(); 
        console.log(`Total Time ${endTime.getTime() - startTime.getTime()}ms !`);
        // res.json({ remedies: result });
        return new Response(JSON.stringify({}), { status: 200 })
    } catch (error) {
        return new Response("Failed to create a new comment", { status: 500 });
    }
}


