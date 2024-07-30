import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { capitalizeFirstLetter } from '@utils';

export default function FormDialog({ open, setOpen, data: dataRaw, modelName, refetchParent, disabledFields = [] }) {

  const [data, setData] = useState({ _id: dataRaw._id, modelName, values: {} });

  const handleSetData = (obj) => {
    setData({ ...data, values: { ...data.values, ...obj } });
  }

  const updateField = async (e) => {

    e.preventDefault();

    try {
      const response = await fetch(`/api/generalUpdate`, {
        method: "PATCH",
        body: JSON.stringify({
          ...data,
        }),
      });

    } catch (error) {
      console.log(error);
    }
  };

  const handleClose = async (e, update) => {
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

    if (['_id', 'repertorySymptom', 'remedy', 'createdAt', 'updatedAt', '__v', 'order', 'isMainSymptom'].includes(key)) {
      return <div key={key} ></div>
    }

    if (typeof value === 'boolean' || disabledFields.includes(key)) {
      disabled=true
    }

    return <DialogField key={key} label={key} value={value} setData={handleSetData} disabled={disabled}/>
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
        autoFocus={true}
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
        disabled={disabled || label === 'description' || typeof value === 'boolean'}
      />
    </div>
  )
}


// export default function FormDialog({ open, setOpen, data: dataRaw, model, refetchParent }) {

//   const [data, setData] = useState(dataRaw);

//   const updateField = async (e) => {

//     e.preventDefault();

//     try {
//       const response = await fetch(`/api/${model}`, {
//         method: "PATCH",
//         body: JSON.stringify({
//           ...data,
//         }),
//       });

//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleClose = async (e, update) => {
//     if (update && data.value) {
//       await updateField(e)
//       await refetchParent()
//     }
//     setOpen(false);
//   };

//   useEffect(() => {

//   }, [data])

//   return (
//     <React.Fragment>

//       <Dialog
//         open={true}
//         onClose={handleClose}
//         onKeyUp={(e) => {
//           if (e.key === 'Enter') {
//             handleClose(e, true)
//           }
//         }}
//         fullWidth
//       >
//         <DialogTitle>Edytuj</DialogTitle>
//         <DialogContent>
//           <DialogContentText fullWidth>
            
//               Teks z książki: <br />
//               {data?.description} <br />

//           </DialogContentText>
//           <TextField
//             autoFocus
//             margin="dense"
//             id="description"
//             label={`${data?.fieldToUpdate?.includes('AI') ? 'Tekst wygenerowany przez AI' : 'Opis' }`}
//             type="text"
//             multiline={true}
//             rows={2}
//             variant="standard"
//             defaultValue={data?.[data.fieldToUpdate] || ''}
//             onChange={(e) => {
//               setData({ ...data, value: e.target.value });
//             }}
//             fullWidth
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button style={{color: 'red' }} onClick={(e) => handleClose(e, false)}>Anuluj</Button>
//           <Button onClick={(e) => handleClose(e, true)}>Zaktualizuj</Button>
//         </DialogActions>
//       </Dialog>
//     </React.Fragment>
//   );
// }