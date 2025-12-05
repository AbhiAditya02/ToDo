import React from 'react'
import "./Dashboard.css"
import Sidebar from '../DashboardCompnent/Sidebar'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className="dashboard-sidebar">
        <Sidebar />
      </div>
      
      <div className="dashboard-herosection">
        <Outlet /> 
      </div>
    </div>
  )
}

export default Dashboard