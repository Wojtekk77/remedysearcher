import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import React from 'react';

const Footer = () => {

  return (

    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} style={{ backgroundColor: '#000'}} elevation={3}>
      <BottomNavigation
        // showLabels
        // value={"RS"}
        // onChange={(event, newValue) => {
        //   setValue(newValue);
        // }}
      >
        <BottomNavigationAction label="© 2024 RemedySearcher™" showLabel={true} value="RS" />
      </BottomNavigation>
    </Paper>
  );
};

export default Footer;
