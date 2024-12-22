"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useSession } from "next-auth/react";
import { useDemoData } from '@mui/x-data-grid-generator';
import { DataGrid, GRID_CHECKBOX_SELECTION_COL_DEF, GridToolbarContainer, GridToolbarQuickFilter, gridClasses } from '@mui/x-data-grid';
import Link from 'next/link';
import { FaAngleRight } from 'react-icons/fa';
import { REMEDY_PROPERTY, REMEDY_PROPERTY_NAME } from '@common/constants';
import FormAutocomplete from '@components/Form/FormAutocomplete';
import { Box, FormControl, FormHelperText, InputLabel, TextField, Input, Button, ListItemButton, Grid } from '@mui/material';

const repertorySymptomColumns = [
  // {
  //   id: 'name',
  //   key: 'name',
  //   headerName: 'Nazwa objawu',
  //   field: 'name',
  //   minWidth: 300,
  //   // renderCell: ({ value, row }) => {
  //     // const link = `/wyszukiwarka-kliniczna/${row._id}`
  //     // return  <Link href={link} className='list_link' ><div>{value}</div><div><FaAngleRight className='text-lg font-light' /></div></Link>
  //   // },
  // },
  {
    id: 'joinedParency',
    headerName: 'Pełna nazwa',
    field: 'joinedParency',
    minWidth: 300,

  },
];

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

const SideSearch = () => {
  const { data: session } = useSession();

  const [text, setText] = useState('');
  const [property, setProperty] = useState(REMEDY_PROPERTY.UMYSL);
  const [repertorySymptoms, setRepertorySymptoms] = useState([]);
  const [error, setError] = useState(false);



  const columns = useMemo(() => ([
    {
      ...GRID_CHECKBOX_SELECTION_COL_DEF,
      width: 100,
    },
    ...repertorySymptomColumns,
  ]), []);

  const getRepertorySymptoms = async () => {
    try {
      let response = await fetch(`/api/repertorySymptomSides`, {
        method: "GET",
      });
      response = await response.json();
      setRepertorySymptoms(response.repertorySymptoms);
    } catch (error) {
      console.log(error);
    }
  }

  const getRepertorySymptomsByText = async () => {
    if (text && text?.length <= 2) {
      setError(true);
    }
    else {

      try {
        let response = await fetch(`/api/repertorySymptomSearch`, {
          method: "POST",
          body: JSON.stringify({
            values: {
              text
            }
          }),
        });
  
        response = await response.json();
        setRepertorySymptoms(response.repertorySymptoms);
      } catch (error) {
        console.log(error);
      }
    }
  }

  useEffect(() => {
    // getRepertorySymptoms();
  }, [property])

  return (
    <>
      <Box
        component="form"
        sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, display: 'flex' }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-search"
          label="Słowo kluczowe"
          type="search"
          onChange={(e) => {
            setText(e.target.value)
            setError(false)
          }}
          error={error}
          helperText={error && 'Za krótkie słowo'}
        />
        <Box sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, display: 'flex', height: '4.5rem' }}>
          <Button style={{ marginTop: 8, marginBottom: 8, selfAlign: 'center' }} variant="outlined" onClick={() => getRepertorySymptomsByText()}>Wyszukaj</Button>
        </Box>
      </Box>
      <div style={{ height: '73vh' }}>
        {/* <div style={{ height: '75vh' }}>
          <DataGrid
            {...data}
            loading={loading}
          />
        </div> */}
        <div className="header">
          {/* <h1 className='head_text'>
            <span className='blue_gradient'>Wyszukiwarka kliniczna</span>
          </h1> */}
        </div>
        <DataGrid
          getRowHeight={() => "auto"}
          sx={{
            [`& .${gridClasses.cell}`]: {
              py: 1,
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
          checkboxSelection
          style={{ width: 1200, maxHeight: '75vh' }}
          disableToolbarButton={true}
          hideFooter={true}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
          slots={{ toolbar: CustomToolbar }}
        />

      </div>
    </>
  );
};

export default SideSearch;
