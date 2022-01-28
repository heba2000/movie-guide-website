import { useFormik } from 'formik'
import * as Yup from 'yup'
function Login() {
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
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 mx-auto'>
                <h3 className='py-2'>Login Form</h3>
                    <form onSubmit={formik.handleSubmit}>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                name="emailValue"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.emailValue}
                            />
                            {formik.touched.emailValue && formik.errors.emailValue ? <span className="text-danger">{formik.errors.emailValue} </span> : null}

                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control"
                                name="passValue"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.passValue}
                            />
                            {formik.touched.passValue && formik.errors.passValue ? <span className="text-danger">{formik.errors.passValue} </span> : null}
                        </div>
                        <button type="submit" class="btn btn-primary text-center">Submit</button>
                    </form>
                </div>
            </div>

        </div>
    );
}
export default Login; 