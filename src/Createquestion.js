import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { createQuestion } from "./api/Questions";

function Createquestion() {
  const navigate =useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      type: "",
      question: "",
    },
    onSubmit :async (values)=>{
   try {
    await createQuestion(values)
    navigate("/portal/list-quires")
   } catch (error) {
    alert("something went wrong")
   }
    }
  });
  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <label>Name</label>
              <input 
               name="name"
               onChange={formik.handleChange}
               value={formik.values.name}               
              type={"text"} className="form-control" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <label>Type</label>
              <select 
              name="type"
              onChange={formik.handleChange}
              value={formik.values.type}
              className="form-control">
                <option value={"None"}>--Select the Option--</option>
                <option value={"C"}>C</option>
                <option value={"C++"}>C++</option>
                <option value={"Java"}>Java</option>
                <option value={"Python"}>Python</option>
                <option value={"Javascript"}>Javascript</option>
                <option value={"React"}>React</option>
                <option value={"Angular"}>Angular</option>
                <option value={"NodeJS"}>NodeJS</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="form-group">
              <p>
                <label>Write your Questions and Doubts Here</label>
              </p>
              <textarea
              name="question"
              onChange={formik.handleChange}
              value={formik.values.question}
                className="form-control"
                rows={"10"}
                cols={"150"}
                placeholder="write Here..."
              ></textarea>
            </div>
          </div>
        </div>
        <input
          type={"submit"}
          value="Submit"
          className="btn btn-primary mt-2"
        />
      </form>
    </div>
  );
}

export default Createquestion;
