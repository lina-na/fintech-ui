import React, {useContext} from 'react';
import {Button, Card, CssBaseline, Typography} from '@material-ui/core';

import useStyles from "./DashboardStyles";
import Headers from "../../components/header/headers";
import Table from "../../components/Table/Table";
import {authContext} from "../../contexts/AuthContext";

const Dashboard: React.FC = (props:any ) => {
    const classes = useStyles();
    const auth = useContext(authContext);

    const logOut = () => {
        auth.setClearAuth();
        props.history.push('/');
    }

    return (
        <>
            <CssBaseline />
            <Headers>
                <Button className={classes.btn} onClick={() => {
                    logOut();
                }}> Log Out </Button>
            </Headers>

            <main>
                <Typography variant="h4" className={classes.title}>
                    Customer list
                </Typography>
                <div className={classes.container}>
                    <Card className={classes.card}>
                        <Table/>
                    </Card>
                </div>
            </main>
        </>
    );
};

export default Dashboard;
