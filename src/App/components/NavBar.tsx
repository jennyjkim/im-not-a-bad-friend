import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SettingsIcon from '@material-ui/icons/Settings';
import { updateLocation } from '../actions/location';
import ROUTE_NAMES, { READABLE_ROUTE_NAMES } from '../constants/routeNames';

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
    const dispatch = useDispatch();

    const handleTabChange = (event, routeName) => {
        dispatch(updateLocation({ routeName }));
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs
                    classes={{
                        flexContainer: classes.tabs
                    }}
                    onChange={handleTabChange}
                >

                    <Tab
                        id={ROUTE_NAMES.HOME}
                        value={ROUTE_NAMES.HOME}
                        label={READABLE_ROUTE_NAMES.HOME}
                    />
                    <Tab
                        id={ROUTE_NAMES.MANAGE}
                        value={ROUTE_NAMES.MANAGE}
                        label={READABLE_ROUTE_NAMES.MANAGE}
                    />
                    <Tab
                        icon={<SettingsIcon />}
                        value={ROUTE_NAMES.SETTINGS}
                    />
                </Tabs>
            </AppBar>
        </div>
    );
}
