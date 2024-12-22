"use client";

import React, { useCallback, useMemo, useState } from "react";
import { useSession } from 'next-auth/react';

import { DataGrid, GridToolbarContainer, GridToolbarQuickFilter, gridClasses } from '@mui/x-data-grid';

import useRepertorySymptomColumns from '@app/hooks/useRepertorySymptomColumns';

export const CustomToolbar = () => {
  return (
    <GridToolbarContainer>
      {/* <GridToolbarExport /> */}
      <GridToolbarQuickFilter
        // variant="filled"
        InputProps={{
          disableUnderline: true
        }}
        // {...props.quickFilterProps}
      />
    </GridToolbarContainer>
  );
}

const ReprtorySymptomDataGrid = ({ repertorySymptoms, setSelectedReprtorySymptomIds }) => {
  
  const { data: session } = useSession();
  const [filterModel, setFilterModel] = useState({ items: [] });

  const { columns } = useRepertorySymptomColumns({ session, filterModel });
  console.log('Search reload!')
  return (
    <div style={{ height: '73vh' }}>
      <DataGrid
        getRowHeight={() => 'auto'}
        // rowHeight={40}
        sx={{
          [`& .${gridClasses.cell}`]: {
            py: '4px',
          },
          [`& .${gridClasses.cellCheckbox}`]: {
            padding: 0,
            px: '4px',
          }
        }}
        getRowId={(row) => row._id}
        rows={repertorySymptoms}
        columns={columns}
        disableColumnMenu={true}
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        disableExportIcon
        checkboxSelection
        disableRowSelectionOnClick
        onRowSelectionModelChange={(ids) => {
          console.log(ids)
          setSelectedReprtorySymptomIds(ids);
        }}
        filterModel={filterModel}
        onFilterModelChange={(newFilterModel) => setFilterModel(newFilterModel)}
        style={{ maxHeight: '60vh' }}
        disableToolbarButton={true}
        // slotProps={{
        //   toolbar: {
        //     showQuickFilter: false,
        //     quickFilterProps: { debounceMs: 500 },
        //   },
        // }}

        // autosizeOptions={{ includeOutliers: true }}
        // slots={{ toolbar: CustomToolbar }}
      />
    </div>
  );
};

export default React.memo(ReprtorySymptomDataGrid);
