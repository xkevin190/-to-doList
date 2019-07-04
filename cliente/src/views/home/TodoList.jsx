import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import { Edit } from "@material-ui/icons";

const styles = theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    flexDirection: "column",
    flex: 1
  }
});

class TodoList extends React.Component {
  state = {
    checked: [0]
  };

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  };

  render() {
    const { classes, task } = this.props;
    return (
      <List className={classes.root}>
        {task.map((value, key) => (
          <ListItem
            key={value}
            role={undefined}
            dense
            button
            onClick={this.handleToggle(value)}
          >
            <Checkbox
              checked={value.done}
              onClick={() => this.props.taskDone({ id: key, ...value })}
              tabIndex={-1}
              disableRipple
            />
            <ListItemText primary={value.task_name} />
            <ListItemSecondaryAction>
              <IconButton aria-label="Comments">
                <Edit />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    );
  }
}

export default withStyles(styles)(TodoList);
