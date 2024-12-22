import { connectToDB } from "@utils/database";
import RepertorySymptom from '@models/repertorySymptom';
import mongoose from 'mongoose';

export const POST = async (request) => {

    const { values } = await request.json();
    let { text, property, ids } = values;
    console.log(text, property, '<-text, propertry')
    try {

        await connectToDB()
        let repertorySymptoms = await RepertorySymptom.aggregate([
          { $match: { _id: { $in: ids.map(id => new mongoose.Types.ObjectId(id) )}} },
          {
              $sort: {
                  property: 1,
                  name: 1,
              },
          },
          { 
            $lookup: {
              from: 'repertorysymptomitems',
              localField: '_id',
              foreignField: 'repertorySymptom',
              as: 'repertorySymptomItem',
            },
          },
          {
            $unwind: { path: "$repertorySymptomItem", preserveNullAndEmptyArrays: true }
          },
          {
            $group: {
              _id: '$repertorySymptomItem'
            },
          },
        ]);
        console.log(repertorySymptoms, 'repertorySymptoms');

        // return new Response(JSON.stringify({ imagesWithJSON: [{img1: '11 1'}, { img2: '2 12'}] }), { status: 200 })
        return new Response(JSON.stringify({ sugestedRemedies: repertorySymptoms }), { status: 200 })

    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
};

// PAMIĘTAJ, ŻEBY ŁĄCZYĆ SYNONIMY -> NP. PRAGNIENIE OTWARTEGO POWIETRZA I POPRAWA POD WPŁYWEM POWIETRZA, 

// 1-SZE POD WSZGLĘDEM WARTOŚCI (OBJAWY PSYCHICZNE / REAKCJE EMOCJONALNE)
// Wśród objawów ogólnych najwyższą wartość mają - jeśli są wyraźnie zaznaczone - OBJAWY PSYCHICZNE. Silnie zaznaczony objaw psychiczny zawsze wyeliminuje liczne,
// słabo zaznaczone objawy o niższej wartości. (Mogą się one jednak nigdy nie pojawić w patogenezie leku - prawdopodobnie z powodu braku wystarczająco drastycznej próby lekowej, ajednak od czasu do czasu lek ujawnia je w swoim obrazie.)
// Objawy psychiczne ZAWSZE, POD WARUNKIEM, ŻE SĄ WYRAŹNIE SPRESYCOWANE I ZAZNACZONE, są najważniejszymi objawami przypadku.

// 2-GIE POD WZGLĘDEM WARTOŚCI (REAKCJE NA OTOCZENIE FIZYCZNE)
// Reakcje na pory roku, na gorąco, zimno, wilgoć, i suchość, burzę i śnieżycę, pozycję,, ruch, wstrząsy, dotyk itp.
// jednak aby nabrały znaczenia - muszą być zapisane albo kapitaikami (pogrubieniem) lub italikiem (tak w obrazie pacjenta jak i w repertorium)
// niektórych, ale tylko niektórych z nich można używać jako objawów eliminujących np. (wyraźna poprawa w gorącym otoczeniu -> wyeliminuje leki, które mają pogorszenie w gorącym otoczeniu)

// 3-CIE POŻĄDANIA I AWERSJE
// Aby miały wartość nie może chodzić o zwykłe "lubi lub nie lubi" lecz o "pragnie" i "nienawidzi" zapisane wersalikiem i w repertorium i w obrazie pacjenta
// Tak czy inaczej ZGODNYM TYPEM CZCIONKI

// Przykład Jeżeli pacjent ma lekki niepokój ruchowy to leki Ars. i Rhus., które mają największy stopień niepokoju ruchowego będą niewskazane. 
// ? Wersalik zastosowany w repertorium nigdy nie pomoże gdy objawy pacjenta nie będą zapisane wersalikiem

// 4-TE U KOBIET (STAN ZWIĄZANY Z MIESIĄCZKĄ)
// To znaczy ogólne nasilenie objawów PRZED, W TRAKCIE I PO MIESIĄCZCE
// Mniejsze znaczenie mają informacje czy miesiączki pojawiają się wcześnie czy późno i jak są obfite - to ostatnie oczywiście wtedy gdy ich wystąpienie nie wiąże się z polipami, włókniakami lub okresem przekwitania.


// 5-TE najmniej ważne (OBJAWY SZCZEGÓLNE) - prawdopodobnie z ich powodu klient do Ciebie przyjdzie
// Wysłuchasz jego historii starając się przerywać jak najrzadziej lecz będziesz analizował objawy szczegółowe jako ostatnie
// Ponieważ objawy te są szczególne jedynie dla jakiejś częsci klienta, a nie jego całości 


const calculateRemedyPoints = () => {

}
