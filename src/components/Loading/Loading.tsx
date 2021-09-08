import React from 'react';
import { Box } from '@material-ui/core';
import styles from './styles';

export const Loading: React.FC = () => {
  const classes = styles();
  return <Box className={classes.loading}>LoadingComponent</Box>;
};

export default Loading;
