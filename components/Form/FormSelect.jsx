import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function FormSelect({ defaultLabel, options }) {

  const [option, setOption] = React.useState(options?.find(option => option.default) || { value: 'No default', label: 1 });

  const handleChange = (event) => {
    setOption(event.target.value);
  };

  const menuItems = options?.map(option => <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem> )

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">{defaultLabel}</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={option.value}
          label={defaultLabel}
          onChange={handleChange}
        >
          {/* <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
          {menuItems}
        </Select>
        <FormHelperText>With label + helper text</FormHelperText>
      </FormControl>
    </div>
  );
}
