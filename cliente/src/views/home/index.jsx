import React from "react";
import { Card } from "@material-ui/core";
import styled from "styled-components";
import TodoList from "./TodoList";
import FormTodoList from "./FormTodoList";

class Home extends React.Component {
  render() {
    return (
      <Container>
        <Card className="CardContainer">
          <TodoList />
          <FormTodoList />
        </Card>
      </Container>
    );
  }
}

export default Home;

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
