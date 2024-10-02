"use client";

import { useState } from "react";
import { capitalizeFirstLetter } from '@utils';
import RepertoryImageJSONRemedyItem from './RepertoryImageJSONRemedyItem';


const RepertoryImageJSONObj = ({
  remedies,
  name,
  setDialogData,
  setDialogOpen,
}) => {
  
  const [repSymptomObj, setRepSymptomObj] = useState({ name, value: remedies });

  if (!repSymptomObj) {
    return null;
  }

  const repertoryImageJSONRemedyItems = repSymptomObj.value?.map(shortName => {
    return (
      <RepertoryImageJSONRemedyItem
        id={shortName}
        name={shortName}
        setDialogData={setDialogData}
        setDialogOpen={setDialogOpen}
      />
    );
  });

  return (
    <div>
      <span style={{ marginLeft: 5, }}>
        <button
            onClick={() => handleIncreaseStrength(repSymptomObj)}
            // className="shortName"
            style={{ fontSize: 20 }}
        >
            {`${capitalizeFirstLetter(repSymptomObj.name)}.,`}
        </button>

      </span>
      <div style={{ display: 'flex', marginBottom: 6 }}>
          {repertoryImageJSONRemedyItems}
      </div>

    </div>
  )
};

export default RepertoryImageJSONObj;
