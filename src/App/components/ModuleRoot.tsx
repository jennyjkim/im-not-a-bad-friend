import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 20,
  },
}));

export default function ModuleRoot() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      module root
    </div>
  );
}