import React from "react";
import Nav from "../navbar";
import Sidebar from "../sidebar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Formik } from "formik";

const NewAgent = (props) => {
  const title = "New Agent";
  return (
    <>
      <Nav title={title} />
      <Sidebar />
      <div className="main">
        <Container className="new-agent">
          <Col className="new-agent-form">
            <Row className="justify-content-md-center mt-2">
              <h3>New Agent</h3>
            </Row>
            <Row className="agent-form">
              <Formik
                initialValues={{
                  aname: "Agent Name",
                  email: "Email",
                  password: "Password",
                }}
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    console.log("Submitting", values);
                    setSubmitting(false);
                  }, 500);
                }}
              >
                {(props) => {
                  const {
                    values,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                  } = props;
                  return (
                    <form
                      onSubmit={handleSubmit}
                      className="d-flex flex-column"
                    >
                      <input
                        name="agent-name"
                        type="text"
                        value={values.aname}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="w-100 p-2" 
                      />
                      <input
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="mt-4 p-2"
                      />
                      <input
                        name="password"
                        type="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="mt-4 p-2"
                      />
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        variant="primary"
                        className="w-50 mt-4"
                      >
                        CREATE NEW AGENT
                      </Button>
                    </form>
                  );
                }}
              </Formik>
            </Row>
          </Col>
        </Container>
      </div>
    </>
  );
};

export default NewAgent;
