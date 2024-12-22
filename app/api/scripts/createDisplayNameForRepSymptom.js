import RepertorySymptom from '@models/repertorySymptom';
import { createLookupParentPipeline, joinParency } from '../helpers';
import OpenAI from "openai";

const correctJoinedParency = async (joinedParency, openai) => {
    try {
        // const response = await openai.createCompletion({
        //     model: "gpt-4", // Choose the model you want to use
        //     prompt: `Popraw wyrażenie tak aby było gramatycznie poprawne i miało sens, jeżeli uznasz je za zrozumiałe, to nie poprawiaj:\n\n"${joinedParency}"`,
        //     max_tokens: 1000,
        //     temperature: 0.5,
        // });
        // console.log(joinedParency, 'joinedParency');
        const response = await openai.chat.completions.create({
            model: "gpt-4",
            messages: [
                {
                role: "user",
                content: [
                    { 
                        type: "text",
                        text: `Popraw wyrażenie tak aby było gramatycznie poprawne i miało sens, jeżeli uznasz je za zrozumiałe, to nie poprawiaj:\n\n"${joinedParency}"`,
                    },
                ],
                },
            ],
            
        });
        // console.log(response.choices[0].message.content, 'response.choices[0]')
        // Extract the corrected text
        const correctedText = response.choices[0].message.content?.trim();
        return correctedText;
    } catch (error) {
        console.error("Error correcting text:", error);
        throw error;
    }
    

};

export const createDisplayNameForRepSymptom = async () => {

    const openai = new OpenAI();

    const repertorySymptoms = await RepertorySymptom.aggregate([
        {
            $match: {
                parent: { $ne: null },
                $or: [
                    { displayName: { $eq: null } },
                    { displayNameToFix: true },
                ]
            },
        },
        {
            $limit: 10,
        },
        ...createLookupParentPipeline(),
    ]);
    console.log('ęę 1')
    for (const repertorySymptom of repertorySymptoms) {

        const joinedParency = joinParency(repertorySymptom, ',', true);

        try {
            const newJoinedParency = await correctJoinedParency(joinedParency, openai);
            console.log('OLD:', joinedParency);
            console.log('Corrected:', newJoinedParency);
            console.log('===')
            
            // You can now save or use `newJoinedParency` as needed.
        } catch (error) {
            console.error('Failed to correct text:', joinedParency, error);
        }

    }

};
