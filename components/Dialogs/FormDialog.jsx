import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog({ open, setOpen, data: dataRaw, modelProperties, refetchParent, disabledFields = [], dialogConfirmationAction }) {

  const [data, setData] = useState({ _id: dataRaw._id, modelProperties, values: {} });

  const handleSetData = (obj) => {
    setData({ ...data, values: { ...data.values, ...obj } });
  }

  const updateField = async (e) => {

    e.preventDefault();

    if (Object.keys(data.values || {}).length === 0) {
      return;
    }

    try {
      const response = await fetch(`/api/${data.modelProperties?.apiPath}`, {
        method: "PATCH",
        body: JSON.stringify({
          ...data,
          modelName: data.modelProperties?.modelName,
        }),
      });

      if (dialogConfirmationAction) {
        await dialogConfirmationAction({ _id: data._id });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleClose = async (e, update) => {
    console.log('CLOSE')
    if (update && data._id) {
      await updateField(e)
      await refetchParent && refetchParent()
    }
    setOpen(false);
  };

  useEffect(() => {

  }, [data])

  const dialogFields = Object.entries(dataRaw || {}).map(([key, value]) => {

    let disabled = false;

    if (['_id', 'repertorySymptom', 'remedy', 'createdAt', 'updatedAt', '__v', 'order', 'isMainSymptom', 'repertorySymptomItems'].includes(key)) {
      return <div key={key} ></div>
    }

    if ((key !== 'isParent' && typeof value === 'boolean') || disabledFields.includes(key)) {
      disabled=true
    }

    return <DialogField key={key} autoFocus={(key === 'shortName')} label={key} value={value} setData={handleSetData} disabled={disabled}/>
  });

  return (
    <React.Fragment>

      <Dialog
        open={true}
        onClose={handleClose}
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            handleClose(e, true)
          }
        }}
        fullWidth={true}
        disableRestoreFocus
      >
        <DialogTitle>Edytuj</DialogTitle>
        <DialogContent>
          { dialogFields }
        </DialogContent> 
        <DialogActions>
          <Button style={{color: 'red' }} onClick={(e) => handleClose(e, false)}>Anuluj</Button>
          <Button onClick={(e) => handleClose(e, true)}>Zaktualizuj</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

const DialogField = ({ label, value, setData, disabled }) => {

  const [primaryValue, setPrimaryValue] = useState(value);
  const useFullWidth = value.length > 15;
  // console.log(useFullWidth, 'useFullWidth');
  return (
    <div style={{ paddingBottom: 10 }}>
      <DialogContentText 
        // fullWidth={true}
      >

        Wartość początkowa: <span style={{ fontWeight: 'bold' }}>{ useFullWidth ? <><br/>{primaryValue?.toString()}<br/></> : <>{primaryValue?.toString()}</>}</span>

      </DialogContentText>
    
      <TextField
        autoFocus={label === 'shortName'}
        margin="dense"
        id={label}
        label={`${label?.includes('AI') ? 'Tekst wygenerowany przez AI' : label }`}
        type={typeof value}
        multiline={useFullWidth}
        rows={useFullWidth ? 2 : 1}
        // variant="standard"
        defaultValue={value || ''}
        onChange={(e) => {
          setData({ [label]: e.target.value });
        }}
        fullWidth={useFullWidth}
        disabled={disabled || label === 'description'}
      />
    </div>
  )
}
