import { useFormik } from "formik";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function Createanswer() {
  const params = useParams();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      answer: "",
    },
    onSubmit: async (values) => {
      try {
        await Createanswer(params.rId, values);
        navigate(`/portal/list-answer/${params.rId}`);
      } catch (error) {
        alert("something went wrong");
      }
    },
  });
  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
      <div className="row">
        <div className="col-lg-6">
          <label>Name</label>
          <input
           name="name"
           onChange={formik.handleChange}
           value={formik.values.name}
          type={"text"} className="form-control" />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="form-group">
            <p>
              <label>Write your Answers Here</label>
            </p>
            <textarea
              name="answer"
              onChange={formik.handleChange}
              value={formik.values.answer}
              className="form-control"
              rows={"10"}
              cols={"150"}
              placeholder="write Here..."
            ></textarea>
          </div>
        </div>
      </div>
      <input type={"submit"} value="Submit" className="btn btn-primary mt-2" />
      </form>
    </div>
  );
}

export default Createanswer;
