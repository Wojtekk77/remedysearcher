"use client";

import React, { useState } from "react";
import { useEffect } from 'react';
import RepertorySymptomSelectedDataGrid from './RepertorySymptomSelectedDataGrid';

const RepertorySymptomSelectedDataGridView = ({ repertorySymptomIds, setSelectedReprtorySymptomIds, setStrengthToSelectedRepertorySymptomIds }) => {

  const [repertorySymptoms, setRepertorySymptoms] = useState([]);
  

  useEffect(() => {

    if (!repertorySymptomIds?.length) {
      setRepertorySymptoms([]);
      return;
    }

    const getRepertorySymptomsByIds = async (repertorySymptoms) => {

      try {
        let response = await fetch(`/api/repertorySymptomSearch`, {
          method: "POST",
          body: JSON.stringify({
            values: {
              repertorySymptoms
            }
          }),
        });

        response = await response.json();
        setRepertorySymptoms(response.repertorySymptoms);
      } catch (error) {
        console.log(error);
      }
    }
    
    

    getRepertorySymptomsByIds(repertorySymptomIds)

  }, [repertorySymptomIds]);

  return (
    <RepertorySymptomSelectedDataGrid
      repertorySymptoms={repertorySymptoms}
      repertorySymptomIds={repertorySymptomIds}
      setRepertorySymptoms={setRepertorySymptoms}
      setSelectedReprtorySymptomIds={setSelectedReprtorySymptomIds}
      setStrengthToSelectedRepertorySymptomIds={setStrengthToSelectedRepertorySymptomIds}
    />
  );
};

export default React.memo(RepertorySymptomSelectedDataGridView);
