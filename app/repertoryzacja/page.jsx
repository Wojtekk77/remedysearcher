"use client";

import React, { useCallback, useState } from "react";
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import RepertorySymptomSearchView from './RepertorySymptomSearchView';
import RepertorySymptomSelectedDataGridView from './RepertorySymptomSelectedDataGridView';
import RepertoryRemediesDataGridView from './RepertoryRemediesDataGridView';

const Repertory = () => {

  const [selectedRepertorySymptomIds, setSelectedReprtorySymptomIds] = useState([]);

  const handleSetSelectedReprtorySymptomIds = useCallback((selectedSymptomIds, remove) => {
    if (remove) {
      setSelectedReprtorySymptomIds(prevState => prevState.filter(item => selectedSymptomIds.every(selectedItem => selectedItem !== item.id)))
    }
    else {
      setSelectedReprtorySymptomIds(prevState => { 
        const filteredSymptomIds = selectedSymptomIds.filter(id => !prevState.find(item => item.id === id))
        return [...prevState, ...filteredSymptomIds.map(item => ({ id: item }))]
      })
    }
  },[setSelectedReprtorySymptomIds])

  const handleSetStrengthToSelectedRepertorySymptomIds = useCallback((selectedSymptomId, strength) => {
    setSelectedReprtorySymptomIds(prevState =>
        prevState.map(item =>
            item.id === selectedSymptomId
                ? { ...item, strength: item.strength === strength ? undefined : strength }
                : { ...item }
        )
    );
  }, [setSelectedReprtorySymptomIds]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={6} >
          <RepertorySymptomSearchView setSelectedReprtorySymptomIds={handleSetSelectedReprtorySymptomIds} />
        </Grid>
        <Grid size={6}>
          <Box>
            <div style={{ height: 70 }}></div>
            <RepertorySymptomSelectedDataGridView repertorySymptomIds={selectedRepertorySymptomIds} setSelectedReprtorySymptomIds={handleSetSelectedReprtorySymptomIds} setStrengthToSelectedRepertorySymptomIds={handleSetStrengthToSelectedRepertorySymptomIds}/>
          </Box>
          {/* <RepertorySymptomSearchView selectedRepertorySymptomIds={selectedRepertorySymptomIds} showFilter={false} /> */}
        </Grid>
        <Grid size={6}>
          <RepertoryRemediesDataGridView repertorySymptomIds={selectedRepertorySymptomIds} />
        </Grid>
        <Grid size={6}>
          <Item>size=8</Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Repertory;

const Item = () => {
  return <div style={{ width: '100%', backgroundColor: 'grey' }}></div>
}