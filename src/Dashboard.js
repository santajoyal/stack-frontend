import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Dashboard() {
  const navigate = useNavigate();
  return (
    <>
    <div className='App container'>
      <div className='row'>
        <div className='col-md-12'>
          <h1 style={{marginTop:"70px"}}> <b>Welcome To StackOverflow</b></h1>
          <img className='img-fluid'style={{width:"300px",height:"300px"}} src='https://media.wired.com/photos/5926db217034dc5f91becd6b/master/w_1904,c_limit/so-logo-s.jpg'/>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <Link to={"/portal/login"} className='btn btn-primary' style={{marginLeft:"30px"}}>Login</Link>
          <button className='btn btn-info' style={{marginLeft:"75px"}}>Register</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Dashboard