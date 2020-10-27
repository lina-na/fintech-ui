import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '30%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
}));

const Loading: React.FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CircularProgress color="secondary" />
        </div>
    );
};

export default Loading;
