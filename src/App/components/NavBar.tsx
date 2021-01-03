import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SettingsIcon from '@material-ui/icons/Settings';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabs: {
      justifyContent: 'space-between',
  }
}));

export default function SimpleTabs() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs classes={{
            flexContainer: classes.tabs
        }}>
            <div>
                <Tab label="Home" />
                <Tab label="Manage" />
            </div>
            <div>
                <Tab icon={<SettingsIcon />} />
            </div>
        </Tabs>
      </AppBar>
    </div>
  );
}