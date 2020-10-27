import React from "react";
import { Formik, FormikProps } from 'formik';
import { TextField , Button, Typography, Card, CardMedia } from '@material-ui/core';

import { UserSignUpForm } from '../../interfaces/user'
import { doSignUp } from "../../services/userService";
import { signUpSchema } from "../../utils/yup/authSchema";

import useStyles from './SignUpStyles';

import logo from '../../assets/logo.png';
import {Link} from "react-router-dom";

const SignUp = (props) => {
  const classes = useStyles();


  const authHandler =  async (data: UserSignUpForm) => {
    try {
      const response = await doSignUp(data);
      if(response) props.history.push('/login');
    }  catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={classes.container}>
      <Card className={classes.card}>
        <CardMedia
          component="img"
          className={classes.media}
          image={logo}
          title="FinTechs"
        />
        <div className={classes.form}>

          <Formik
            initialValues={{firstname: '', surname: '', email: '', password: '', confirmPassword: ''}}
            validationSchema={signUpSchema}
            onSubmit={(values: UserSignUpForm) => {
              authHandler(values).then(() => {});
            }}
          >
            {(props: FormikProps<UserSignUpForm>) => {
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
                  <div className={classes.helpers}>
                    <Link to='/login' className={classes.link}>
                      <Button size="small" color="primary">
                        Go Back
                      </Button>
                    </Link>
                  </div>
                  <TextField className={classes.input}
                             required
                             id="outlined-required"
                             label="firstname"
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
                  <TextField className={classes.input}
                             required
                             id="outlined-required"
                             label="surname"
                             variant="outlined"
                             type="surname"
                             autoFocus
                             onChange={handleChange}
                             value={values.surname}
                             onBlur={handleBlur}
                             fullWidth
                             name="surname"
                             autoComplete="surname"
                             error={ !!(errors.surname && touched.surname) }
                  />
                  <TextField className={classes.input}
                             required
                             id="outlined-required"
                             label="Email"
                             variant="outlined"
                             type="email"
                             onChange={handleChange}
                             value={values.email}
                             onBlur={handleBlur}
                             fullWidth
                             name="email"
                             autoComplete="email"
                             error={ !!(errors.email && touched.email) }
                  />
                  {errors.email && touched.email && <Typography className={classes.errors}> { errors.email }</Typography>}
                  <TextField className={classes.input}
                             required
                             id="outlined-required"
                             type="password"
                             label="Password"
                             name="password"
                             variant="outlined"
                             onChange={handleChange}
                             value={values.password}
                             onBlur={handleBlur}
                             error={!! (errors.password && touched.password)}
                  />
                  {errors.password && touched.password && <Typography className={classes.errors}> { errors.password }</Typography>}
                  <TextField className={classes.input}
                             required
                             id="outlined-required"
                             type="password"
                             label="Confirm Password"
                             name="confirmPassword"
                             variant="outlined"
                             onChange={handleChange}
                             value={values.confirmPassword}
                             onBlur={handleBlur}
                             error={!! (errors.confirmPassword && touched.confirmPassword)}
                  />
                  {errors.confirmPassword && touched.confirmPassword && <Typography className={classes.errors}> { errors.confirmPassword }</Typography>}
                  <Button className={classes.button}
                          variant="contained"
                          color="primary"
                          aria-label="contained primary button group"
                          onClick={(e) => {
                            e.preventDefault();
                            handleSubmit();
                          }}
                  > Sign Up
                  </Button>
                </>
              )
            }}
          </Formik>
        </div>
      </Card>
    </div>
  )
}

export default SignUp;
