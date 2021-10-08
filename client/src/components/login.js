import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Formik } from "formik";
import * as Yup from "yup";
import auth from "../services/authService";
import { useHistory } from "react-router-dom";

const Login = (props) => {

  const history = useHistory();

  return (
    <Container className="login-container p-5">
      <Row className="justify-content-md-center mt-2">
        <h3>Sign In</h3>
      </Row>
      <Row className="d-flex flex-column mt-4 justify-content-md-center">
        <Formik
          initialValues={{
            email: "Email",
            password: "Password",
          }}
          onSubmit={async (values) => {
            try {
              await auth.login(values.email, values.password);
              history.push('/dashboard');
            } catch (error) {
              console.log(error);
            }
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string().email().required("* Enter Email"),
            password: Yup.string().required("* No password provided."),
          })}
        >
          {(props) => {
            const {
              values,
              touched,
              errors,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
            } = props;
            return (
              <form onSubmit={handleSubmit} className="d-flex flex-column">
                <input
                  name="email"
                  type="email"
                  id="login-email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    "p-2" || (errors.email && touched.email && "error")
                  }
                />
                {errors.email && touched.email && (
                  <div className="input-feedback">{errors.email}</div>
                )}
                <input
                  name="password"
                  type="password"
                  id="login-password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    "mt-4 p-2" ||
                    (errors.password && touched.password && "error")
                  }
                />
                {errors.password && touched.password && (
                  <div className="input-feedback">{errors.password}</div>
                )}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  variant="primary"
                  className="mt-4"
                >
                  LOGIN
                </Button>
              </form>
            );
          }}
        </Formik>
      </Row>
    </Container>
  );
};

export default Login;
