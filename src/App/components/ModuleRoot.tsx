import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import { useSelector } from 'react-redux';
// import { getLocation } from '../selectors/location';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 20,
  },
}));

export default function ModuleRoot() {
  const classes = useStyles();
//   const currentRoute = useSelector(getLocation);
//   console.log('==currentRoute', currentRoute);
  return (
    <div className={classes.root}>
      hi
    </div>
  );
}