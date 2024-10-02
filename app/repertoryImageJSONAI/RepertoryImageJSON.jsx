import * as React from 'react';
import { useState, useCallback } from "react";
import { REMEDY_PROPERTY_NAME } from '@common/constants';
import RepertoryImageJSONObj from './RepertoryImageJSONObj';


const RepertoryImageJSON = ({ repertoryImageJSON }) => {


  console.log(repertoryImageJSON, 'repertoryImageJSON');
  const [dialogData, setDialogData] = useState();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [imageArrOfObj, setImageArrOfObj] = useState(repertoryImageJSON.arrOfObjs); 


  const handleUpdateRepSymptomItem = useCallback(async ({ _id, values }) => {

      try {
        let response = await fetch(`/api/generalUpdate`, {
        // let response = await fetch(`/api/repertoryImageJSON/${_id}`, {
          method: "PATCH",
          body: JSON.stringify({ _id, modelName: 'repertoryImageJSON', values }),
        });
        const data = await response.json();
        return data?.repertoryImageJSON;

      } catch (error) {
        console.log(error);
      }
  }, []);

  const updateRepertoryImageJSON = useCallback(async ({ _id, values }) => {
    return handleUpdateRepSymptomItem({ _id, values });
  }, [])

  const RepertoryImageJSONObjs = imageArrOfObj.map(obj => {
    return (
      <RepertoryImageJSONObj
        id={obj.name}
        remedies={obj.remedies}
        name={obj.name}
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
            <img src={repertoryImageJSON.imagePath} />
          </div>
        </div>
        <div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <p>{REMEDY_PROPERTY_NAME[repertoryImageJSON.property]}</p>
          </div>
          <p style={{ maxWidth: 500, flexWrap: 'wrap', marginTop: 15 }}>
            {RepertoryImageJSONObjs}
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 5 }}>
            <button
              type='button'
              onClick={() => {
                setDialogData(repertoryImageJSON)
                setDialogOpen(true)
              }}
              className='outline_btn'>Edytuj</button>
          </div>
          
        </div>
      </div>
      {/* { dialogOpen && (
          <FormDialog open={dialogOpen} setOpen={setDialogOpen} data={dialogData} modelName='repertoryImageJSONItem' />
        ) 
      } */}
    </div>
  )
};

export default RepertoryImageJSON;
