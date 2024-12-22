"use client";

import React, { useCallback, useMemo, useState } from "react";
import { REMEDY_PROPERTY, REMEDY_PROPERTY_NAME } from '@common/constants';
import FormAutocomplete from '@components/Form/FormAutocomplete';
import { Box, TextField, Button } from '@mui/material';



const FilterForm = ({ setRepertorySymptoms }) => {

  const [text, setText] = useState('');
  const [property, setProperty] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  

  const selectedValues = useMemo(() => {
    return Object.values(REMEDY_PROPERTY)
      .map((value) => ({ label: REMEDY_PROPERTY_NAME[value], value }))
      .filter(item => item.value > REMEDY_PROPERTY.LEFT_DOWN_RIGHT_UP);
  }, [REMEDY_PROPERTY, REMEDY_PROPERTY_NAME]); // Ensure dependencies are correct


  const getRepertorySymptomsByText = useCallback(async () => {
    // if (!text || text?.length <= 2) {
    if (false) {
      setError(true);
    }
    else {
      setLoading(true)
      try {
        let response = await fetch(`/api/repertorySymptomSearch`, {
          method: "POST",
          body: JSON.stringify({
            values: {
              property: property || { $gte: REMEDY_PROPERTY.UMYSL },
              text
            }
          }),
        });
  
        response = await response.json();
        setRepertorySymptoms(response.repertorySymptoms);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
  },[property, text])

  const handleKeyDown = useCallback(async (event) => {
    if (event.key === 'Enter') {
      await getRepertorySymptomsByText();
    }
  }, [getRepertorySymptomsByText]);

  const handleInputChange = useCallback((e) => {
    setText(e.target.value);
    setError(false);
  }, []);

  console.log('Filter form reload');
  return (
    <>
      <Box
        component="form"
        sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, display: 'flex' }}
        noValidate
        autoComplete="off"
        
      > 
        <FormAutocomplete 
          options={selectedValues}
          onChange={setProperty}
          defaultOption={{ label: REMEDY_PROPERTY_NAME[REMEDY_PROPERTY.UMYSL], value: REMEDY_PROPERTY.UMYSL }}
        />
        <TextField
          id="outlined-search"
          label="Słowo kluczowe"
          type="search"
          onChange={handleInputChange}
          error={error}
          helperText={error && 'Za krótkie słowo'}
          onKeyDown={handleKeyDown}
        />
        <Box sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, display: 'flex', height: '4.5rem' }}>
          <Button disabled={loading} style={{ marginTop: 8, marginBottom: 8, selfAlign: 'center' }} variant="outlined" onClick={async () => getRepertorySymptomsByText()}>Wyszukaj</Button>
        </Box>
      </Box>
    </>
  );
};

export default React.memo(FilterForm);
