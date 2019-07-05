import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import { Edit, Cancel } from "@material-ui/icons";

const styles = theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    flexDirection: "column",
    flex: 4
  }
});

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes, task, edit, update, cancelUpdate } = this.props;
    return (
      <List className={classes.root}>
        {task &&
          task.map((value, key) => {
            return (
              <ListItem key={key}>
                <Checkbox
                  checked={value.done}
                  onClick={() => this.props.taskDone({ ...value })}
                />
                <ListItemText primary={value.task_name} />
                <ListItemSecondaryAction>
                  {!update && (
                    <IconButton
                      onClick={() => {
                        edit(value);
                      }}
                      aria-label="Comments"
                    >
                      <Edit />
                    </IconButton>
                  )}
                  {update && update.id === value.id && (
                    <IconButton
                      onClick={() => {
                        cancelUpdate();
                      }}
                      aria-label="Comments"
                    >
                      <Cancel />
                    </IconButton>
                  )}
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
      </List>
    );
  }
}

export default withStyles(styles)(TodoList);
