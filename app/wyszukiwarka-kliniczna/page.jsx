"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import Form from "@components/Form";
import { DataGrid, GridSearchIcon, GridToolbar, GridToolbarContainer, GridToolbarQuickFilter  } from '@mui/x-data-grid';
import Link from 'next/link';
import { FaAngleRight } from 'react-icons/fa';

const illnessColumns = [
  {
    // id: 'illness',
    // key: 'illness',
    headerName: 'Nazwa choroby',
    field: 'name',
    minWidth: 1200,
    renderCell: ({ value, row }) => {
      const link = `/wyszukiwarka-kliniczna/${row._id}`
      return  <Link href={link} className='list_link' ><div>{value}</div><div><FaAngleRight className='text-lg font-light' /></div></Link>
    },
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

const CreateComment = () => {
  const { data: session } = useSession();

  const [ilnesses, setIlnesses] = useState([]);

  const getIlnesses = async () => {
    try {
      let response = await fetch("/api/illness", {
        method: "GET",
      });
      response = await response.json();
      setIlnesses(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getIlnesses();
  }, [])

  return (
    <div style={{ minHeight: '73vh' }}>
      <div className="header">
        <h1 className='head_text'>
          <span className='blue_gradient'>Wyszukiwarka kliniczna</span>
        </h1>
        {/* <div>{illness.dosage}</div>
        <div>{illness.description}</div> */}
      </div>
      <DataGrid
        getRowId={(row) => row._id}
        rows={ilnesses}
        columns={illnessColumns}
        disableColumnMenu={true}
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        disableExportIcon
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
  );
};

export default CreateComment;
