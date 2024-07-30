"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import { useSession } from 'next-auth/react';
import * as React from 'react';
import { REMEDY_PROPERTY_NAME } from '@common/constants';
import { fontWeight, textTransform } from '@mui/system';
import { capitalizeFirstLetter } from '@utils';


const RepertorySymptomItem = ({
  repertorySymptomItem,
  updateRepertorySymptomItem,
  setDialogData,
  setDialogOpen
}) => {
  
  const [repSymptomItem, setRepSymptomItem] = useState(repertorySymptomItem);

  const handleIncreaseStrength = useCallback(async (rSI) => {
    const newStrength = ((rSI.strength + 1) % 5) || 1;
    const updatedRepSymptpomItem = await updateRepertorySymptomItem({ _id: rSI._id, values: { strength: newStrength } });
    setRepSymptomItem(updatedRepSymptpomItem)
  }, [])


  if (!repSymptomItem) {
    return null;
  }

  const style = {
    
    whiteSpace: 'nowrap',
    fontWeight: repSymptomItem?.strength === 2 || repSymptomItem?.strength === 4 ? 'bold' : 'normal',
    fontStyle: repSymptomItem?.strength === 3 ? 'italic' : 'normal',
  } 

  return (
      <span style={{ marginLeft: 5, }}>
        <button
            style={{ ...style  }}
            onClick={() => handleIncreaseStrength(repSymptomItem)}
            className="shortName"
        >
            {`${repSymptomItem.strength === 4 && '*' || ''}${capitalizeFirstLetter(repSymptomItem.shortName)}.,`}
        </button>
        <button
          style={{ width: 12 }}
          className='editSmallBtn'
          onClick={() => {
            setDialogData(repSymptomItem)
            setDialogOpen(true) 
          }}
        >
          +
        </button>
      </span>
  )
};

export default RepertorySymptomItem;
