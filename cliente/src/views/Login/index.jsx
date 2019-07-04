import React from "react";
import Login from "./Login";
import Registro from "./Registro";
import { login, registro } from "../../actions/actions";
import { connect } from "react-redux";
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
    this.setState({ step: 1 });
  };

  onLogin = (values, { resetForm }) => {
    this.props.login(values);
  };

  onRegister = values => {
    this.props.registro(values, () => {
      this.setState({ step: 1 });
    });
  };

  render() {
    return (
      <div>
        {this.state.step === 1 && (
          <Login onLogin={this.onLogin} singUp={this.singUp} />
        )}
        {this.state.step === 2 && (
          <Registro onRegister={this.onRegister} singIn={this.singIn} />
        )}
      </div>
    );
  }
}

export default connect(
  null,
  { login, registro }
)(Session);
