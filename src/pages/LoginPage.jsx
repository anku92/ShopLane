import Navbar from "../components/Navbar";
import CategoryNav from "../components/CategoryNav";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import EndPoints from "../api/EndPoints";
import { Link } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {

    const initialValues = {
        email: "",
        password: ""
    };

    const [requestResponse, setRequestResponse] = useState({
        textMessage: "",
        alertClass: ""
    })

    const onSubmit = (values) => {
        axios.post(EndPoints.LOGIN_URL, values)
            .then((response) => {
                setRequestResponse({
                    textMessage: "login successful",
                    alertClass: "alert alert-success"
                });

            }, (error) => {
                setRequestResponse({
                    textMessage: "Invalid User",
                    alertClass: "alert alert-danger"
                })
            })
            .catch(error => console.log(error))
    };


    const validationSchema = Yup.object({
        email: Yup.string().required("email is required").email("email should be in valid email format"),
        password: Yup.string().required("password is required").min(6, "password should contain atleast 6 characters")
            .max(12, "password should not be more that 12 character")
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
                            <h2 className="display-4 text-center py-3">Login</h2>
                            <div className={requestResponse.alertClass}>{requestResponse.textMessage}</div>

                            <Formik
                                initialValues={initialValues}
                                onSubmit={onSubmit}
                                validationSchema={validationSchema}
                                validateOnMount>
                                {
                                    (formik) => {
                                        return (
                                            <Form>
                                                <div className="form-group">
                                                    <Field
                                                        className={formik.touched.email && formik.errors.email
                                                            ? "form-control is-invalid" : "form-control"}
                                                        type="text" name="email"
                                                        placeholder="Email Address"
                                                    />
                                                    <ErrorMessage name="email">
                                                    {
                                                        (errorMessage) => (
                                                            <small className="text-danger">{errorMessage}</small>
                                                        )
                                                    }
                                                </ErrorMessage>
                                                </div>
                                                

                                                <div className="form-group">
                                                    <Field
                                                        className={formik.touched.password && formik.errors.password ?
                                                            "form-control is-invalid" : "form-control"}
                                                        type="password" name="password"
                                                        placeholder="Password"
                                                    />
                                                    <ErrorMessage name="password">
                                                        {
                                                            (errorMessage) => (
                                                                <small className="text-danger">{errorMessage}</small>
                                                            )
                                                        }
                                                    </ErrorMessage>
                                                </div>
                                                <p style={{fontSize:"18px", color:"grey"}} className="text-center my-4">Don't have an account? Sign up <Link to="/signup">here.</Link></p>
                                                <input className="my-4 btn btn-block btn-primary" type="submit" value="Login" disabled={!formik.isValid} />
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
export default LoginPage;