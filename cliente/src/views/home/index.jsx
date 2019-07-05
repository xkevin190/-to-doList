import React from "react";
import { Card } from "@material-ui/core";
import styled from "styled-components";
import TodoList from "./TodoList";
import {
  createTask,
  editTask,
  taskDone,
  allTask
} from "../../actions/taskActions";

import { signOff } from "../../actions/actions";
import { connect } from "react-redux";
import FormTodoList from "./FormTodoList";
import Header from "../../components/header";

class Home extends React.Component {
  state = {
    update: null,
    task_name: ""
  };
  componentDidMount = () => {
    this.props.allTask(this.props.user.id);
  };

  handleSubmitTask = () => {
    this.props.createTask(
      {
        task_name: this.state.task_name,
        done: false,
        id_users: this.props.user.id
      },
      () => {
        this.setState({ task_name: "" });
      }
    );
  };

  setTaskName = value => {
    this.setState({ task_name: value });
  };

  editTask = values => {
    this.setState({ update: values, task_name: values.task_name });
  };

  cancelUpdate = () => {
    this.setState({ update: null, task_name: "" });
  };

  editTaskName = () => {
    this.props.editTask(
      {
        ...this.state.update,
        task_name: this.state.task_name
      },
      () => {
        this.setState({ task_name: "", update: null });
      }
    );
  };

  render() {
    return (
      <Container>
        <Header user={this.props.user} signOff={this.props.signOff} />
        <Card className="CardContainer">
          <TodoList
            update={this.state.update}
            edit={this.editTask}
            cancelUpdate={this.cancelUpdate}
            {...this.props}
          />
          <FormTodoList
            update={this.state.update}
            setTaskName={this.setTaskName}
            task_name={this.state.task_name}
            editTaskName={this.editTaskName}
            {...this.props}
            handleSubmitTask={this.handleSubmitTask}
          />
        </Card>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.app.get("sesionUser"),
  task: state.task.get("task")
});

export default connect(
  mapStateToProps,
  { createTask, editTask, taskDone, allTask, signOff }
)(Home);

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .CardContainer {
    width: 50%;
    min-height: 50vh;
    display: flex;
    flex-direction: column;
  }
`;
