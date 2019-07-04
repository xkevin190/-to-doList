import React from "react";
import { TextField, Button } from "@material-ui/core";
import styled from "styled-components";

export default class wFormTodoList extends React.Component {
  render() {
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
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
        />
        <div className="button">
          <Button color="primary" variant={"contained"}>
            Nueva tarea
          </Button>
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
