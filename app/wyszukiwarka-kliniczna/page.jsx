"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import { DataGrid  } from '@mui/x-data-grid';
import Link from 'next/link';
import { FaAngleRight } from 'react-icons/fa';
import { CustomToolbar } from '@components/CustomToolbar';

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

const ClinicSearcher = () => {
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
        <h2 className='head_text'>
          <span className='blue_gradient'>Wyszukiwarka kliniczna</span>
        </h2>
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
        style={{ maxHeight: '70vh', minHeight: '70vh' }}
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

export default ClinicSearcher;
