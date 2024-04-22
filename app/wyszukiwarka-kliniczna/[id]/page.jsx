"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { DataGrid } from '@mui/x-data-grid';
import { CustomToolbar } from '../page';
import { capitalizeFirstLetter } from '@utils';
import { Checkbox, FormControlLabel } from '@mui/material';

function createColumns({ customProps }) {
  return [
    {
      id: 'illness',
      key: 'illness',
      headerName: 'Remedium',
      field: 'remedy',
      minWidth: 200,
      valueGetter: ({ value }) => {
        return capitalizeFirstLetter(value?.name);
      },
    },
    {
      id: 'mainSyndroms',
      key: 'mainSyndroms',
      headerName: 'Objawy ogólne',
      field: 'symptoms',
      minWidth: 500,
      renderCell: ({ value }) => {
        
        const mainSymptoms = <div className="mb-2 mt-2">{value?.filter(s => s.isMainSymptom).map(ms => {
          if (ms.description?.length <= 6) {
            return <div className="pl-6">{ms.description}</div>
          }  
            return (
              <div>
                <FormControlLabel 
                  key={ms._id}
                  control={<Checkbox sx={{ '&.MuiCheckbox-root': { padding: '4px', paddingRight: '8px' }}} />}
                  // label={ms.description}
                  label={<p className="formControlLabel">{ms.description}</p>}
                >
                </FormControlLabel>
              </div>
            )
          })
        }
        </div>

        return mainSymptoms
        // const link = `/wyszukiwarka-kliniczna/${row._id}`
        // return  <Link href={link} className='list_link' ><div>{value}</div><div><FaAngleRight className='text-lg font-light' /></div></Link>
      },
      sortable: false,
    },
    {
      id: 'confirmSyndroms',
      key: 'confirmSyndroms',
      headerName: 'Objawy potwierdzające',
      field: 'confirmSymptoms',
      minWidth: 500,
      sortable: false,
      renderCell: ({ row }) => {

        const confirmSymptoms = <div className="mb-2 mt-2">{row.symptoms?.filter(s => !s.isMainSymptom).map(ms => {
          
          if (ms.description?.length <= 6) {
            return <div>{ms.description}</div>
          }  

          return (
              <div>
                <FormControlLabel 
                  key={ms._id}
                  control={<Checkbox sx={{ '&.MuiCheckbox-root': { padding: '4px', paddingRight: '8px' }}} />}
                  // label={ms.description}
                  label={<p className="formControlLabel">{ms.description}</p>}
                >
                </FormControlLabel>
              </div>
            )
          })
        }
        </div>
        return confirmSymptoms
        // const link = `/wyszukiwarka-kliniczna/${row._id}`
        // return  <Link href={link} className='list_link' ><div>{value}</div><div><FaAngleRight className='text-lg font-light' /></div></Link>
      },
    },
  ];
}

const Illness = ({ params }) => {
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");

  const [illness, setIllness] = useState({});
  const [remedyWithSymptoms, setRemedyWithSymptoms] = useState([]);
  const [remedyRank, setRemedyRank] = useState({});

  const updateRemedyRank = useCallback((remedyName, point) => {
    remedyRank[remedyName] += point;
  }, [])

  useEffect(() => {
    const fetchIllness = async () => {
      const response = await fetch(`/api/illness/${params?.id}`);
      const data = await response.json();

      setIllness(data.illness);
      setRemedyWithSymptoms(data.remedyWithSymptoms);
    };
    
    if (params?.id) fetchIllness();

  }, [params.id]);


  const symptomColumns = useMemo(() => {
    return createColumns({
      customProps: {
        updateRemedyRank,
      }
    });
  }, []);

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
    </div>
  );
};

export default Illness;
