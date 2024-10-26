"use client";

import { useState, useCallback } from "react";
import * as React from 'react';
import { REMEDY_PROPERTY_NAME } from '@common/constants';
import { generalGetModel } from '@utils';
import RepertorySymptomsAI from './RepertorySymptomsAI';


const RepertoySymptomImage = ({ imagePath, repertorySymptoms: repertorySymptomsRaw, property, addRepertorySymptom }) => {

  const [repertorySymptoms, setReprtorySymptoms] = useState(repertorySymptomsRaw)

  const handleRefetch = useCallback(async () => {

    const repSymptoms = await generalGetModel({
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

    setReprtorySymptoms(repSymptoms)
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
            <img src={imagePath} />
            <button
              onClick={async () => {
                await addRepertorySymptom({ values: { imagePath, property: repertorySymptoms[0].property, name: 'NAZWA - NOWO STWORZONY', parentName: 'PARENT NAME NOWO STWORZONY' } });
                await handleRefetch();
              }}
              className="addButton"
            >
              + Dodaj symptom
            </button>
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
