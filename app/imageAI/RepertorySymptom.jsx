import * as React from 'react';
import { useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useSession } from 'next-auth/react';
import { REMEDY_PROPERTY_NAME } from '@common/constants';
import RepertorySymptomItem from './RepertorySymptomItem';
import FormDialog from '@components/Dialogs/FromDialog';
import { Button } from '@mui/material';


const RepertorySymptom = ({ repertorySymptom }) => {

  console.log(repertorySymptom, 'repertorySymptom 3');

  const [dialogData, setDialogData] = useState();
  const [dialogOpen, setDialogOpen] = useState(false);


  const handleUpdateRepSymptomItem = useCallback(async ({ _id, values }) => {

      try {
        let response = await fetch(`/api/generalUpdate`, {
        // let response = await fetch(`/api/repertorySymptomItem/${_id}`, {
          method: "PATCH",
          body: JSON.stringify({ _id, modelName: 'repertorySymptomItem', values }),
        });
        const data = await response.json();
        return data?.repertorySymptomItem;

      } catch (error) {
        console.log(error);
      }
  }, []);

  const updateRepertorySymptomItem = useCallback(async ({ _id, values }) => {
    return handleUpdateRepSymptomItem({ _id, values });
  }, [])

  const RepertorySymptomItems = repertorySymptom?.repertorySymptomItems?.map(repertorySymptomItem => {
    return (
      <RepertorySymptomItem
        key={repertorySymptomItem._id}
        repertorySymptomItem={repertorySymptomItem}
        updateRepertorySymptomItem={updateRepertorySymptomItem}
        setDialogData={setDialogData}
        setDialogOpen={setDialogOpen}
      />
    );
  });

  return (
    <div style={{ marginBottom: 50 }}>

    
      <div style={{ display: 'flex' }}>
        <div>
          <div style={{ width: 500 }}>
            <img src={repertorySymptom.imagePath} />
          </div>
        </div>
        <div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <p>{repertorySymptom.name} {REMEDY_PROPERTY_NAME[repertorySymptom.property]}</p>
          </div>
          <p style={{ display: 'flex', maxWidth: 500, flexWrap: 'wrap', marginTop: 15 }}>
            {RepertorySymptomItems}
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 5 }}>
            <button
              type='button'
              onClick={() => {
                setDialogData(repertorySymptom)
                setDialogOpen(true)
              }}
              className='outline_btn'>Edytuj</button>
          </div>
          
        </div>
      </div>
      { dialogOpen && (
          <FormDialog open={dialogOpen} setOpen={setDialogOpen} data={dialogData} modelName='repertorySymptomItem' />
        ) 
      }
    </div>
  )
};

export default RepertorySymptom;
