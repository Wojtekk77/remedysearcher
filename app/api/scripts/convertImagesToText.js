import Description from '@models/description';
import Remedy from '@models/remedy';
import { connectToDB } from "@utils/database";
import OpenAI from "openai";
import { appendTextToFile, base64_encode, getFilesFromCatalog } from './helpers';
import { arrayOfRemedyNamesAndShortNames } from './kent/shortname-fullname';
import RepertoryImageJSON from '@models/repertoryImageJSON';
import { REMEDY_PROPERTY } from '../../../common/constants.js'
import { isJsonString } from '@utils';

// it will automatically save in scripts
export const convertImagesToText = async ({ 
    text = `The photo shows sorted alphabetically words. List them in javascript array.`,
    saveFileName = 'newFile.js',
    catalogPath = 'app/api/scripts/AIImagesToConvert',
    savePath = 'app/api/scripts/AICreated',
    imgServerPath = 'https://srv44093.seohost.com.pl/zdjecia/',
    saveToFile,
    saveToDB,
    property = REMEDY_PROPERTY.UMYSL,
    updateExistingFiles = false,
}) => {
    const openai = new OpenAI();
    console.log('CONVERT IMAGE TO TEXT')

    try {
        
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

            const sideName = file.name.replaceAll('.jpg', '');
            const adjustedReponse = response.choices[0].message.content.replaceAll('json', '').replaceAll(`\``, '');
            let jsonIsValid = true;


            if (!isJsonString(adjustedReponse)) {
                appendTextToFile(savePath, 'notValidJson.txt', `${file.name} \n\n`);
                jsonIsValid = false;
            }

            // console.log(response.choices[0], 'response.choices[0]');
            if (saveToFile) {
                appendTextToFile(savePath, saveFileName, `${response.choices[0].message.content.replaceAll('words', sideName)} \n \n`)
                console.log('text saved in file: ', saveFileName);
            }

            if (saveToDB) {
                const repImgExists = await RepertoryImageJSON.findOne({ imagePath: `${imgServerPath}${file.name}` })
                
                const createObj = { imagePath: `${imgServerPath}${file.name}`, property, imageAlreadyConverted: false };
                if (jsonIsValid) {
                    createObj.json = adjustedReponse;
                }

                if (!repImgExists) {
                    await RepertoryImageJSON.create(createObj);
                    console.log(file.name, 'text saved in DB')
                }
                else {
                    console.log('Already exists in DB:', file.name, imgServerPath)
                    if (updateExistingFiles && jsonIsValid) {
                        await RepertoryImageJSON.updateOne({ imagePath: `${imgServerPath}${file.name}` }, { $set: { json: adjustedReponse }})
                        console.log('Update already existsting in DB:', file.name, imgServerPath)
                    }

                }
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
