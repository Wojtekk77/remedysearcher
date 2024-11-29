"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import { useDemoData } from '@mui/x-data-grid-generator';
import { DataGrid, GridToolbarContainer, GridToolbarQuickFilter  } from '@mui/x-data-grid';
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

const Repertory = () => {
  const { data: session } = useSession();

  const [ilnesses, setIlnesses] = useState([]);

  const { data, loading } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 500,
    maxColumns: 6,
  });

  console.log(data ,'data')

  const getIlnesses = async () => {
    try {
      let response = await fetch("/api/repertorySymptom", {
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
    <div style={{ height: '73vh' }}>
      <div style={{ height: '75vh' }}>
        <DataGrid
          {...data}
          loading={loading}
        />
      </div>
       {/* <div className="header">
        <h1 className='head_text'>
          <span className='blue_gradient'>Wyszukiwarka kliniczna</span>
        </h1>
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
      /> */}

    </div>
  );
};

export default Repertory;
