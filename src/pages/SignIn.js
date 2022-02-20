import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

import { Button, Card, CardBody, FormGroup, Input } from "reactstrap";
import { Formik, FastField, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ReactstrapInput } from "reactstrap-formik";
import LoginApi from "../api/LoginApi";
import Storage from "../Storage/Storage";
import { useState } from "react";

const SignIn = (props) => {
  const [isRememberMe, setRememberMe] = useState(props.isRememberMe);

  return (
    <React.Fragment>
      <div className="text-center mt-4">
        <h2>Welcome to Our Charity Doantion</h2>
        <p className="lead">Sign in to your account to continue</p>
      </div>

      <Formik
        initialValues={{
          username: "",
          password: "",
          errorForm: "",
        }}
        validationSchema={Yup.object({
          username: Yup.string()
            .required("Required")
            .max(50, "Must be between 6 to 50 characters")
            .min(6, "Must be between 6 to 50 characters"),

          password: Yup.string()
            .max(50, "Must be between 6 to 50 characters")
            .min(6, "Must be between 6 to 50 characters")
            .required("Required"),
        })}
        onSubmit={async (values) => {
          try {
            // call api
            const result = await LoginApi.login(
              values.username,
              values.password
            );
            // save token to storage
            Storage.setToken(result.token);
            // save user info to storage
            const user = {
              username: result.userName,
              email: result.email,
              address: result.address,
              fullname: result.fullName,
              role: result.role,
              status: result.status,
            };
            Storage.setUserInfo(user);
            props.history.push("/");
            // }
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Card>
            <CardBody>
              <div className="m-sm-4">
                <Form>
                  {/* username */}
                  <FormGroup>
                    <FastField
                      label="Username"
                      bsSize="lg"
                      type="text"
                      name="username"
                      placeholder="Enter your username"
                      component={ReactstrapInput}
                    />
                  </FormGroup>

                  {/* password */}
                  <FormGroup>
                    <FastField
                      label="Password"
                      bsSize="lg"
                      type="password"
                      name="password"
                      placeholder="Enter password"
                      component={ReactstrapInput}
                    />
                    {/* forgot password */}
                    <small>
                      <Link to="/auth/reset-password">Forgot password?</Link>
                    </small>
                  </FormGroup>

                  <ErrorMessage
                    name="errorForm"
                    component={"div"}
                    className="invalid-feedback"
                    style={{ display: "block" }}
                  />

                  {/* remember me */}
                  <div>
                    <Input
                      type="checkbox"
                      id="rememberMe"
                      label="Remember me next time"
                      checked={isRememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                  </div>

                  {/* submit */}
                  <div className="text-center mt-3">
                    <Button
                      type="submit"
                      color="primary"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      Sign in
                    </Button>
                  </div>
                </Form>
              </div>
            </CardBody>
          </Card>
        )}
      </Formik>
    </React.Fragment>
  );
};

export default withRouter(SignIn);
