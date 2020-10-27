import React from 'react';
import {Button, Card, CssBaseline} from '@material-ui/core';

import useStyles from "./DashboardStyles";
import Headers from "../../components/header/headers";
import Table from "../../components/Table/Table";

const Home: React.FC = () => {
    const classes = useStyles();

    return (
        <>
            <CssBaseline />
            <Headers>
                <Button className={classes.btn}> Log In </Button>
            </Headers>

            <main>
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
