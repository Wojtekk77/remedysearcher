import Description from '@models/description';
import Remedy from '@models/remedy';
import { connectToDB } from "@utils/database";
import OpenAI from "openai";
import { appendTextToFile, base64_encode, getFilesFromCatalog } from './helpers';
import { arrayOfRemedyNamesAndShortNames } from './kent/shortname-fullname';

export const convertImageToText = async (request) => {
    const openai = new OpenAI();
    console.log('CONVERT IMAGE TO TEXT')
    let chatHistory = [
        { role: "system", content: "You are a helpful assistant." },
      ];

    try {
        
        console.log('in try')
        const arrOfFiles = await getFilesFromCatalog('app/api/scripts/leftRightSide');
        // console.log(arrOfFiles, 'arrOfFiles');
        for (const file of arrOfFiles) {
            // const file = arrOfFiles[0];
            console.log(file.name)
            const base64Image = base64_encode(file.path);
            // console.log('1')
            // await appendTextToFile('app/api/scripts/leftRightSide', 'leftRightSide.js', 'noo nakurwaim')
            // console.log('text appended to: ')
            // return new Response(JSON.stringify({}), { status: 200 })

            const response = await openai.chat.completions.create({
                model: "gpt-4o",
                messages: [
                    {
                    role: "user",
                    content: [
                        { 
                            type: "text",
                            text: `The photo shows sorted alphabetically words. Can you please list them in javascript array?` 
                        },
                        {
                        type: "image_url",
                        image_url: {
                            // "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gfp-wisconsin-madison-the-nature-boardwalk.jpg/2560px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg",
                            url: `data:image/jpg;base64,${base64Image}`
    
                        },
                        },
                    ],
                    },
                ],
    
            });

            // console.log(response.choices[0], 'response.choices[0]');
            const sideName = file.name.replaceAll('.jpg', '');
            appendTextToFile('app/api/scripts', 'leftRightSide.js', `${response.choices[0].message.content.replaceAll('words', sideName)} \n \n`)

        }

        let endTime = new Date(); 
        console.log(`Total Time ${endTime.getTime() - startTime.getTime()}ms !`);
        // res.json({ remedies: result });
        return new Response(JSON.stringify({}), { status: 200 })
    } catch (error) {
        return new Response("Failed to create a new comment", { status: 500 });
    }
}