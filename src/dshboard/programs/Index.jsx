import React from 'react';
import { useState } from 'react';
// import { FaBeerAiFillHome } from "react-icons/fa";
import { FaHome,FaUser,FaClipboard,FaBook,FaUserPlus,FaPlus } from 'react-icons/fa';

import '../css/Index.css';
import Assignment from './Assignment';
import Profile from './Profile';
const Index = () => {
  const [showForm,setShowForm]=useState(false);
  const [showProfile,setShowProfile]=useState(false);
  const [showAssignment,setShowAssignment]=useState(true);
  const toggleForm=()=>{
    setShowForm(!showForm);
  }
  const cutForm=()=>{
    setShowForm(false)
  }
  const displayProfile=()=>{
  
      setShowProfile(true);
      setShowAssignment(false)
    
  }
  // const ShowAssign=()=>{
  //   setShowAssignment(true)
  // }
  return (
      <div className='index-main'>
        <div className="index-navbar">
          <h3>DSVV Computer Science Department</h3>       
        </div>
        <div className="functionalArea">
          <div className="index-menu">
            <div className="sidemenu">
                <h3>Admin</h3>
                <div className="sidebar-option"><FaHome /><a href="/">Dashboard</a></div>
                <div className="sidebar-option" onClick={displayProfile}><FaUser/>Profile</div>
                <div className="sidebar-option"><FaClipboard/>Assignment</div>
                <div className="sidebar-option"><FaBook/>My Library</div>
                <div className="sidebar-option"><FaUserPlus/>Add new student</div>
            </div>  
          </div>
         {(showAssignment&&
          <div className="assign">

            <div className="plus-container">
              <div className="dotted-border"onClick={toggleForm}>
                <div className="plus-sign">+</div>
                <h3>New Assesment</h3>
              </div>
            </div>
            <div className="assignment">
            {showForm  && (
                <Assignment onCutForm={cutForm}/>
            )}
            </div>

          </div>
         )}
          <div className="profile">
            {(
              showProfile &&
              <Profile />
            )}
          </div>
        </div>
        
      </div>
  )
}

export default Index