import React from 'react';
import {  Button, CssBaseline } from '@material-ui/core';

import useStyles from "./HomeStyles";
import HomeForm from "./HomeForm";
import Headers from "../../components/header/headers";

const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Headers>
        <Button className={classes.btn}> Log In </Button>
      </Headers>

      <main>
        <HomeForm/>
      </main>
    </>
  );
};

export default Home;
