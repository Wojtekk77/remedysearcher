import { useState, useCallback } from "react";
import FormDialog from '@components/Dialogs/FormDialog';
import RepertorySymptomAI from './RepertorySymptomAI';
import { generalCreateModel, generalUpdateModel } from '@utils';


const RepertorySymptomsAI = ({ repertorySymptoms }) => {

  const [dialogModelProperties, setDialogModelProperties] = useState();
  const [dialogConfirmationAction, setDialogConfirmationAction] = useState();
  const [dialogData, setDialogData] = useState();
  const [dialogOpen, setDialogOpen] = useState(false);

  const updateRepSymptom = useCallback(async ({ _id, values }) => {
    return generalUpdateModel({ _id, values, modelName: 'repertorySymptom' });
}, []);

  const createRepertorySymptomItem = useCallback(async({ values }) => {
    await generalCreateModel({ values, modelName: 'repertorySymptomItem' });
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
