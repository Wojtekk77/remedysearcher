import { connectToDB } from "@utils/database";
import RepertorySymptom from '@models/repertorySymptom';
import mongoose from 'mongoose';

export const POST = async (request) => {

    const { values } = await request.json();
    let { text, property, ids } = values;

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
            $match: {
              'repertorySymptomItem.remedy': { $ne: null },
            },
          },
          {
            $group: {
              _id: '$repertorySymptomItem.remedy',
              repertorySymptoms: { $push: { name: '$name', strength: '$repertorySymptomItem.strength' } }, 
              count: { $sum: 1 },
              powerCount: { $sum: '$repertorySymptomItem.strength' }
            },
          },
          {
            $addFields: {
              countPowerProduct: { $pow: ['$count', '$powerCount'] }
            }
          },
          { 
            $lookup: {
              from: 'remedies',
              localField: '_id',
              foreignField: '_id',
              as: 'remedy',
            },
          },
          {
            $unwind: { path: "$remedy", preserveNullAndEmptyArrays: true }
          },
          {
            $sort: { countPowerProduct : -1, powerCount: -1 }
          },
        ]);

        // console.log(repertorySymptoms, 'repertorySymptoms');

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
// Ponieważ objawy te są szczególne jedynie dla jakiejś częsci klienta, a nie jego całości istoty (z naszego punktu widzenia mjąmają najmniejsze znaczenie (BEZWZGLĘDNIE W PRZYPADKACH PRZEWLEKŁYCH))
// Przykład: Dla przedsiębiorstwa kolejowego - strajk, lub wypadek czy chwilowo niedziałjące linie są mniej ważne niż inteligencja i sprawność działania zarządu - to one powodują, ze kolej działa bez zarzutu.
// w podobny sposób potraktuj klienta (jako całość), a on sam naprawi zaburzenia obejmujące części jego ciała. Musisz go zrozumieć, możesz to tylko zrobić poprzez objawy ogólne i psychiczne.
// naprawiając ład "na obwodzie" - wkrótce załamie sięnowy element systemu. Idź do zarządu, przedstaw sytuacje i pozwól działać.


// Przestroga: Gdybyś chiał samodzielnie wykonać prace - mógłbyś doprowadzić do sytuacji,  której po wyleczeniu np. wyprysku, staniesz nieoczekiwania w obliczu, powiedzmy astmy. Gdy przepiszesz
// na nią lek, nieszczęsny pacjent powróci do ciebie z nową chorobą - reumatyzmem. Spartacztsz sprawę, a jego serce się wstrzyma.
// Zwróć się zatem do organu wykonawczego - do pacjenta, który już od początku miał skłonność do wyprysku, astmy, reumatyzmu; zwróć się do pacjenta jako żywej istoty, która wyraża się przede wszystkim przez swoje objawy ogólne i psychiczne;
// postępuj z nim zgodznie z zasadąprawdopodobieństwa, a on zrobi resztę.
//


const calculateRemedyPoints = () => {

}
