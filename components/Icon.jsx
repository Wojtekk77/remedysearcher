import React from 'react';

import { 
  FaArrowLeft, 
  FaArrowRight, 
  FaSnowflake, 
  FaFire, 
  FaArrowsAltH, 
  FaArrowUp, 
  FaArrowDown, 
  FaBrain, 
  FaArrowCircleDown, 
  FaHeadSideVirus, 
  FaEye, 
  FaEyeSlash, 
  // FaEarListen, 
  FaVolumeUp, 
  // FaNose, 
  FaGrin, 
  // FaMouth, 
  FaTooth, 
  // FaUserTie, // Changed from FaThroat, 
  FaUserTie, 
  FaUtensils, 
  FaChild, 
  FaSignOutAlt, 
  FaToilet, 
  FaWater, 
  FaTint, 
  FaRestroom, 
  FaSyringe, 
  FaMars, 
  FaVenus, 
  FaMicrophone, 
  FaLungs, 
  FaWind, 
  FaHeadSideMask, 
  FaTemperatureHigh, 
  FaLayerGroup, 
  FaBone, 
  FaBed, 
  FaTemperatureLow, 
  FaSun, 
  FaShower, 
  FaRainbow, 
  FaQuestionCircle,
  FaGrinTongue, 
} from 'react-icons/fa';

import { GiNoseFront } from "react-icons/gi";
import { IoEarSharp } from "react-icons/io5";
import { MdReadMore, MdExpandMore } from "react-icons/md";

const ICONS = {
  1: <FaArrowLeft />, // Lewa
  2: <FaArrowRight />, // Prawa
  3: <FaSnowflake />, // Pogorszenie pod wpływem zimna
  4: <FaFire />, // Pogorszenie pod wpływem ciepła
  5: <FaArrowsAltH />, // Objawy występują po przekątnej
  6: <FaArrowUp />, // Lewa górna prawa dolna
  7: <FaArrowDown />, // Lewa dolna prawa górna
  8: <FaBrain />, // Umysł
  9: <FaArrowCircleDown />, // Zawroty głowy
  10: <FaHeadSideVirus />, // Głowa
  11: <FaEye />, // Oko
  12: <FaEyeSlash />, // Wzrok
  13: <IoEarSharp />, // Ucho
  14: <FaVolumeUp />, // Słuch
  15: <GiNoseFront />, // Nos
  16: <FaGrin />, // Twarz
  17: '', // <FaMouth />, // Jama ustna
  18: <FaTooth />, // Zęby
  19: <FaGrinTongue />, // Garło (closest match)
  20: <FaUserTie />, // Szyja (closest match for "neck" concept)
  21: <FaUtensils />, // Żołądek (symbolic for digestion)
  22: <FaChild />, // Brzuch (closest match, represents the abdomen)
  23: <FaSignOutAlt />, // Odbytnica (symbolizes exit, closest option)
  24: <FaToilet />, // Stolec (toilet symbol for stool)
  25: <FaWater />, // Pęcherz moczowy (water for urine-related organs)
  26: <FaTint />, // Nerki (symbolizes liquid filtration)
  27: <FaRestroom />, // Gruczoł krokowy (symbol for restroom)
  28: <FaSyringe />, // Cewka moczowa (no direct icon, closest concept for medical context)
  29: <FaTint />, // Mocz (similar to water/urine concept)
  30: <FaMars />, // Męskie narządy płciowe (Mars symbol for male)
  31: <FaVenus />, // Kobiece narządy płciowe (Venus symbol for female)
  32: <FaMicrophone />, // Krtań i tchawica (related to voice, symbolic of larynx)
  33: <FaLungs />, // Oddychanie (lungs for breathing)
  34: <FaWind />, // Kaszel (air movement)
  35: <FaHeadSideMask />, // Plwocina (odkrztuszanie) (symbolic of coughing or spitting)
  36: <FaTemperatureHigh />, // Klatka piersiowa (heat symbolizes the chest or internal organs)
  37: <FaLayerGroup />, // Plecy (back, closest match to layers)
  38: <FaBone />, // Kończyny (limbs, bones are the most direct association)
  39: <FaBed />, // Sen (bed for sleep)
  40: <FaTemperatureLow />, // Dreszcze (symbolic of cold or shivering)
  41: <FaSun />, // Gorączka, gorąco (sun symbol for heat/fever)
  42: <FaShower />, // Poty (sweating concept)
  43: <FaRainbow />, // Skóra (symbolic representation of colors/skin)
  44: <FaQuestionCircle />, // Objawy ogólne (general symptoms, question mark as general indicator)
};

const EXTRA_ICONS = {
  showMore: <MdReadMore />,
  expandMore: <MdExpandMore />
}


const Icon = ({ property, style, icon, onClick }) => {

  if (property) {
    return <div onClick={onClick}>{ICONS[property]}</div>;
  }


  return <div style={{ cursor: onClick ? 'pointer' : 'normal', padding: 5, color: '#0033aa', alignSelf: 'center' }} onClick={onClick}>{EXTRA_ICONS[icon]}</div> 

};

export default Icon;
