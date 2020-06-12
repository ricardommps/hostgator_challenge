import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Only from 'commons/only';
import { useStyles } from './makeStyles';

const SkeletonSm = () => (
  <Box width={290} height={664} marginRight={1} my={5}>
    <Skeleton variant="rect" width={290} height={664} />
  </Box>
);
const SkeletonLg = () => (
  <>
    <Box width={349} height={664} marginRight={1} my={5}>
      <Skeleton variant="rect" width={349} height={664} />
    </Box>
    <Box width={349} height={664} marginRight={1} my={5}>
      <Skeleton variant="rect" width={349} height={664} />
    </Box>
    <Box width={349} height={664} marginRight={1} my={5}>
      <Skeleton variant="rect" width={349} height={664} />
    </Box>
  </>
);
const SliderLoad = () => {
  const classes = useStyles();
  const matches = useMediaQuery('(max-width:600px)');
  return (
    <Grid container wrap="nowrap" className={classes.rootLoad}>
      <Only when={matches}>
        <SkeletonSm />
      </Only>
      <Only when={!matches}>
        <SkeletonLg />
      </Only>
    </Grid>
  );
};

export default SliderLoad;
