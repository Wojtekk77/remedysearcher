"use client";

import React, { useCallback, useState, useEffect } from "react";
import { useSession } from 'next-auth/react';

import { DataGrid, gridClasses } from '@mui/x-data-grid';
import useReperytoryRemedyColumns from '@app/hooks/useReperytoryRemedyColumns';

const RepertoryRemediesDataGrid = ({ repertorySugestedRemedies, setRepertorySugestedRemedies }) => {
  
  const { data: session } = useSession();
  // const [removeId, setRemoveId] = useState();
  
  // const handleDeleteClick = useCallback((id) => () => {
  //   setRemoveId(id)
  // }, []);

  const { columns } = useReperytoryRemedyColumns({ session });

  // useEffect(() => {
  //   if (removeId) {
  //     setRepertorySelectedRemedies(repertorySelectedRemedies.filter((row) => row._id !== removeId))
  //     setRemoveId(null)
  //   }
  // }, [removeId])

  return (
    <div style={{ height: '65vh', marginBottom: '8vh' }}>
      <DataGrid
        getRowHeight={() => 'auto'}
        // rowHeight={40}
        sx={{
          [`& .${gridClasses.cell}`]: {
            py: '4px',
          },
        }}
        getRowId={(row) => row._id}
        rows={repertorySugestedRemedies || []}
        columns={columns}
        disableColumnMenu={true}
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        disableExportIcon
        // checkboxSelection
        disableRowSelectionOnClick
        style={{ maxHeight: '60vh' }}
        disableToolbarButton={true}
        slotProps={{
          toolbar: {
            showQuickFilter: false,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
      />
    </div>
  );
};

export default React.memo(RepertoryRemediesDataGrid);
