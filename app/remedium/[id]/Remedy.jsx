"use client";

import React, { useCallback, useState, useEffect } from "react";
import { useSession } from 'next-auth/react';

import { DataGrid, gridClasses } from '@mui/x-data-grid';
import useRemedyColumns from '@app/hooks/useRemedyColumns';
import SafeHTML from '@components/SafeHTML/SafeHTML';

const Remedy = ({ remedy }) => {
  
  const { data: session } = useSession();


  return (
    <div style={{ height: '65vh', marginBottom: '8vh', marginLeft: '8px' }}>
      <div>{remedy?.remedyName}</div>
      {/* <DataGrid
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
      /> */}
      <SafeHTML htmlContent={remedy?.descriptionHtml} />
    </div>
  );
};

export default React.memo(Remedy);
