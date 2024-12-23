"use client";

import React, { useState } from "react";
import { useEffect } from 'react';
import RepertoryRemediesDataGrid from './RepertoryRemediesDataGrid';

const RepertoryRemediesDataGridView = ({ repertorySymptomIds }) => {

  const [repertorySugestedRemedies, setRepertorySugestedRemedies] = useState([]);
  

  useEffect(() => {

    if (!repertorySymptomIds?.length) {
      return;
    }

    const getRepertoryRemediesByIds = async (ids) => {

      try {
        let response = await fetch(`/api/remedySearch`, {
          method: "POST",
          body: JSON.stringify({
            values: {
              ids
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

  console.log('SUGESTED Search reload VIEW!')

  return <RepertoryRemediesDataGrid repertorySugestedRemedies={repertorySugestedRemedies} repertorySymptomIds={repertorySymptomIds} setRepertorySugestedRemedies={setRepertorySugestedRemedies} />;
};

export default React.memo(RepertoryRemediesDataGridView);
