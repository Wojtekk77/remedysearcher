"use client";

import React, { useCallback, useState, useEffect } from "react";
import { useSession } from 'next-auth/react';

import { DataGrid, gridClasses } from '@mui/x-data-grid';
import useRemedyColumns from '@app/hooks/useRemedyColumns';

const Remedies = ({ remedies }) => {
  
  const { data: session } = useSession();
  // const [removeId, setRemoveId] = useState();
  
  // const handleDeleteClick = useCallback((id) => () => {
  //   setRemoveId(id)
  // }, []);

  const { columns } = useRemedyColumns({ session });

  // useEffect(() => {
  //   if (removeId) {
  //     setRepertorySelectedRemedies(repertorySelectedRemedies.filter((row) => row._id !== removeId))
  //     setRemoveId(null)
  //   }
  // }, [removeId])

  return (
    <div style={{ height: '65vh', marginBottom: '8vh', marginLeft: '8px' }}>
      <DataGrid
        getRowHeight={() => 'auto'}
        // rowHeight={40}
        sx={{
          [`& .${gridClasses.cell}`]: {
            py: '4px',
          },
        }}
        getRowId={(row) => row._id}
        rows={remedies || []}
        columns={columns}
        disableColumnMenu={true}
        // disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        disableExportIcon
        // checkboxSelection
        disableRowSelectionOnClick
        style={{ maxHeight: '60vh', minWidth: '50vw' }}
        disableToolbarButton={true}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
      />
    </div>
  );
};

export default React.memo(Remedies);
