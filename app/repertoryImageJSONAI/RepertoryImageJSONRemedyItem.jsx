"use client";

import { useState, useCallback } from "react";
import * as React from 'react';
import { capitalizeFirstLetter } from '@utils';


const RepertoryImageJSONRemedyItem = ({
  name,
  setDialogData,
  setDialogOpen,
}) => {
  
  const [repSymptomObj, setRepSymptomObj] = useState({ name });

  const handleIncreaseStrength = useCallback(async (rSI) => {
    const newStrength = ((rSI.strength + 1) % 5) || 1;
    const updatedRepSymptpomItem = await updateRepertorySymptomItem({ _id: rSI._id, values: { strength: newStrength } });
    setRepSymptomItem(updatedRepSymptpomItem)
  }, [])


  if (!repSymptomObj) {
    return null;
  }

  const style = {
    
    whiteSpace: 'nowrap',
    fontWeight: repSymptomObj?.strength === 2 || repSymptomObj?.strength === 4 ? 'bold' : 'normal',
    fontStyle: repSymptomObj?.strength === 3 ? 'italic' : 'normal',
  } 

  return (
    <div>
      <span style={{ marginLeft: 5, }}>
        <button
            style={{ ...style  }}
            onClick={() => handleIncreaseStrength(repSymptomObj)}
            className="shortName"
        >
            {`${capitalizeFirstLetter(repSymptomObj.name)}.,`}
        </button>
        <button
          style={{ width: 12 }}
          className='editSmallBtn'
          onClick={() => {
            setDialogData(repSymptomObj)
            setDialogOpen(true) 
          }}
        >
          +
        </button>
      </span>
    </div>
  )
};

export default RepertoryImageJSONRemedyItem;
