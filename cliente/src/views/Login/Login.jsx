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
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const InitialValues = {
  email: "",
  password: ""
};

export default function SignIn(props) {
  const classes = useStyles();

  console.log("asdasdsa", props);
  return (
    <Formik
      initialValues={InitialValues}
      onSubmit={props.onLogin}
      //validationSchema={validationSchema}
      render={({ values, handleSubmit, setFieldValue, errors, resetForm }) => {
        return (
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <form className={classes.form} noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  value={values.email}
                  name="email"
                  onChange={e => setFieldValue("email", e.target.value)}
                  autoComplete="email"
                  autoFocus
                />

                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  value={values.password}
                  label="Password"
                  type="password"
                  id="password"
                  onChange={e => setFieldValue("password", e.target.value)}
                  autoComplete="current-password"
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                  className={classes.submit}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs />
                  <Grid item>
                    <Link onClick={() => props.singUp()} variant="body2">
                      {"Don't have an account? Sign Up"}
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
