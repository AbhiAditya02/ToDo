import React, { useContext } from 'react'
import AuthContext from '../Context/AuthContext'
import { Link } from 'react-router-dom'
import "../DashboardCompnent/Sidebar.css"


const Sidebar = () => {
  const loginData = useContext(AuthContext)
  return (
    <div className="sidebar">
      <Link className='sidebar-btn' to="/dashboard">MyToDo</Link>
      <Link className='sidebar-btn' to="/dashboard/profile">Profile</Link>
      <Link className='sidebar-btn' to={'/'} onClick={loginData.logOut}>SignOut</Link>
    </div>
  )
}

export default Sidebar
