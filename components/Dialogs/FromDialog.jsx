import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog({ open, setOpen, data: dataRaw, model, refetchParent }) {

  const [data, setData] = useState(dataRaw);

  const updateField = async (e) => {

    e.preventDefault();

    try {
      const response = await fetch(`/api/${model}`, {
        method: "PATCH",
        body: JSON.stringify({
          ...data,
        }),
      });

    } catch (error) {
      console.log(error);
    }
  };

  console.log(data, 'data in FromDialog')
 
  console.log('FormDialog: open:', open)
  const handleClose = async (e, update) => {
    if (update && data.value) {
      await updateField(e)
      await refetchParent()
    }
    setOpen(false);
  };

  useEffect(() => {

  }, [data])

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
        fullWidth
      >
        <DialogTitle>Edytuj</DialogTitle>
        <DialogContent>
          <DialogContentText fullWidth>
            
              Teks z książki: <br />
              {data?.description} <br />

          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label={`${data?.fieldToUpdate?.includes('AI') ? 'Tekst wygenerowany przez AI' : 'Opis' }`}
            type="text"
            multiline={true}
            rows={2}
            variant="standard"
            defaultValue={data?.[data.fieldToUpdate] || ''}
            onChange={(e) => {
              setData({ ...data, value: e.target.value });
            }}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button style={{color: 'red' }} onClick={(e) => handleClose(e, false)}>Anuluj</Button>
          <Button onClick={(e) => handleClose(e, true)}>Zaktualizuj</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}