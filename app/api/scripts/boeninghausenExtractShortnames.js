import { appendTextToFile } from './helpers';

import Remedy from '@models/remedy';
import { jsonLeftRight } from './AICreated/jsonLeftRight';


export const boeninghausenExtractShortnames = async (request) => {

    const alreadyInDB = await Remedy.find({}).sort({ name: 1 });
    const shortNamesInDB = alreadyInDB.map(remedy => remedy.shortName);
    
    let remediesShortNamesTotal = [];
    try {

        for (const remedyShortNames of Object.values(jsonLeftRight)) {
            remediesShortNamesTotal.push(...remedyShortNames)
        }

        const remediesShortNamesTotalCounter = remediesShortNamesTotal.reduce((acc, i) => {
            const sn = i.replaceAll('*', '').replaceAll('.', '').toLowerCase();
            if (!shortNamesInDB.includes(sn)) {
                if (!acc[sn]) {
                    acc[sn] = 0
                }

                acc[sn] += 1;
            }

            return acc;
        }, {});

        await appendTextToFile('app/api/scripts/kent', 'boeninghousenOnlyOneJSON.js', Object.entries(remediesShortNamesTotalCounter).filter(([key, value]) => value < 2).join(', \n'));

        remediesShortNamesTotal = [...new Set(remediesShortNamesTotal.map(i => i.replaceAll('*', '').replaceAll('.', '').toLowerCase()))].sort();

        await appendTextToFile('app/api/scripts/kent', 'boeninghousenShortNames.js', `export const shortNamesBoeninghousen =[`);
        for (const remedyShortName of remediesShortNamesTotal) {
            if (!shortNamesInDB.includes(remedyShortName)) {
                await appendTextToFile('app/api/scripts/kent', 'boeninghousenShortNames.js', `"${remedyShortName}",\n`);
            }
            // else {
            //     await appendTextToFile('app/api/scripts/kent', 'existingINDB.js', `"${remedyShortName}",\n`);
            // }
        }
        await appendTextToFile('app/api/scripts/kent', 'boeninghousenShortNames.js', `]; \n`);

        let endTime = new Date(); 
        console.log(`Total Time ${endTime.getTime() - startTime.getTime()}ms !`);
        // res.json({ remedies: result });
        return new Response(JSON.stringify({}), { status: 200 })
    } catch (error) {
        return new Response("Failed to create a new comment", { status: 500 });
    }
}

// "a crud": 'ant-c', 
// "a cr": 'ant-c',
// "a tart": 'ant-t',
// "a mur": 'am-m',