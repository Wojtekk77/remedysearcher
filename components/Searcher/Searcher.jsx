"use client";

import { useState, useEffect, useCallback } from "react";
import RemedySearchResultCardList from "./RemedySearchResultCardList";
import { DataGrid } from '@mui/x-data-grid';
import { createColumns } from './helpers';
import { ClientOnly } from '@components/ClientOnly';
import { isMobile } from 'react-device-detect';
import { useSession } from 'next-auth/react';
import { FaExclamationTriangle } from 'react-icons/fa';


const Searcher = () => {

  const [columns, setColumns] = useState([]);
  const { data: session } = useSession();
  // Search states
  const [remedies, setRemedies] = useState([]);
  const [warning, setWarning] = useState({});
  const [searchProps, setSearchProps] = useState({ mind: "", general: "", specyfic: "", positiveModalities: "", negativeModalities: "" });
  const [submitting, setIsSubmitting] = useState(false);
  const [scriptSubmitting, setScripetSubmitting] = useState(false);

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
      setWarning(response.warning);
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleScript = async (e) => {
    setScripetSubmitting(true);
    e.preventDefault();
    try {
      let response = await fetch("/api/scripts", {
        method: "POST",
        body: JSON.stringify({}),
      });
      response = await response.json();
    } catch (error) {
      console.log(error);
    } finally {
      setScripetSubmitting(false);
    }
  };

  const markDescCommWord = useCallback(async (dcwId, isUseful) => {
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
		setColumns(createColumns(remedies[0], markDescCommWord, session?.user));
	}, [remedies]);



  return (
    <div className='feed'>
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
            {
              warning.manyRemedies && (
                <div className='alert-background flex-column' style={{ marginBottom: '15px' }}>
                  <div className='text-sm text-gray-900 flex text-center' style={{ alignItems: 'center'}}>
                    <div className='mr-5'><FaExclamationTriangle/></div> {warning.manyRemedies}
                  </div>
                </div>
              )
            }
            {
              warning.notExistedWordsMessage && (

                <div className='alert-background flex-column' style={{ marginBottom: '15px' }}>
                  <div className='text-lg text-gray-900 flex' style={{ alignItems: 'center'}}>
                    <FaExclamationTriangle />
                    { warning.notExistedWordsMessage && <p className='text-center pl-2'>{warning.notExistedWords.join(', ')}</p> }
                  </div>
                  <p className='text-sm text-gray-600'>{warning.notExistedWordsMessage}</p>
                </div>
              )
            }
            
            {
              warning.notInMMMessage && (
                <div className='alert-background flex-column'>
                  <div className='text-lg text-gray-900 flex' style={{ alignItems: 'center'}}>
                    <FaExclamationTriangle />
                    { warning.notInMMMessage && <p className='text-center pl-2'>{warning.notInMMWords.join(', ')}</p> }
                  </div>
                  <p className='text-sm text-gray-600'>{warning.notInMMMessage}</p>
                </div>
              )
            }
          
          <ClientOnly>
            {
              remedies?.length ? (
                !isMobile ? (
                  <DataGrid
                    rows={remedies}
                    columns={columns}
                    disableColumnMenu={true}
                    style={{ minWidth: 800 }}
                    hideFooter={true}
                    autoHeight={true}
                  />
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
          disabled={scriptSubmitting}
          onClick={handleScript}
          className='mt-5 px-7 py-2 text-sm bg-primary-orange rounded-full text-white'
        >
          {scriptSubmitting ? `Czekanie na skrypt...` : 'Odpal skrypt'}
        </button> */}

    </div>
  );
};

export default Searcher;
