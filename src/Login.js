import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { login } from "./api/user";
import { config } from "./Config";

function Login() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate:(values)=>{
      let errors = {}
     
     if(!values.email){
        errors.email="Required"
     }
     if(!values.password){
        errors.password="Required"
     }

      return errors;
    },
    onSubmit:async (values)=>{
        try {
          let loginreq =await login(values)
          localStorage.setItem(`${config.storage_key}`,loginreq.data.token)
          navigate("/portal/list-quires")
        } catch (error) {
          alert("something went wrong")
        }
    },
  });
  return (
    <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-10 col-lg-12 col-md-9">
            <div class="card o-hidden border-0 shadow-lg my-5">
              <div class="card-body p-0">
                <div class="row">
                  <div class="col-lg-6">
                    <img
                      style={{ width: "500px", height: "600px" }}
                      src="https://logos-download.com/wp-content/uploads/2019/01/Stack_Overflow_Logo.png"
                    />
                  </div>
                  <div class="col-lg-6">
                    <div class="p-5">
                      <div class="text-center">
                        <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                      </div>
                      <form class="user" onSubmit={formik.handleSubmit}>
                        <div class="form-group">
                          <input
                            type="email"
                            class="form-control form-control-user"
                            name="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            placeholder="Enter Email Address..."
                          />
                          {
                         formik.errors.email && <span>Required</span>
                          }
                        </div>
                        <div class="form-group">
                          <input
                            type="password"
                            class="form-control form-control-user"
                            name="password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            placeholder="Password"
                          />
                        </div>
                        <div class="form-group">
                          <div class="custom-control custom-checkbox small">
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              id="customCheck"
                            />
                            <label
                              class="custom-control-label"
                              for="customCheck"
                            >
                              Remember Me
                            </label>
                          </div>
                        </div>
                        <input type={"submit"} className="btn btn-primary btn-user btn-block" value={"Login"} />
                        <hr />
                        <a
                          href="index.html"
                          class="btn btn-facebook btn-user btn-block"
                        >
                          Register
                        </a>
                      </form>
                      <hr />
                      <div class="text-center">
                        <a class="small" href="forgot-password.html">
                          Forgot Password?
                        </a>
                      </div>
                      <div class="text-center">
                        <a class="small" href="register.html">
                          Create an Account!
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Login;
