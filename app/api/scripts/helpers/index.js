const fs = require('fs');
const path = require('path');
import OpenAI from "openai";

/**
 * Get all file names and their paths from a specified catalog.
 *
 * catalogPath - The name of the catalog (directory).
 * returns {Promise<Array<{name: string, path: string}>>} - A promise that resolves to an array of file objects with name and path properties.
 */
// 'app/api/scripts/leftRightSide'
export async function getFilesFromCatalog(catalogPath) {
    const normalizedPath = path.normalize(`${__dirname}/../../../../../${catalogPath}`);

    return new Promise((resolve, reject) => {
        fs.readdir(normalizedPath, { withFileTypes: true }, (err, files) => {

            if (err) {
                console.log(err)
                return reject(err);
            }

            const fileList = files
                .filter(file => file.isFile())
                .map(file => ({
                    name: file.name,
                    path: path.join(catalogPath, file.name)
                }));

            resolve(fileList);
        });
    });
}



// function to encode file data to base64 encoded string
export function base64_encode(fileDirectory) {
    const normalizedPath = path.normalize(`${__dirname}/../../../../../${fileDirectory}`)
    console.log(normalizedPath, 'normalizedPath')
    return fs.readFileSync(normalizedPath, 'base64');
}

// var base64str = base64_encode('kitten.jpg');

// // Usage example
// getFilesFromCatalog('myCatalog')
//     .then(files => {
//         console.log(files);
//     })
//     .catch(error => {
//         console.error('Error reading catalog:', error);
//     });

export async function appendTextToFile(directory, filename, text) {

    try {

        // Change to the specified directory
        const normalizedPath = path.normalize(`${__dirname}/../../../../../${directory}/${filename}`)

        // Append the text to the file
        fs.appendFile(normalizedPath, text, (err) => {
            if (err) {
                console.error('Error appending to file:', err);
            } else {
                // console.log('Text has been appended successfully.');
            }
        });
    } catch (err) {
        console.error('Error changing directory or appending to file:', err);
    }
}

// // Example usage:
// const directory = './path/to/your/directory'; // Replace with your desired directory path
// const filename = 'example.txt';
// const text = 'This is some additional text to be appended to the file.\n';

// appendTextToFile(directory, filename, text);



export async function processTextArrayOfObj (arrayOfObj, field, instructions) {

    const openai = new OpenAI();

    // Check if input is an array
    if (!Array.isArray(arrayOfObj)) {
        console.log('must be an array')
      throw new Error("Input must be an array of text lines");
    }

    let result = []; 
    for (const obj of arrayOfObj) {
        const aiGenerated =  await processSingleLine(obj[field], instructions, openai);
        result.push({ ...obj, descriptionAI: obj[field], descriptionAI: aiGenerated });
    }
    
    return result;
}

export const processSingleLine = async (text, instructions, openai) => {

  try {

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // or the appropriate model you want to use
      messages: [
        { role: "system",
            content: `${instructions}`
        },
        { role: "user", content: text }, // User's input text line
      ],
    });

    // Return the response text
    return response.choices[0].message.content;
    
    } catch (error) {
        console.error("Error processing line:", line, error);
    throw error;
    }
};