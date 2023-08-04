import Navbar from "../components/Navbar";
import CategoryNav from "../components/CategoryNav";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import EndPoints from "../api/EndPoints";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {

    const initialValues = {
        username: "",
        password: ""
    };

    const [requestResponse, setRequestResponse] = useState({
        textMessage: "",
        alertClass: ""
    })

    const nav = useNavigate();

    const onSubmit = (values) => {
        axios.post(EndPoints.LOGIN_URL, values)
            .then((response) => {
                console.log(response.config.data)
                setRequestResponse({
                    textMessage: "login successful",
                    alertClass: "alert alert-success"
                });
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("user", response.config.data);
                nav("/");

            }, (error) => {
                setRequestResponse({
                    textMessage: "Invalid User",
                    alertClass: "alert alert-danger"
                })
            })
            .catch(error => console.log(error))
    };


    const validationSchema = Yup.object({
        username: Yup.string().required("Username is required"),
        password: Yup.string().required("Password is required").min(6, "Password should contain atleast 6 characters")
            .max(12, "Password should not be more that 12 character")
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
                                                        className={formik.touched.username && formik.errors.username
                                                            ? "form-control is-invalid" : "form-control"}
                                                        type="text" name="username"
                                                        placeholder="Username"
                                                    />
                                                    <ErrorMessage name="username">
                                                        {(errorMessage) => (
                                                            <small className="text-danger">{errorMessage}</small>
                                                        )}
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
                                                        {(errorMessage) => (
                                                            <small className="text-danger">{errorMessage}</small>
                                                        )}
                                                    </ErrorMessage>
                                                </div>

                                                <p style={{ fontSize: "18px", color: "grey" }}
                                                    className="text-center my-4">
                                                    Don't have an account? Sign up
                                                    <Link to="/signup">here.</Link>
                                                </p>

                                                <input
                                                    className="my-4 btn btn-block btn-primary"
                                                    type="submit" value="Login"
                                                    disabled={!formik.isValid}
                                                />
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