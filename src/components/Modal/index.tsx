import React, { useState, useEffect } from 'react';
import { Box, Avatar, Container, Grid, TextField } from '@material-ui/core';
import styles from './styles';

const Modal: React.FC = () => {
  const classes = styles();
  const handleOnPressLogo = () => {
    console.log(1);
  };

  return (
    <Box>
      {/* <Grid onClick={handleOnPressLogo} className={classes.logo}> */}
      모달
      {/* </Grid> */}
    </Box>
  );
};

export default Modal;
