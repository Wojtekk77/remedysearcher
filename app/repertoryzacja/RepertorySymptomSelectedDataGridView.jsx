"use client";

import React, { useState } from "react";
import { useEffect } from 'react';
import RepertorySymptomSelectedDataGrid from './RepertorySymptomSelectedDataGrid';

const RepertorySymptomSelectedDataGridView = ({ repertorySymptomIds, setSelectedReprtorySymptomIds }) => {

  const [repertorySymptoms, setRepertorySymptoms] = useState([]);
  

  useEffect(() => {

    if (!repertorySymptomIds?.length) {
      setRepertorySymptoms([]);
      return;
    }

    const getRepertorySymptomsByIds = async (ids) => {

      try {
        let response = await fetch(`/api/repertorySymptomSearch`, {
          method: "POST",
          body: JSON.stringify({
            values: {
              ids
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

  return <RepertorySymptomSelectedDataGrid repertorySymptoms={repertorySymptoms} repertorySymptomIds={repertorySymptomIds} setRepertorySymptoms={setRepertorySymptoms} setSelectedReprtorySymptomIds={setSelectedReprtorySymptomIds} />;
};

export default React.memo(RepertorySymptomSelectedDataGridView);
