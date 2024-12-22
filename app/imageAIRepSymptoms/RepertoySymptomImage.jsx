"use client";

import { useState, useCallback } from "react";
import * as React from 'react';
import { REMEDY_PROPERTY_NAME } from '@common/constants';
import { generalGetModel } from '@utils';
import RepertorySymptomsAI from './RepertorySymptomsAI';


const RepertoySymptomImage = ({ imagePath, repertorySymptoms: repertorySymptomsRaw, property }) => {

  const [repertorySymptoms, setRepertorySymptoms] = useState(repertorySymptomsRaw)

  const handleRefetch = useCallback(async () => {

    let repSymptoms = await generalGetModel({
      modelName: 'repertorySymptom',
      match: { $match: { imagePath }},
      lookup: { 
        $lookup: {
          from: 'repertorysymptomitems',
          localField: '_id',
          foreignField: 'repertorySymptom',
          as: 'repertorySymptomItems',
        },
      }
    });

    repSymptoms = repSymptoms.sort((a,b) => a.orderNumber - b.orderNumber)

    setRepertorySymptoms(repSymptoms)
  }, [])


  if (!imagePath) {
    return null;
  }

  return (
    <div style={{ marginBottom: 50 }}>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <p style={{ fontWeight: 'bold' }}>{REMEDY_PROPERTY_NAME[property]}</p>
      </div>
      <div style={{ display: 'flex' }}>

        <div>
          <div style={{ width: 500 }}>
            {imagePath}
            <img src={imagePath} />
            <button
              className="addButton editButton"
              style={{ marginLeft: 15 }}
              onClick={async () => {
                await handleRefetch();
              }}
            >
              Odśwież
            </button>
          </div>
        </div>
        <div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <RepertorySymptomsAI repertorySymptoms={repertorySymptoms} refetchImage={handleRefetch}/>
          </div>
        </div>
      </div>
    </div>
  )
};

export default RepertoySymptomImage;
