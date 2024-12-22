"use client";

import React, { useCallback, useState } from "react";
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import RepertorySymptomSearchView from './RepertorySymptomSearchView';
import RepertorySymptomSelectedDataGridView from './RepertorySymptomSelectedDataGridView';

const Repertory = () => {

  const [selectedRepertorySymptomIds, setSelectedReprtorySymptomIds] = useState([]);

  const handleSetSelectedReprtorySymptomIds = useCallback((selectedSymptomIds) => {
    setSelectedReprtorySymptomIds(prevState => [...prevState, ...selectedSymptomIds])
  },[setSelectedReprtorySymptomIds])


  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={6} >
          <RepertorySymptomSearchView setSelectedReprtorySymptomIds={handleSetSelectedReprtorySymptomIds} />
        </Grid>
        <Grid size={6}>
          <Box>
            <div style={{ height: 70 }}></div>
            <RepertorySymptomSelectedDataGridView repertorySymptomIds={selectedRepertorySymptomIds} />
          </Box>
          {/* <RepertorySymptomSearchView selectedRepertorySymptomIds={selectedRepertorySymptomIds} showFilter={false} /> */}
        </Grid>
        <Grid size={4}>
          <Item>size=4</Item>
        </Grid>
        <Grid size={8}>
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