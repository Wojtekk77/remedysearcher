import Description from '@models/description';
import Remedy from '@models/remedy';
import { connectToDB } from "@utils/database";
import OpenAI from "openai";

export const convertTextByOpenAI = async (request) => {
    console.log('ASK OPEN AI')
    let chatHistory = [
        { role: "system", content: "You are a helpful assistant." },
      ];
    try {

        let startTime = new Date(); 

        const openai = new OpenAI();

        const completion = await openai.chat.completions.create({
            messages: [
                { role: "system",
                    content: `
                        Dostaniesz wyrażenie, które musisz zamienić tak by nie zmieniło logiki zdania jednak trochę się różniło.
                        Przede wszystkim zachowaj znaczenie.
                        Jeżeli zdanie będzie się różnić dodaj słowa pomocniczne.
                        Cały kontekst będzie odnosił się do choroby o nazwie: 'Astma'. Miej to na uwadze.
                        Opiszemy teraz jej objawy ogólne.
                        Jeżeli widzisz, że objawy są wypunkowane po przecinku - nie zmieniaj słów, ale na przykład pozamieniaj kolejność.
                    `
                },
                { role: "user", content: "Silny lęk, pobudzenie, osłabienie w czasie napadu" },
                { role: "user", content: "Nasilenie się objawów pomiędzy północą a trzecią nad ranem." }
            ],
            model: "gpt-3.5-turbo",
          });

        console.log(completion, 'completion');
        console.log(completion.choices[0].message, 'choices');
        
        
        let endTime = new Date(); 
        console.log(`Total Time ${endTime.getTime() - startTime.getTime()}ms !`);
        // res.json({ remedies: result });
        return new Response(JSON.stringify({}), { status: 200 })
    } catch (error) {
        return new Response("Failed to create a new comment", { status: 500 });
    }
}