import React from "react";
import { Formik, FormikProps } from 'formik';
import { TextField , Button, Typography, Card, CardMedia } from '@material-ui/core';
import { Link } from 'react-router-dom'

import { UserLoginForm } from '../../interfaces/user'
import { doLogin } from "../../services/userService";
import { authSchema } from "../../utils/yup/authSchema";

import useStyles from './LoginStyles';

import logo from '../../assets/logo.png';

const Login = () => {
  const classes = useStyles();

  const authHandler =  async (data: UserLoginForm) => {
    try {
      const response = await doLogin(data);
      window.localStorage.setItem('token', JSON.stringify(response));
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
          title="FinTech"
        />
        <div className={classes.form}>

          <Formik
            initialValues={{ email: 'test@test.ru', password: 'test'}}
            validationSchema={authSchema}
            onSubmit={(values: UserLoginForm) => {
              authHandler(values).then(() => {});
            }}
          >
            {(props: FormikProps<UserLoginForm>) => {
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
                  <TextField className={classes.input}
                             required
                             id="outlined-required"
                             label="Email"
                             variant="outlined"
                             type="email"
                             autoFocus
                             onChange={handleChange}
                             value={values.email}
                             onBlur={handleBlur}
                             fullWidth
                             name="email"
                             autoComplete="email"
                             error={ !!(errors.email && touched.email) }
                  />
                  {errors.email && <Typography> { errors.email }</Typography>}
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
                  <div className={classes.helpers}>
                    <Link to='/signup' className={classes.link}>
                      <Button size="small" color="primary">
                        Sign Up
                      </Button>
                    </Link>
                    <Button size="small" color="primary">
                      Forgot password?
                    </Button>
                  </div>
                  <Button className={classes.button}
                          variant="contained"
                          color="primary"
                          aria-label="contained primary button group"
                          onClick={(e) => {
                            e.preventDefault();
                            handleSubmit();
                          }}
                  > Sign in
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

export default Login;
