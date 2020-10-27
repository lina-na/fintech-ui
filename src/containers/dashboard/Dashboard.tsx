import React from 'react';
import {Button, Card, CssBaseline, Toolbar, Typography} from '@material-ui/core';

import useStyles from "./DashboardStyles";
import Headers from "../../components/header/headers";
import Table from "../../components/Table/Table";

const Home: React.FC = () => {
    const classes = useStyles();

    return (
        <>
            <CssBaseline />
            <Headers>
                <Button className={classes.btn}> Log Out </Button>
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

export default Home;
