import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function FormAutocomplete({ options, onChange, defaultOption }) {

    const handleOnChange = React.useCallback((event, option) => {
        // option = { label, value }
        onChange(option?.value || defaultOption?.value)
    }, [])

    return (
        <Autocomplete
            disablePortal
            options={options}
            // sx={{ width: 300 }}
            onChange={handleOnChange}
            renderInput={(params) => <TextField {...params} label="Właściwość" />}
        />
    );
}