import Description from '@models/description';
import { connectToDB } from "@utils/database";
import WordSentence from '@models/descriptionWord';
import DescriptionSentence from '@models/descriptionSentence';

export const POST = async (request) => {
    const { mind, general, specyfic, positiveModalities, negativeModalities } = await request.json();
try {
    await connectToDB();
    let startTime = new Date(); 

    const cursor = await Description.find({}).cursor();

    let counter = 0;
    for await (const desc of cursor) {
        counter += 1;
        // console.log(desc)
        const wordSentencesObj = JSON.parse(desc.wordSentencesAsText); // { 'word': [0 ,2 , 3] }
        // descId, sentenceNum, sentence,
        let descriptionSentences = [];

        // descId, word, sentences, 
        let wordSentences = [];

        Object.entries(wordSentencesObj).forEach(([word, sentences]) => {
            wordSentences.push({ word, sentences, description: desc._id })
        });


        desc.sentences.forEach((item, i) => {
            descriptionSentences.push({ description: desc._id, sentence: item, sentenceNumber: i })
        })

        await WordSentence.insertMany(wordSentences)
        await DescriptionSentence.insertMany(descriptionSentences)
        console.log(counter)
    }

    
    
    let endTime = new Date(); 
    console.log(`Total Time ${endTime.getTime() - startTime.getTime()}ms !`);
    // res.json({ remedies: result });
    return new Response(JSON.stringify({}), { status: 200 })
    } catch (error) {
        return new Response("Failed to create a new comment", { status: 500 });
    }
}