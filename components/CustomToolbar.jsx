import { GridToolbarContainer, GridToolbarQuickFilter } from '@node_modules/@mui/x-data-grid';
import React from 'react';

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
};
