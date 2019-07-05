import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();
  console.log(props.user);
  return (
    <div
      className={classes.root}
      style={{
        width: "100%",
        position: "absolute",
        top: 0
      }}
    >
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {`${props.user.name}  ${props.user.surname}  Task `}
          </Typography>
          <Button color="inherit" onClick={() => props.signOff()}>
            Cerrar Sesion
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
