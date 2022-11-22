import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { listQuestion } from './api/Questions';

function Listqns() {
  const [questions,setQuestions] = useState([]) 
  useEffect(()=>{
    getQuestion();
  },[])

  async function getQuestion(){
   try {
   let res =await listQuestion()
   setQuestions(res.data)
   } catch (error) {
    alert("something went wrong")
   } 
  } 
  return (
    <div class="container-fluid">


    <h1 class="h3 mb-2 text-gray-800">Questions and Answers</h1>
    <p class="mb-4">You can find your Questions and Answers here <a target="_blank"
            href="https://datatables.net">official DataTables documentation</a>.</p>

      <Link to={"/portal/create-questions"} className='btn btn-primary mb-2'>Ask Question</Link>
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Q/A</h6>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Subject</th>
                            <th>Questions</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>Name</th>
                            <th>Subject</th>
                            <th>Questions</th>
                            <th>Action</th>
                        </tr>
                    </tfoot>
                    <tbody>
                       {
                        questions.map((res)=>{
                          return (
                            <tr>
                            <td>{res.name}</td>
                            <td>{res.type}</td>
                            <td>{res.question}</td>
                            <td>
                              <Link to={`/portal/list-answer/${res._id}`} className='btn btn-primary btn-sm'>
                                View Answers
                              </Link>
                            </td>
                        </tr>
                          )
                        })
                       }
                    </tbody>
                </table>
            </div>
        </div>
    </div>

</div>
  )
}

export default Listqns