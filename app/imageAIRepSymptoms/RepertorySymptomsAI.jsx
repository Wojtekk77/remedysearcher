import React, { useState, useCallback } from "react";
import FormDialog from '@components/Dialogs/FormDialog';
import RepertorySymptomAI from './RepertorySymptomAI';
import { generalCreateModel, generalUpdateModel } from '@utils';


const RepertorySymptomsAI = ({ repertorySymptoms, refetchImage }) => {

  const [dialogModelProperties, setDialogModelProperties] = useState();
  const [dialogConfirmationAction, setDialogConfirmationAction] = useState();
  const [dialogData, setDialogData] = useState();
  const [dialogOpen, setDialogOpen] = useState(false);


  const createRepertorySymptomItem = useCallback(async({ values }) => {
    await generalCreateModel({ values, modelName: 'repertorySymptomItem' });
  }, []);

  const updateRepSymptom = useCallback(async ({ _id, values }) => {

    console.log(`PATCH: /api/repertorySymptom/${_id}`)
    try {
      let response = await fetch(`/api/repertorySymptom/${_id}`, {
          method: "PATCH",
          // modelName: 'repertprSymptom'
          body: JSON.stringify({ _id, values }),
      });
      
      const data = await response.json();

      return data.repertorySymptom;

  } catch (error) {
      console.log('PATCH REPERTORY SYMPTOM:', error);
  }

    return generalUpdateModel({ _id, values, modelName: 'repertorySymptom' });
  }, []);

  const repSymptoms = repertorySymptoms?.map(repertorySymptom => {
    return <RepertorySymptomAI
      key={repertorySymptom._id}
      repertorySymptom={repertorySymptom}
      setDialogData={setDialogData}
      setDialogOpen={setDialogOpen}
      setDialogModelProperties={setDialogModelProperties}
      setDialogConfirmationAction={setDialogConfirmationAction}
      createRepertorySymptomItem={createRepertorySymptomItem}
      updateRepSymptom={updateRepSymptom}
      refetchImage={refetchImage}
    />
  });

  return (
    <div>
      {repSymptoms}
      { dialogOpen && (
          <FormDialog open={dialogOpen} setOpen={setDialogOpen} data={dialogData} modelProperties={dialogModelProperties} dialogConfirmationAction={dialogConfirmationAction} />
        ) 
      }
    </div>
  )

};

export default RepertorySymptomsAI;
