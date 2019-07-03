import React from "react";
import Login from "./Login";
import Registro from "./Registro";

class Session extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1
    };
  }

  singUp = () => {
    this.setState({ step: 2 });
  };

  singIn = () => {

    console.log("entro aca")
    this.setState({ step: 1 });
  };

  render() {
    return (
      <div>
        {this.state.step === 1 && <Login singUp={this.singUp} />}
        {this.state.step === 2 && <Registro singIn={this.singIn} />}
      </div>
    );
  }
}

export default Session;
