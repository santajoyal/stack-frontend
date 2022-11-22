import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Tobbar from './Tobbar'

function Portal() {
  return (
    <div id='wrapper'>
       <Sidebar/>
       <div id='content-wrapper' className='d-flex flex-coloum'>
        <div id='content'>
          <Tobbar/>
          <Outlet/>  
        </div>
       </div>
    </div>
  )
}

export default Portal