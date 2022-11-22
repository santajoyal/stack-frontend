import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { config } from "./Config";


function Register() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
     
      try {
        const user = await axios.post(`${config.api}/user/register`, values);{
          navigate("/");
        }
      } catch (error) {
        alert(error.response.data.message);
      }
    },
  });
  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-12 form-group">
            <label>E-mail</label>
            <input
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className="form-control"
              type={"email"}
            />
          </div>
          <div className="col-lg-12 form-group">
            <label>Password</label>
            <input
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              className="form-control"
              type={"password"}
            />
          </div>
          <div className="col-lg-12 form-group mt-2">
            <input className="btn btn-primary" type={"submit"} />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register