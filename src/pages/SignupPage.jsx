import Navbar from "../components/Navbar";
import CategoryNav from "../components/CategoryNav";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import EndPoints from "../api/EndPoints";
import { useState } from "react";

const SignupPage = () => {

    const nav = useNavigate();

    const [requestResponse, setRequestResponse] = useState({
        textMessage: "",
        alertClass: ""
    })

    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: "",
        confirmPassword: ""
    }

    const onSubmit = (values) => {
        axios.post(EndPoints.REGISTER_URL, values)
            .then((response) => {
                console.log(response.config.data)
                setRequestResponse({
                    textMessage: "Signup Successful [...Redirecting to Homepage]",
                    alertClass: "alert alert-success"
                });
                setTimeout(() => {
                    nav("/")
                }, 2000);
                
            }, (error) => {
                setRequestResponse({
                    textMessage: "Invalid User",
                    alertClass: "alert alert-danger"
                })
            })
            .catch((error) => console.log(error))
    };

    const validationSchema = Yup.object({
        firstName: Yup.string().required('First Name is required').min(1).max(10),
        lastName: Yup.string().required('Last Name is required').min(1).max(10),
        email: Yup.string().required("Email is required").email("Email must be in valid email format"),
        username: Yup.string().required("Username is required"),
        password: Yup.string().required("Password is required").min(6).max(12),
        confirmPassword: Yup.string()
            .required('Please retype your password.')
            .oneOf([Yup.ref('password')], 'Passwords do not match.')
    })

    return (
        <>
            <Navbar />
            <CategoryNav />
            <div className="container p-0">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <div className="wrapper">
                            <h2 className="text-center display-4 py-3">Sign Up</h2>
                            <div className={requestResponse.alertClass}>{requestResponse.textMessage}</div>

                            <Formik
                                onSubmit={onSubmit}
                                validationSchema={validationSchema}
                                initialValues={initialValues}
                                validateOnMount>
                                {
                                    (formik) => {
                                        return (
                                            <Form >
                                                <div className="form-group">
                                                    <Field className={formik.touched.firstName && formik.errors.firstName
                                                        ? "form-control is-invalid" : "form-control"}
                                                        name="firstName" type="text" placeholder="First Name" />
                                                    <ErrorMessage name="firstName">
                                                        {(errorMessage) => (<small className="text-danger">{errorMessage}</small>)}
                                                    </ErrorMessage>
                                                </div>

                                                <div className="form-group">
                                                    <Field className={formik.touched.lastName && formik.errors.lastName
                                                        ? "form-control is-invalid" : "form-control"}
                                                        name="lastName" type="text" placeholder="Last Name" />
                                                    <ErrorMessage name="lastName">
                                                        {(errorMessage) => (<small className="text-danger">{errorMessage}</small>)}
                                                    </ErrorMessage>
                                                </div>

                                                <div className="form-group">
                                                    <Field className={formik.touched.email && formik.errors.email
                                                        ? "form-control is-invalid" : "form-control"}
                                                        name="email" type="text" placeholder="Email Address" />
                                                    <ErrorMessage name="email">
                                                        {(errorMessage) => (<small className="text-danger">{errorMessage}</small>)}
                                                    </ErrorMessage>
                                                </div>
                                                <div className="form-group">
                                                    <Field className={formik.touched.username && formik.errors.username
                                                        ? "form-control is-invalid" : "form-control"}
                                                        name="username" type="text" placeholder="Username" />
                                                    <ErrorMessage name="username">
                                                        {(errorMessage) => (<small className="text-danger">{errorMessage}</small>)}
                                                    </ErrorMessage>
                                                </div>

                                                <div className="form-group">
                                                    <Field className={formik.touched.password && formik.errors.password
                                                        ? "form-control is-invalid" : "form-control"}
                                                        name="password" type="password" placeholder="Password" />
                                                    <ErrorMessage name="password">
                                                        {(errorMessage) => (<small className="text-danger">{errorMessage}</small>)}
                                                    </ErrorMessage>
                                                </div>

                                                <div className="form-group">
                                                    <Field className={formik.touched.confirmPassword && formik.errors.confirmPassword
                                                        ? "form-control is-invalid" : "form-control"}
                                                        name="confirmPassword" type="password" placeholder="Confirm Password" />
                                                    <ErrorMessage name="confirmPassword">
                                                        {(errorMessage) => (<small className="text-danger">{errorMessage}</small>)}
                                                    </ErrorMessage>
                                                </div>

                                                <p style={{ fontSize: "18px", color: "grey" }} className="text-center my-4">Already have an account? Login <Link to="/login">here.</Link></p>
                                                <input disabled={!formik.isValid} type="submit" value="Sign Up" className="my-4 btn btn-primary btn-block" />
                                            </Form>
                                        )
                                    }
                                }
                            </Formik>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </>
    )
}
export default SignupPage;