import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import * as yup from "yup";
import { Formik } from "formik";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const InitialValues = {
  name: "",
  surname: "",
  email: "",
  password: ""
};

export default function SignUp(props) {
  const classes = useStyles();
  const ValidationSchema = yup.object().shape({
    name: yup.string().required(),
    surname: yup.string().required(),
    email: yup
      .string()
      .email()
      .required(),
    password: yup.string().required()
  });

  return (
    <Formik
      initialValues={InitialValues}
      onSubmit={props.onRegister}
      validationSchema={ValidationSchema}
      render={({ values, handleSubmit, setFieldValue, errors, resetForm }) => {
        return (
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <form className={classes.form} noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="fname"
                      name="firstName"
                      variant="outlined"
                      required
                      fullWidth
                      value={values.name}
                      id="firstName"
                      onChange={e => setFieldValue("name", e.target.value)}
                      label="First Name"
                      autoFocus
                      helperText={errors.name}
                      FormHelperTextProps={{
                        style: {
                          color: "red"
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="lastName"
                      value={values.surname}
                      label="Last Name"
                      onChange={e => setFieldValue("surname", e.target.value)}
                      name="lastName"
                      autoComplete="lname"
                      helperText={errors.surname}
                      FormHelperTextProps={{
                        style: {
                          color: "red"
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      onChange={e => setFieldValue("email", e.target.value)}
                      value={values.email}
                      autoComplete="email"
                      helperText={errors.email}
                      FormHelperTextProps={{
                        style: {
                          color: "red"
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      onChange={e => setFieldValue("password", e.target.value)}
                      value={values.password}
                      autoComplete="current-password"
                      helperText={errors.password}
                      FormHelperTextProps={{
                        style: {
                          color: "red"
                        }
                      }}
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                  className={classes.submit}
                >
                  Sign Up
                </Button>
                <Grid container justify="flex-end">
                  <Grid item>
                    <Link onClick={() => props.singIn()} variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
          </Container>
        );
      }}
    />
  );
}
