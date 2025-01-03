"use client";

import React, { useCallback, useState, useEffect } from "react";
import { useSession } from 'next-auth/react';

import { DataGrid, gridClasses } from '@mui/x-data-grid';
import useRepertorySymptomColumns from '@app/hooks/useRepertorySymptomColumns';

const RepertorySymptomSelectedDataGrid = ({ repertorySymptoms, setRepertorySymptoms, setSelectedReprtorySymptomIds }) => {
  
  const { data: session } = useSession();
  const [removeId, setRemoveId] = useState();
  
  const handleDeleteClick = useCallback((id) => () => {
    setRemoveId(id)
  }, []);

  const { columns } = useRepertorySymptomColumns({ session, handleDeleteClick });

  useEffect(() => {
    if (removeId) {
      setRepertorySymptoms(repertorySymptoms.filter((row) => row._id !== removeId))
      setSelectedReprtorySymptomIds([removeId], true)
      setRemoveId(null)
    }
  }, [removeId])

  console.log('Search selected IDS reload!')
  return (
    <div style={{ height: '73vh' }}>
      <DataGrid
        getRowHeight={() => 'auto'}
        // rowHeight={40}
        sx={{
          [`& .${gridClasses.cell}`]: {
            py: '4px',
          },
        }}
        getRowId={(row) => row._id}
        rows={repertorySymptoms}
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

export default React.memo(RepertorySymptomSelectedDataGrid);
