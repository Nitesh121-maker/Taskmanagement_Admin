import React from 'react'
import { FaUser } from 'react-icons/fa'
import '../css/profile.css'
const Profile = () => {
  return (
    <div className='ProfileMain'>
        <button>Edit Profile</button>
        <div className="user-info">
          <div className="UserName">
              <FaUser/>
              <h2>Nitesh Chauhan</h2>
              <h3>niteshchauhan825@gmail.com</h3>
          </div>
          <div className="line"></div>
          <div className="UserInformation">
              <div className="Ui1">
                <div className="institution">
                  <div className="ins-title">Institute</div>
                  <div className="ins-mame">Dev Sanskriti Vishwidyalaya</div>
                </div>
                <div className="department">
                  <div className="department-title">Department</div>
                  <div className="department-name">Computer Science</div>
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Profile