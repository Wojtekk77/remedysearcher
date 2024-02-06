"use client";

import { useState, useEffect, useCallback } from "react";
import RemedySearchResultCardList from "./RemedySearchResultCardList";
import { DataGrid } from '@mui/x-data-grid';
import RemedySearchResultCard from "./RemedySearchResultCard";
import { createColumns } from './helpers';
import useWindowDimensions from '@hooks/useWindowDimensions';
import { ClientOnly } from '@components/ClientOnly';
import { isMobile } from 'react-device-detect';
import { useSession } from 'next-auth/react';

const rows = [
    { id: 1, col1: 'Hello', col2: 'World' },
    { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 3, col1: 'MUI', col2: 'is Amazing', col3: { name: 'inside of obj' } },
];

const columns = [
    { field: 'col1', headerName: 'Column 1', width: 150 },
    { field: 'col2', headerName: 'Column 2', width: 150, renderCell: ({ row }) => (<p>{row.col2}</p>), },
    { field: 'col3', headerName: 'Custom column 3', width: 150, valueGetter: (params) => {
      console.log(params);
      return `${params.row.col3?.name}_my ui`;
    }, },
];


const Searcher = () => {

  const [columns, setColumns] = useState([]);
  const { data: session } = useSession();
  // Search states
  const [remedies, setRemedies] = useState([]);
  const [searchProps, setSearchProps] = useState({ mind: "", general: "", specyfic: "", positiveModalities: "", negativeModalities: "" });
  const [submitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    setIsSubmitting(true);
    e.preventDefault();
    e.target.blur();
    try {
      let response = await fetch("/api/remedies", {
        method: "POST",
        body: JSON.stringify({
          mind: searchProps.mind,
          userId: session?.user.id,
          // general: form.data.general,
          // specyfic: form.data.specyfic,
          // positiveModalities: form.data.positiveModalities,
          // negativeModalities: form.data.negativeModalities,
        }),
      });
      response = await response.json();
      setRemedies(response.remedies);
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleScript = async (e) => {
    setIsSubmitting(true);
    e.preventDefault();
    try {
      let response = await fetch("/api/scripts", {
        method: "POST",
        body: JSON.stringify({
          mind: searchProps.mind,
        }),
      });
      response = await response.json();
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const setDescCommWord = async (e) => {
    setIsSubmitting(true);
    e.preventDefault();
    try {
      let response = await fetch("/api/scripts", {
        method: "POST",
        body: JSON.stringify({
          mind: searchProps.mind,
        }),
      });
      response = await response.json();
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const markDescCommWord = useCallback(async (dcwId, isUseful) => {
    console.log(dcwId, 'dcwId');
    try {
      let response = await fetch("/api/descCommWords", {
        method: "POST",
        body: JSON.stringify({
          id: dcwId,
          isUseful,
        }),
      });
      response = await response.json();
    } catch (error) {
      console.log(error);
    } finally {

    }
  }, []);

  useEffect(() => {
		setColumns(createColumns(remedies[0], markDescCommWord));
	}, [remedies]);



  return (
    <section className='feed'>
      <form onSubmit={handleSubmit} className='relative w-full text-center mb-3'>
        <input
          type='text'
          placeholder='pewność siebie'
          value={searchProps.mind}
          onChange={(e) => setSearchProps({ ...searchProps, mind: e.target.value })}
          required
          className='search_input peer'
        />
        <button
          type='submit'
          disabled={submitting}
          className='mt-5 px-7 py-2 text-sm bg-primary-orange rounded-full text-white'
        >
          {submitting ? `Wyszukiwanie...` : 'Wyszukaj'}
        </button>
      </form>

      {
        <div>
          <ClientOnly>
            {
              remedies?.length ? (
                !isMobile ? (
                  <div style={{ width: '100%' }}>
                    <DataGrid
                      rows={remedies}
                      columns={columns}
                      disableColumnMenu={true}
                      style={{ minWidth: 800 }}
                      hideFooter={true}
                    />
                  </div>
                ) : (
                  <RemedySearchResultCardList
                    remedies={remedies}
                  />
                )
              ) : null
            }
          </ClientOnly>
        </div>
      }

        {/* <button
          type='submit'
          disabled={submitting}
          onClick={handleScript}
          className='mt-5 px-7 py-2 text-sm bg-primary-orange rounded-full text-white'
        >
          {submitting ? `Czekanie na skrypt...` : 'Opdal skrypt'}
        </button> */}

    </section>
  );
};

export default Searcher;
