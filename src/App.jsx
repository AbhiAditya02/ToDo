import React, { useContext } from 'react'
import AuthContext from './Context/AuthContext'
import SignIn from './Pages/SignIn';
import Dashboard from './Pages/Dashboard';
import Navbar from './Compnents/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Herosection from './DashboardCompnent/Herosection';
import Profile from './DashboardCompnent/Profile';



const App = () => {
  const data = useContext(AuthContext);
  console.log(data);

  return (
    <>
      <div className='.navbar'>
        <Navbar />
      </div>
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<Herosection />} />
            <Route path="profile" element={<Profile />} />
            <Route path="todo" element={<Herosection />} />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App