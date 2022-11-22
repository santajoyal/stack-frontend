import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchanswer } from "./api/answer";

function Listanswers() {
  const params = useParams();
  const [answers, setAnswers] = useState([]);
  useEffect(() => {
    getAnswers();
  }, []);

  async function getAnswers() {
    try {
      const answers = await fetchanswer(params.rId);
      setAnswers(answers.data);
    } catch (error) {
      alert("something went wrong");
    }
  }
  return (
    <div class="container-fluid">
      <h1 class="h3 mb-2 text-gray-800">Tables</h1>
      <p class="mb-4">
       Answers are Here{" "}
        <a target="_blank" href="https://datatables.net">
          official DataTables documentation
        </a>
        .
      </p>
      <Link
        className="btn btn-primary btn-sm mb-2"
        to={`/portal/create-answer/${params.rId}`}
      >
        Create Answer
      </Link>
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">Answers</h6>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table
              class="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Answers</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                <th>Name</th>
                <th>Answers</th>
                </tr>
              </tfoot>
              <tbody>
                {
                  answers.map((ans)=>{
                    return <tr>
                    <td>{ans.name}</td>
                    <td>{ans.answer}</td>
                  </tr>
                  })  
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Listanswers;
