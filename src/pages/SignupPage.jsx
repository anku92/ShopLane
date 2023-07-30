import Navbar from "../components/Navbar";
import CategoryNav from "../components/CategoryNav";
import { Link } from "react-router-dom";
import axios from "axios";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import EndPoints from "../api/EndPoints";

const SignupPage = () => {

    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        userName: "",
        password: "",
        confirmPassword: ""
    }

    const onSubmit = (values) => {
        axios.post(EndPoints.REGISTER_URL, values)
            .then((resp => console.log(resp.data)))
            .catch((error) => console.log(error))
    };

    const validationSchema = Yup.object({
        firstName: Yup.string().required('First name is required').min(1).max(10),
        lastName: Yup.string().required('Last name is required').min(1).max(10),
        email: Yup.string().required("Email is required").email("Email must be in valid email format"),
        userName: Yup.string().required("User Name is required"),
        password: Yup.string().required("Password is required").min(6).max(12),
        confirmPassword: Yup.string()
            .required('Please retype your password.')
            .oneOf([Yup.ref('password')], 'Your passwords do not match.')
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
                                                    <Field className={formik.touched.userName && formik.errors.userName
                                                        ? "form-control is-invalid" : "form-control"}
                                                        name="userName" type="text" placeholder="User Name" />
                                                    <ErrorMessage name="userName">
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