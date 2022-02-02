import { useFormik } from 'formik'
import * as Yup from 'yup'
import { LoginContext } from '../../context/loginContext';
import React, { useContext } from "react";
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Login.css'


function Login() {
    const { loginContext, setLoginContext } = useContext(LoginContext);
    const history = useHistory();

    const formik = useFormik({
        initialValues: {
            emailValue: "",
            passValue: "",
        },
        validationSchema: Yup.object({
            emailValue: Yup.string().max(25, "Email can't be more than 25 characters")
                .required("Email is Required")
                .matches(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i, "Invalid Email"),
            passValue: Yup.string().required("Password is Required")

        }),
        onSubmit: (values) => {
            console.log(values)
        }
    });

    return (
        <section className='login-page '>
            <div className='layer d-flex align-items-center justify-content-center'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 mx-auto'>
                        <h3 className='py-3'><FontAwesomeIcon icon="video" className='mr-2 text-red'/> Login To MoviFy</h3>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input type="email" className="form-control"
                                    name="emailValue"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.emailValue}
                                />
                                {formik.touched.emailValue && formik.errors.emailValue ? <span className="text-danger">{formik.errors.emailValue} </span> : null}

                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control"
                                    name="passValue"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.passValue}
                                />
                                {formik.touched.passValue && formik.errors.passValue ? <span className="text-danger">{formik.errors.passValue} </span> : null}
                            </div>
                            <button type="submit" className="btn btn-primary text-center"
                             disabled={!formik.isValid}
                            onClick={() => {history.push("/Home")}} >Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            </div>

        </section>

    );
}
export default Login; 