import React, { useState, useEffect } from 'react';
import { Box, Avatar, Container, Grid, TextField } from '@material-ui/core';
import styles from './styles';

const Navbar: React.FC = () => {
  const classes = styles();
  const handleOnPressLogo = () => {
    console.log(1);
  };

  return (
    <Box className={classes.navbar}>
      <Grid onClick={handleOnPressLogo} className={classes.logo}>
        <Avatar className={classes.img} src="/assets/images/logo.png" alt="" />
        샌드뱅크 어드민
      </Grid>
    </Box>
  );
};

export default Navbar;
