import React from 'react';
import { Box } from '@material-ui/core';
import styles from './styles';

export const UserSearch: React.FC = () => {
  const classes = styles();
  return <Box className={classes.navbar}>Search User Page</Box>;
};

export default UserSearch;
