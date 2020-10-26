import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import {
  AppBar, Button, CssBaseline, Grid, Container, Toolbar, Typography, Card, CardMedia, TextField,
} from '@material-ui/core';

import { authContext } from '../../contexts/AuthContext';
import { Formik, FormikProps } from "formik";
import useStyles from "./HomeStyles";
import { ClientForm } from "../../interfaces/client";
import { clientSchema } from "../../utils/yup/clientSchema";

import logo from "../../assets/logo.png";


const Home: React.FC = () => {
  const classes = useStyles();

  const authHandler =  async (data: ClientForm) => {
    try {
      //const response = await doSignUp(data);
      //console.log(response);
    }  catch (e) {
      console.log(e);
    }
  };

  const auth = useContext(authContext);

  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Fin Technology
          </Typography>
          <Link to='/login' className={classes.link}>
            <Button color="inherit">Log In</Button>
          </Link>
        </Toolbar>
      </AppBar>

      <main>
        <div className={classes.container}>
          <Card className={classes.card}>
            <CardMedia
              component="img"
              className={classes.media}
              image={logo}
              title="FinTech"
            />
            <div className={classes.form}>
              <Formik
                initialValues={{firstname: '', surname: '', phone: '', address: '', ssn: ''}}
                validationSchema={clientSchema}
                onSubmit={(values: ClientForm) => {
                  authHandler(values).then(() => {});
                }}
              >
                {(props: FormikProps<ClientForm>) => {
                  const {
                    values,
                    touched,
                    errors,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                  } = props;
                  return (
                    <>
                      <Typography className={classes.helpers} color="textSecondary" gutterBottom>
                        Enter your FullName:
                      </Typography>
                      <div className={classes.fullName}>
                      <TextField className={classes.inputName}
                                 required
                                 id="outlined-required"
                                 label="Firstname"
                                 variant="outlined"
                                 type="firstname"
                                 autoFocus
                                 onChange={handleChange}
                                 value={values.firstname}
                                 onBlur={handleBlur}
                                 fullWidth
                                 name="firstname"
                                 autoComplete="firstname"
                                 error={ !!(errors.firstname && touched.firstname) }
                      />
                      <TextField className={classes.inputName}
                                 required
                                 id="outlined-required"
                                 label="Surname"
                                 variant="outlined"
                                 type="surname"
                                 onChange={handleChange}
                                 value={values.surname}
                                 onBlur={handleBlur}
                                 fullWidth
                                 name="surname"
                                 autoComplete="surname"
                                 error={ !!(errors.surname && touched.surname) }
                      />
                      </div>
                      <Typography className={classes.helpers} color="textSecondary" gutterBottom>
                        Enter your address:
                      </Typography>
                      <TextField className={classes.input}
                                 required
                                 id="outlined-required"
                                 label="Address"
                                 variant="outlined"
                                 type="address"
                                 onChange={handleChange}
                                 value={values.phone}
                                 onBlur={handleBlur}
                                 fullWidth
                                 name="address"
                                 autoComplete="address"
                                 error={ !!(errors.address && touched.address) }
                      />
                      <Typography className={classes.helpers} color="textSecondary" gutterBottom>
                        Enter your phone:
                      </Typography>
                      <TextField className={classes.input}
                                 required
                                 id="outlined-required"
                                 label="Phone"
                                 variant="outlined"
                                 type="phone"
                                 onChange={handleChange}
                                 value={values.phone}
                                 onBlur={handleBlur}
                                 fullWidth
                                 name="phone"
                                 autoComplete="phone"
                                 error={ !!(errors.phone && touched.phone) }
                      />
                      {errors.phone && touched.phone && <Typography className={classes.errors}> { errors.phone }</Typography>}
                      <Typography className={classes.helpers} color="textSecondary" gutterBottom>
                        Enter your SSN:
                      </Typography>
                      <TextField className={classes.input}
                                 required
                                 id="outlined-required"
                                 type="ssn"
                                 label="SSN"
                                 name="ssn"
                                 variant="outlined"
                                 onChange={handleChange}
                                 value={values.ssn}
                                 onBlur={handleBlur}
                                 error={!! (errors.ssn && touched.ssn)}
                      />
                      {errors.ssn && touched.ssn && <Typography className={classes.errors}> { errors.ssn }</Typography>}
                      <Button className={classes.button}
                              variant="contained"
                              color="primary"
                              aria-label="contained primary button group"
                              onClick={(e) => {
                                e.preventDefault();
                                handleSubmit();
                              }}
                      > Send the form
                      </Button>
                    </>
                  )
                }}
              </Formik>
            </div>
          </Card>
        </div>
      </main>
    </>
  );
};

export default Home;
