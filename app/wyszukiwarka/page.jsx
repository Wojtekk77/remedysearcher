"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import { DataGrid, GridToolbarContainer, GridToolbarQuickFilter  } from '@mui/x-data-grid';
import Link from 'next/link';
import { FaAngleRight } from 'react-icons/fa';
import Searcher from "@components/Searcher/Searcher";

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
      <Searcher />
    </div>
  );
};

export default ClinicSearcher;
