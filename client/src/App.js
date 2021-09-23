import React from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Container className="login-container p-5">
          <Row className="justify-content-md-center mt-2">
            <h3>Sign In</h3>
          </Row>
          <Row className="d-flex flex-column mt-5 justify-content-md-center">
            <form action="" method="" className="d-flex flex-column">
              <input type="email" name="email" id="login-email" className="p-2" value="Email" />
              <input type="password" name="password" id="login-password" className="mt-3 p-2" value="Password" />
              <Button variant="primary" className="mt-3">LOGIN</Button>
            </form>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
