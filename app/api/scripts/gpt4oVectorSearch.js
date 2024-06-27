import Description from '@models/description';
import Remedy from '@models/remedy';
import { connectToDB } from "@utils/database";
import OpenAI from "openai";
import { appendTextToFile, getFilesFromCatalog } from './helpers';
const fs = require('fs');
const path = require('path');

export const gpt4oVectorSearch = async (request) => {
    console.log('ASK OPEN AI gpt4oVectorSearch')

    try {

        let startTime = new Date(); 

        const openai = new OpenAI();
        
        const assistant = await openai.beta.assistants.create({
          name: "Homeopatia",
          instructions: "Jesteś ekspertem do spraw homeopatii. Odpowiedz na zadane pytanie posługując się zbiorem tekstów.",
          model: "gpt-4o",
          tools: [{ type: "file_search" }],
        });
        console.log('1')
        // const arrOfFiles = await getFilesFromCatalog(`app/api/scripts/remedyDescriptions/antimonium_crudum.txt`);
        // console.log(arrOfFiles,' arrOfFiles')
        // ['app/api/scripts/remedyDescriptions/antimonium_crudum.txt']
        const fileStreams = ['app/api/scripts/remedyDescriptions/antimonium_crudum.txt'].map((path) =>
          fs.createReadStream(path),
        );
         
        console.log(fileStreams, 'fileStreams')
        console.log('b')
        // Create a vector store including our two files.
        let vectorStore = await openai.beta.vectorStores.create({
          name: "Leki homeopatyczne",
        });
        console.log('ac')

        await openai.beta.vectorStores.fileBatches.uploadAndPoll(vectorStore.id, { files: fileStreams });
        console.log('ddd')

        await openai.beta.assistants.update(assistant.id, {
          tool_resources: { file_search: { vector_store_ids: [vectorStore.id] } },
        });

        // A user wants to attach a file to a specific message, let's upload it.
        // const aapl10k = await openai.files.create({
        //   file: fs.createReadStream("edgar/aapl-10k.pdf"),
        //   purpose: "assistants",
        // });
        console.log('eee')

        const thread = await openai.beta.threads.create({
          messages: [
            {
              role: "user",
              content:
                `
                Wypisz jak najbardziej szczegółowo w formacie JSON (klucz i wartość). Trzymaj się jak najbardziej szczegółowo tekstu.
                'Objawy typowe': 'czyli na co najbardziej zwracana jest uwaga w tekscie'
                'Objawy umysłowe': 'czyli jaki stan umysłowy, psychiczny odpowiada danemu lekowi (pacjentowi).'
                'Objawy ogólne': 'czyli jaki stan jest najbardziej charakterystyczny dla danego leku (pacjenta). Przykładowo może to być "ropienie", "ból brzucha", "bezsenność", ale może być to cokolwiek na co zwraca uwagę tekst. Może to też być objaw szczegółowy, ale Typowy dla danego leku (pacjenta).'
                'Modalności poprawiające': 'czyli po czym stan leku (pacjenta) się poprawia (polepsza), pacjent doznaje ulgi, poprawy, co mu poprawia nastrój lub gdzie czuje się lepiej. Przy czym zmniejszają się dolegliwości lub samopoczucie staje się lepsze. Może to być "pocieszanie", "cisza", "świeże powietrze", "wypróżnienie się", "samotność", "pora dnia", "posiłek", ale może być to cokolwiek o czym wspomniał autor w tekscie.'
                'Modalności pogarszające': 'czyli po czym stan leku (pacjenta) się pogarsza (czuje się gorzej), objawy się wzmagają. Co mu pogarsza nastrój, kiedy czuje się gorzej. Może to być "świeże powietrze", "wypróżnienie się", "samotność", "cisza", "hałąs", "pora dnia", "posiłek", lub cokolwiek na co zwrócił uwagę autor w tekscie.'
                'Objawy szczegółowe: 'czyli jakie są objawy lokalne leku (pacjenta), zlokalizowane w konkretnej części ciała.'
                'Opis ogólny leku': Całkowity opis, który zawiera jak najwięcej informacji o leku. Zapisz wszystkie informacje o leku, które są tylko możliwe.
                Uwaga, zwróć uwagę czy na pewno modalność poprawia czy pogarsza. Często jest tak, że jedna rzecz polepsza lokanie a pogarsza globalnie.
                `,
              // Attach the new file to the message.
              // attachments: [{ file_id: aapl10k.id, tools: [{ type: "file_search" }] }],
            },
          ],
        });
        console.log(2)
        const run = await openai.beta.threads.runs.createAndPoll(thread.id, {
          assistant_id: assistant.id,
        });
        console.log(3)
         
        const messages = await openai.beta.threads.messages.list(thread.id, {
          run_id: run.id,
        });
         
        const message = messages.data.pop();
        console.log(message, 'message')
        if (message.content[0].type === "text") {
          const { text } = message.content[0];
          const { annotations } = text;
          const citations = [];
        
          let index = 0;
          for (let annotation of annotations) {
            // text.value = text.value.replace(annotation.text, "[" + index + "]");
            const file_citation = annotation.file_citation;
            if (file_citation) {
              // const citedFile = await openai.files.retrieve(file_citation.file_id);
              // citations.push("[" + index + "]" + citedFile.filename);
            }
            index++;
          }
        
          console.log(text.value);
          await appendTextToFile('app/api/scripts/remedyDescriptions', 'antimonium_crudum_AI.js', `${text.value}`)

          // console.log(citations.join("\n"));
        }

        // The thread now has a vector store in its tool resources.
        // console.log(thread.tool_resources?.file_search);

    } catch (error) {
        return new Response("Failed to create a new comment", { status: 500 });
    }
}

