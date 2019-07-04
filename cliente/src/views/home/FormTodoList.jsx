import React from "react";
import { TextField, Button } from "@material-ui/core";
import styled from "styled-components";
import { Formik } from "formik";

export default class FormTodoList extends React.Component {
  render() {
    return (
      <Formik
        //initialValues={InitialValues}
        onSubmit={this.props.handleSubmitTask}
        //validationSchema={validationSchema}
        render={({
          values,
          handleSubmit,
          setFieldValue,
          errors,
          resetForm
        }) => {
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
                value={values.task_name}
                onChange={e => setFieldValue("task_name", e.target.value)}
                variant="outlined"
                InputLabelProps={{
                  shrink: true
                }}
              />
              <div className="button">
                <Button
                  color="primary"
                  onClick={handleSubmit}
                  variant={"contained"}
                >
                  Nueva tarea
                </Button>
              </div>
            </Container>
          );
        }}
      />
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
