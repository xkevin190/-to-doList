import React from "react";
import { TextField, Button } from "@material-ui/core";
import styled from "styled-components";
import { Formik } from "formik";

export default class FormTodoList extends React.Component {
  render() {
    const {
      update,
      setTaskName,
      task_name,
      handleSubmitTask,
      editTaskName
    } = this.props;
    return (
      <Container>
        <TextField
          id="outlined-full-width"
          label="add task"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          value={task_name}
          onChange={e => setTaskName(event.target.value)}
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
        />
        <div className="button">
          {!update && (
            <Button
              color="primary"
              onClick={() => handleSubmitTask()}
              disabled={task_name.length > 0 ? false : true}
              variant={"contained"}
            >
              Nueva tarea
            </Button>
          )}
          {update && (
            <Button
              color="primary"
              disabled={task_name.length > 0 ? false : true}
              onClick={() => editTaskName()}
              variant={"contained"}
            >
              Guardar
            </Button>
          )}
        </div>
      </Container>
    );
  }
}

const Container = styled.div`
  padding-right: 20px;
  flex: 0.5;
  .button {
    display: flex;
    justify-content: flex-end;
    padding-top: 10px;
    align-items: flex-end;
    flex: 1;
  }
`;
