"use client";

import React, { useCallback, useState } from "react";
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import RemediesView from './RemediesView';

const Repertory = () => {

  // const [selectedRepertorySymptomIds, setSelectedReprtorySymptomIds] = useState([]);

  // const handleSetSelectedReprtorySymptomIds = useCallback((selectedSymptomIds, remove) => {
  //   if (remove) {
  //     setSelectedReprtorySymptomIds(prevState => prevState.filter(item => selectedSymptomIds.every(selectedItem => selectedItem !== item)))
  //   }
  //   else {
  //     setSelectedReprtorySymptomIds(prevState => [...prevState, ...selectedSymptomIds])
  //   }
  // },[setSelectedReprtorySymptomIds])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={6} >
          <RemediesView />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Repertory;

const Item = () => {
  return <div style={{ width: '100%', backgroundColor: 'grey' }}></div>
}