import React from "react";
import { Card } from "@material-ui/core";
import styled from "styled-components";
import TodoList from "./TodoList";
import { createTask, editTask, taskDone } from "../../actions/taskActions";
import { connect } from "react-redux";
import FormTodoList from "./FormTodoList";

class Home extends React.Component {
  handleSubmitTask = (values, { resetForm }) => {
    this.props.createTask(
      {
        task_name: values.task_name,
        done: false,
        id_users: 1
      },
      () => {
        resetForm({ id_users: "" });
      }
    );
  };

  render() {
    console.log("user", this.props.user);
    return (
      <Container>
        <Card className="CardContainer">
          <TodoList {...this.props} />
          <FormTodoList
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
  { createTask, editTask, taskDone }
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
