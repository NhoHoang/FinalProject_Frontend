import React from "react";
import { withRouter } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import { ReactstrapInput } from "reactstrap-formik";
import { Formik, FastField, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import UserApi from "../api/UserApi";
import { useState } from "react";

const SignUp = (props) => {
  const [isOpenModal, setOpenModal] = useState(false);

  const [email, setEmail] = useState("");
  const [isDisabledResendEmailButton, setDisabledResendEmailButton] =
    useState(false);

  const handleCloseModel = () => {
    // open model
    setOpenModal(false);
    // redirect login page
    props.history.push("/education");
  };

  const resendEmailToActiveAccount = async () => {
    setDisabledResendEmailButton(true);
    // call api
    await UserApi.resendEmailToActiveAccount(email);
    setDisabledResendEmailButton(false);
  };
  return (
    <>
      <div className="text-center mt-4">
        <h1 className="h2">Get started</h1>
        <p className="lead">
          Start creating account to experience in our Website.
        </p>
      </div>

      <Formik
        initialValues={{
          userName: "",
          email: "",
          password: "",
          confirmpassword: "",
          address: "",
          fullName: "",
          errorForm: "",
        }}
        validationSchema={Yup.object({
          userName: Yup.string()
            .min(6, "Must be between 6 and 50 characters")
            .max(50, "Must be between 6 and 50 characters")
            .required("Required")
            .test(
              "checkUniqueUserName",
              "This username is already registered.",
              async (userName) => {
                // call api
                const isExists = await UserApi.existsByUsername(userName);
                return !isExists;
              }
            ),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required")
            .test(
              "checkUniqueEmail",
              "This email is already registered.",
              async (email) => {
                // call api
                const isExists = await UserApi.existsByEmail(email);
                return !isExists;
              }
            ),
          password: Yup.string()
            .min(6, "Must be between 6 and 50 characters")
            .max(50, "Must be between 6 and 50 characters")
            .required("Required"),
          confirmpassword: Yup.string()
            .when("password", {
              is: (val) => (val && val.length > 0 ? true : false),
              then: Yup.string().oneOf(
                [Yup.ref("password")],
                "Both password need to be the same"
              ),
            })
            .required("Required"),
          address: Yup.string()
            .max(50, "Must be less than 50 characters")
            .required("Required"),
          fullName: Yup.string()
            .max(50, "Must be less than 50 characters")
            .required("Required"),
        })}
        onSubmit={async (values, { setFieldError }) => {
          try {
            // call api
            await UserApi.create(
              values.userName,
              values.email,
              values.password,
              values.address,
              values.fullName
            );
            // open model
            setOpenModal(true);
            setEmail(values.email);
          } catch (error) {
            setFieldError("errorForm", "There is an error from the server");
            console.log(error);
          }
        }}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({ isSubmitting }) => (
          <Card>
            <CardBody>
              <div className="m-sm-4">
                <Form>
                  <FormGroup>
                    <FastField
                      type="text"
                      label="User Name"
                      name="userName"
                      bsSize="lg"
                      placeholder="Enter your user name"
                      component={ReactstrapInput}
                    />
                  </FormGroup>

                  <FormGroup>
                    <FastField
                      type="email"
                      label="Email"
                      name="email"
                      bsSize="lg"
                      placeholder="Enter your email"
                      component={ReactstrapInput}
                    />
                  </FormGroup>

                  <FormGroup>
                    <FastField
                      type="password"
                      label="Password"
                      name="password"
                      bsSize="lg"
                      placeholder="Enter your Password"
                      component={ReactstrapInput}
                    />
                  </FormGroup>

                  <FormGroup>
                    <FastField
                      type="password"
                      label="confirmpassword"
                      name="confirmpassword"
                      bsSize="lg"
                      placeholder="Enter your Confirmpassword"
                      component={ReactstrapInput}
                    />
                  </FormGroup>

                  <FormGroup>
                    <FastField
                      type="text"
                      label="Address"
                      name="address"
                      bsSize="lg"
                      placeholder="Enter your Address"
                      component={ReactstrapInput}
                    />
                  </FormGroup>

                  <FormGroup>
                    <FastField
                      type="text"
                      label="Full Name"
                      name="fullName"
                      bsSize="lg"
                      placeholder="Enter your full name"
                      component={ReactstrapInput}
                    />
                  </FormGroup>

                  <ErrorMessage
                    name="errorForm"
                    component={"div"}
                    className="invalid-feedback"
                    style={{ display: "block" }}
                  />

                  <div className="text-center mt-3">
                    <Button
                      type="submit"
                      color="primary"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      Sign up
                    </Button>
                  </div>
                </Form>
              </div>
            </CardBody>
          </Card>
        )}
      </Formik>
      <Modal isOpen={isOpenModal}>
        {/* header */}
        <ModalHeader>You need to confirm your account</ModalHeader>

        {/* body */}
        <ModalBody className="m-3">
          <p>
            We have sent an email to <b>{email}</b>.
          </p>
          <p>Please check your email to active account.</p>
        </ModalBody>

        {/* footer */}
        <ModalFooter>
          {/* resend */}
          <Button
            color="primary"
            onClick={resendEmailToActiveAccount}
            style={{ marginLeft: 10 }}
            disabled={isDisabledResendEmailButton}
          >
            Resend
          </Button>

          {/* login */}
          <Button color="primary" onClick={handleCloseModel}>
            Login
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default withRouter(SignUp);
