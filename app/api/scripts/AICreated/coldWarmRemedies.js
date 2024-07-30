import { arrayOfRemedyNamesAndShortNames } from '../kent/shortname-fullname';
// const COLD = [
//   "Abrot.", "Acet-ac.", "Acon.", "Agar.", "Agn.", "Alumen", "Alum.", 
//   "Al-ph.", "Alum-sil.", "Am-c.", "Apoc.", "Arg-m.", "ARS.", "Ars-s-fl.", 
//   "Asar.", "Aur.", "Aur-ars.", "Aur-sulph.", "Bad.", "BAR-C.", "Bar-m.", 
//   "Bell.", "Benz-ac.", "Borax.", "Brom.", "Cadm.", "Calc-ars.", "CAL-C.", 
//   "Calc-fl.", "CALC-PH.", "Calc-sil.", "Camph.", "Canth.", "CAPS.", "Carb-an.", 
//   "Carb-veg.", "Carbn-sul.", "Card-m.", "Cauloph.", "CAUST.", "Cham.", 
//   "Chel.", "CHINA.", "Chin-a.", "Cimic.", "Cistus.", "Cocc.", "Coff.", 
//   "Colch.", "Con.", "Cycl.", "DULC.", "Euphras.", "FERR.", "Ferr-ars.", 
//   "Form.", "GRAPH.", "Guaj.", "Hell.", "Helon.", "HEP.", "Hyosc.", "HYPER.", 
//   "Ign.", "KALI-ARS.", "Kali-bich.", "KALI-CARB.", "Kali-chlor.", "Kali-phos.", 
//   "Kali-sil.", "Kalm.", "Kreos.", "Lac-defl.", "MAGN-CARB.", "MAGN-PHOS.", 
//   "Mang.", "MOSCH.", "Mur-ac.", "Natr-ars.", "Natr-carb.", "NITRIC-AC.", 
//   "Nux-m.", "NUX-VOM.", "Oxal-ac.", "Petrol.", "PHOS.", "Phos-ac.", "Plb.", 
//   "Pod.", "PSOR.", "PYROGEN.", "RAN-B.", "Rheum.", "Rhod.", "RHUS.", "RUMEX.", 
//   "Ruta.", "SABAD.", "Sars.", "SEPIA.", "SIL.", "SPIG.", "Stann.", "Staph.", 
//   "Stram.", "STRONT.", "Sul.", "Sul-ac.", "Therid.", "Valer.", "Viol-t.", 
//   "Zinc."
// ];

const newExistingShortNamesToSaveCold = [
  'abrot', 'acet-ac', 'acon', 'agar', 'agn', 'alum', 'alum-sil', 'am-c', 'apoc', 'arg-m', 'ars', 'asar',
  'aur', 'bad', 'bar-c', 'bar-m', 'bell', 'benz-ac', 'brom', 'cadm', 'calc-sil', 'camph', 'canth', 'caps',
  'carb-an', 'card-m', 'caust', 'cham', 'chel', 'chin-a', 'cimic', 'cocc', 'coff', 'colch', 'con', 'cycl', 
  'dulc', 'ferr', 'form', 'graph', 'hell', 'helon', 'hep', 'hyper', 'ign', 'kali-sil', 'kalm', 'kreos', 'mang',
  'mosch', 'mur-ac', 'nux-m', 'phos', 'plb', 'psor', 'ran-b', 'rheum', 'rhod', 'ruta', 'sabad', 'sars', 'sil',
  'spig', 'stann', 'staph', 'stram', 'stront', 'sul-ac', 'valer', 'viol-t', 'zinc'];

const notExistingCold = [
    'alumen', 'al-ph', 'ars-s-fl', 'aur-ars', 'aur-sulph', 'borax', 'calc-ars', 'cal-c', 'calc-fl', 'calc-ph', 'carb-veg',
    'carbn-sul', 'cauloph', 'china', 'cistus', 'euphras', 'ferr-ars', 'guaj', 'hyosc', 'kali-ars', 'kali-bich', 'kali-carb', 'kali-chlor',
    'kali-phos', 'lac-defl', 'magn-carb', 'magn-phos', 'natr-ars', 'natr-carb', 'nitric-ac', 'nux-vom', 'oxal-ac', 'petrol', 'phos-ac',
    'pod', 'pyrogen', 'rhus', 'rumex', 'sepia', 'sul', 'therid'];
 


// let WARM = [
//   "Aesc-h.", "All-c.", "Aloe", "Ambra.", "APIS", "ARG-NIT.", "Asaf.", "Aur-iod.", "Aur-m.", "Bar-iod.", "Bry.", "Calad.",
//   "Calc-iod.", "Calc-sul.", "Cocc-cacti.", "Comoc.", "Crocus.", "Dros.", "Fer-iod.", "FLUOR-AC.", "Grat.", "Ham.", "IOD.",
//   "KALI-IOD.", "KALI-SUL.", "Lach.", "Led.", "Lil-t.", "Lyc.", "NAT-MUR.", "NAT-SUL.", "Niccol.", "Op.", "Picric-ac.", "PLAT.",
//   "Ptelia.", "PULS.", "SABINA", "SECALE", "Spong.", "Sul.", "Sul-iod.", "Thuj.", "Tuberc.", "(Rabe)", "Ustil.", "Vespa.", "Viburn."
// ];

const newExistingShortNamesToSaveWarm = [
  'all-c', 'aloe', 'apis', 'asaf', 'aur-m', 'bry', 'calad', 'dros', 'grat', 'ham', 
  'iod', 'lach', 'led', 'lil-t', 'lyc', 'op', 'plat', 'puls', 'spong', 'thuj'];

const notExistingWarm = [
  'aesc-h', 'ambra', 'arg-nit', 'aur-iod', 'bar-iod', 'calc-iod', 'calc-sul', 'cocc-cacti', 'comoc',
  'croc', 'ferr-i', 'fl-ac', 'kali-iod', 'kali-sul',
  'nat-mur', 'nat-sul', 'niccol', 'picric-ac', 'ptelia', 'sabina', 'secale', 'sul', 'sul-iod', 'tuberc', '(rabe)', 'ustil', 'vespa', 'viburn'];

const updatedNotExistingWarm = [
  'aesc', 'ambr', 'arg-n', 'aur-i', 'bar-i', 'calc-i', 'calc-s', 'cocc-c', 'com',
  'crocus', 'fer-iod', 'fluor-ac', 'kali-i', 'kali-s',
  'nat-m', 'nat-s', 'nicc', 'pic-ac', 'ptel', 'sabin', 
  'sec', 'sulph', 'sul-i', 'tub', 'ust', 'vesp', 'vib'];
   


// let coldANDWarm = ["Cinnabar", "Ip.", "MERC.", "Nat-carb."];
const notExisting = (2) ['cinnabar', 'nat-carb']
const newExistingShortNamesToSave = (2) ['ip', 'merc']

const checkIfShortNamesInShortNames = (newShortNames, existingShortNames) => {

  const notExistingShortNames = [];
  const newExistingShortNamesToSave = [];
  for (const newShortName of newShortNames) {
    const properSNewShortName = newShortName.toLowerCase().replace('.', '');
    console.log(properSNewShortName);
    if (existingShortNames.some(obj => obj.shortName === properSNewShortName)) {
      newExistingShortNamesToSave.push(properSNewShortName);
    }
    else {
      notExistingShortNames.push(properSNewShortName);
    }

  }

}

checkIfShortNamesInShortNames(COLD, arrayOfRemedyNamesAndShortNames);