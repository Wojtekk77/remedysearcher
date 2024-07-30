import Description from '@models/description';
import Remedy from '@models/remedy';
import { connectToDB } from "@utils/database";
import OpenAI from "openai";
import { appendTextToFile, base64_encode, getFilesFromCatalog } from './helpers';
import { arrayOfRemedyNamesAndShortNames } from './kent/shortname-fullname';

// it will automatically save in scripts
export const convertImagesToText = async (text = `The photo shows sorted alphabetically words. List them in javascript array.`, saveFileName = 'newFile.js', catalogPath = 'app/api/scripts/AIImageToConvert', savePath = 'app/api/scripts/AICreated' ) => {
    const openai = new OpenAI();
    console.log('CONVERT IMAGE TO TEXT')

    try {
        
        console.log('in try')
        const arrOfFiles = await getFilesFromCatalog(catalogPath);

        for (const file of arrOfFiles) {
            console.log(file.name)
            const base64Image = base64_encode(file.path);

            const response = await openai.chat.completions.create({
                model: "gpt-4o",
                messages: [
                    {
                    role: "user",
                    content: [
                        { 
                            type: "text",
                            text,
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
            appendTextToFile(savePath, saveFileName, `${response.choices[0].message.content.replaceAll('words', sideName)} \n \n`)

        }

        let endTime = new Date(); 
        console.log(`Total Time ${endTime.getTime() - startTime.getTime()}ms !`);
        // res.json({ remedies: result });
        return new Response(JSON.stringify({}), { status: 200 })
    } catch (error) {
        return new Response("Failed to create a new comment", { status: 500 });
    }
}