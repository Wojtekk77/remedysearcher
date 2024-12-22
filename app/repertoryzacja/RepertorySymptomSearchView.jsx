"use client";

import React, { useCallback, useEffect, useState } from "react";
import { Box } from '@mui/material';
import FilterForm from './FilterForm';
import ReprtorySymptomDataGrid from './ReprtorySymptomDataGrid';

const RepertorySymptomSearchView = ({ setSelectedReprtorySymptomIds, showFilter = true }) => {

  const [repertorySymptoms, setRepertorySymptoms] = useState([]);
  const [expandedRepertorySymptoms, setExpandedRepertorySymptoms] = useState([]);

  const handleSetReprtorySymptoms = useCallback((newSymptoms) => {
    setRepertorySymptoms(newSymptoms);
  }, []);

  const handleExpandRepertorySymptom = useCallback(async (values) => {
    try {
      let response = await fetch(`/api/expandRepertorySymptom`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          values
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data.expandedSymptoms);

      const sortedArray = data.expandedSymptoms.sort((a, b) => a.name.localeCompare(b.name));
      setExpandedRepertorySymptoms(sortedArray);

    } catch (error) {
      console.error('Error expanding repertory symptom:', error);
    }
  }, [repertorySymptoms]);

  useEffect(() => {

    if (!repertorySymptoms.length || !expandedRepertorySymptoms.length) {
      return;
    }

    const indexOfSearched = repertorySymptoms?.findIndex(item => {
      return item._id?.toString() === expandedRepertorySymptoms[0]?.parent?.toString()
    });

    const repertorySymptomSegment = repertorySymptoms.slice(indexOfSearched + 1);
    const filteredExpandedRepertorySymptom = expandedRepertorySymptoms.filter(expandedItem => repertorySymptomSegment.every(item => item._id !== expandedItem._id));

    if (!filteredExpandedRepertorySymptom.length) {
      return;
    }

    if (indexOfSearched !== -1) {
      const updatedSymptoms = [
        ...repertorySymptoms.slice(0, indexOfSearched + 1),
        ...filteredExpandedRepertorySymptom,
        ...repertorySymptomSegment,
      ];

      setRepertorySymptoms(updatedSymptoms);
    } else {
      console.error('Parent ID not found in repertorySymptoms');
    }
  
  }, [expandedRepertorySymptoms]);

  return (
    <Box>
      <div style={{ height: 70 }}>{ showFilter ? <FilterForm setRepertorySymptoms={handleSetReprtorySymptoms} /> : null }</div>
      <ReprtorySymptomDataGrid setSelectedReprtorySymptomIds={setSelectedReprtorySymptomIds} repertorySymptoms={repertorySymptoms} expandRepertorySymptom={handleExpandRepertorySymptom} />
    </Box>
  );
};

export default RepertorySymptomSearchView;
