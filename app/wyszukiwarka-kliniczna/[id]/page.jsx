"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { DataGrid } from '@mui/x-data-grid';
import { CustomToolbar } from '../page';
import { capitalizeFirstLetter } from '@utils';
import { Button, Checkbox, FormControlLabel } from '@mui/material';
import { useSession } from 'next-auth/react';
import FormDialog from '@components/Dialogs/FromDialog';

export const descriptionCell = ({ value, field, AIGeneratedText, customProps }) => {
  const desc = <div className="mb-2 mt-2">{value.map(ms => {
      if (ms[field]?.length <= 6 || ms['description']?.length <= 6) {
        return <div key={`${ms._id}_${field}`} className="pl-6" onClick={() => {customProps?.isAdmin && customProps.openEditDialog({ fieldToUpdate: field, ...ms })}}>{ms[field]}</div>
      }  
      return (
        <div key={`${ms._id}_${field}`} onClick={() => {customProps?.isAdmin && customProps.openEditDialog({ fieldToUpdate: field, ...ms })}}>
          <FormControlLabel 
            control={<><Checkbox sx={{ '&.MuiCheckbox-root': { padding: '4px', paddingRight: '8px' }}} /></>}
            // label={ms.description}
            label={<p className="formControlLabel">{ms[field]}</p>}
          />
          
        </div>
      )
    })
  }
  </div>
  return desc
}

export const AIKeys = ['id', 'key', 'headerName', 'field'];

const illness = {
  id: 'illness',
  key: 'illness',
  headerName: 'Remedium',
  field: 'remedy',
  minWidth: 200,
  valueGetter: ({ value }) => {
    return capitalizeFirstLetter(value?.name);
  },
};

const getSymptoms = ({ column, field: fieldRaw, headerName, AIGeneratedText, minWidth, customProps }) => {

  const obj = {
    id: column + (AIGeneratedText || ''),
    key: column + (AIGeneratedText || ''),
    headerName,
    field: column + (AIGeneratedText || ''),
    minWidth: minWidth || 500,
    sortable: false,
    renderCell: ({ row }) => {

      const value = row[column];
      const field = fieldRaw + (AIGeneratedText || '');
      
      return descriptionCell({ value, field, AIGeneratedText, customProps}) 
  
      // return mainSymptoms
      // const link = `/wyszukiwarka-kliniczna/${row._id}`
      // return  <Link href={link} className='list_link' ><div>{value}</div><div><FaAngleRight className='text-lg font-light' /></div></Link>
    },
    
  };

  return obj;

};

function createColumns({ customProps }) {

  return [
    illness,
    getSymptoms({ column: 'mainSymptoms', field: 'description', headerName: 'Objawy ogólne', minWidth: 500, customProps  }),
    ...(customProps.isAdmin ? [ getSymptoms({ column: 'mainSymptoms', field: 'description', headerName: 'Objawy ogólne AI', minWidth: 300, AIGeneratedText: 'AI', customProps }) ] : []),
    getSymptoms({ column: 'confirmSymptoms', field: 'description', headerName: 'Objawy potwierdzające', minWidth: 500, customProps  }),
    ...(customProps.isAdmin ? [ getSymptoms({ column: 'confirmSymptoms', field: 'description', headerName: 'Objawy potwierdzające AI', minWidth: 300, AIGeneratedText: 'AI', customProps }) ] : []),
    
  ];
}

const Illness = ({ params }) => {
  const { data: session } = useSession();
  const isAdmin = session?.user?.isAdmin;

  const searchParams = useSearchParams();
  const userName = searchParams.get("name");

  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogData, setDialogData] = useState({});

  const [illness, setIllness] = useState({});
  const [remedyWithSymptoms, setRemedyWithSymptoms] = useState([]);
  const [remedyRank, setRemedyRank] = useState({});


  const openEditDialog = useCallback((data) => {
    setDialogOpen(true)
    setDialogData(data)
  }, [setDialogOpen])

  const updateRemedyRank = useCallback((remedyName, point) => {
    remedyRank[remedyName] += point;
  }, [])

  const fetchIllness = async () => {
    const response = await fetch(`/api/illness/${params?.id}`);
    const data = await response.json();

    setIllness(data.illness);
    setRemedyWithSymptoms(data.remedyWithSymptoms);
  };

  useEffect(() => {
    // const fetchIllness = async () => {
    //   const response = await fetch(`/api/illness/${params?.id}`);
    //   const data = await response.json();

    //   setIllness(data.illness);
    //   setRemedyWithSymptoms(data.remedyWithSymptoms);
    // };
    
    if (params?.id) fetchIllness();

  }, [params.id]);


  const symptomColumns = useMemo(() => {
    return createColumns({
      customProps: {
        updateRemedyRank,
        isAdmin,
        setDialogOpen,
        openEditDialog,
      }
    });
  }, [isAdmin, updateRemedyRank]);

  return (
    <div>
      <div className="header">
        <h1 className='head_text text-left'>
          <span className='blue_gradient'>{illness.name}</span>
        </h1>
        <div className="dosage">{illness.dosage}</div>
        <div className="clinical_description">{illness.description}</div>
      </div>
        <div>
          <DataGrid
            getRowId={(row) => row._id}
            rows={remedyWithSymptoms}
            columns={symptomColumns}
            disableColumnMenu={true}
            // disableColumnFilter
            // disableColumnSelector
            // disableDensitySelector
            // disableExportIcon
            // disableColumnSorting 
            // autoHeight={true}
            getRowHeight={() => 'auto'}
            style={{ minWidth: 1200, maxHeight: '70vh' }}
            disableToolbarButton={false}
            hideFooter={true}
            slotProps={{
              toolbar: {
                showQuickFilter: true,
                quickFilterProps: { debounceMs: 500 },
              },
            }}
            slots={{ toolbar: CustomToolbar }}
            initialState={{
              sorting: {
                sortModel: [
                  {
                    field: 'remedy.name',
                    sort: 'asc',
                  },
                ],
              },
            }}
          />
        </div>
        { dialogOpen && isAdmin && <FormDialog open={dialogOpen} setOpen={setDialogOpen} data={dialogData} model={'symptoms'} refetchParent={fetchIllness} /> }
    </div>
  );
};

export default Illness;
