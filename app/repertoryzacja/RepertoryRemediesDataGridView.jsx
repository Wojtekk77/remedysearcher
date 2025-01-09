"use client";

import React, { useState } from "react";
import { useEffect } from 'react';
import RepertoryRemediesDataGrid from './RepertoryRemediesDataGrid';

const RepertoryRemediesDataGridView = ({ repertorySymptomIds }) => {

  const [repertorySugestedRemedies, setRepertorySugestedRemedies] = useState([]);
  

  useEffect(() => {

    if (!repertorySymptomIds?.length) {
      setRepertorySugestedRemedies([]);
      return;
    }

    const getRepertoryRemediesByIds = async (repertorySymptoms) => {

      try {
        let response = await fetch(`/api/remedySearch`, {
          method: "POST",
          body: JSON.stringify({
            values: {
              repertorySymptoms
            }
          }),
        });

        response = await response.json();
        setRepertorySugestedRemedies(response.sugestedRemedies);
      } catch (error) {
        console.log(error);
      }
    }
    
    

    getRepertoryRemediesByIds(repertorySymptomIds)

  }, [repertorySymptomIds]);


  return <RepertoryRemediesDataGrid repertorySugestedRemedies={repertorySugestedRemedies} repertorySymptomIds={repertorySymptomIds} setRepertorySugestedRemedies={setRepertorySugestedRemedies} />;
};

export default React.memo(RepertoryRemediesDataGridView);
