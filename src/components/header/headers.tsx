import {AppBar, Button, Toolbar, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import React from "react";

import useStyles from "./headersStyles";

const Headers: React.FC = ({children}) => {
    const classes = useStyles();

return (
    <>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Fin Technology
                </Typography>
                <Link to='/login' className={classes.link}>
                    {children}
                </Link>
            </Toolbar>
        </AppBar>
    </>
)
};

export default Headers;
