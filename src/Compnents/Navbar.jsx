import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import AuthContext from '../Context/AuthContext'
import logo from '../assests/To-do.png';

const Navbar = () => {
  const data = useContext(AuthContext)

  return (
    <div className='NavBar'>
      <div className='left'>
        <Link className='items' to={data.isLoggedIn ? '/dashboard' : '/'}><img src={logo} className='icon' />ToDo</Link>
      </div>
      <div className='right'>
        {
          data.isLoggedIn ? (
            <div className='right-item'>
              <Link className='items btn-dash' to={'/dashboard'}>Dashboard</Link>
              <Link className='items btn' to={'/'} onClick={data.logOut}>SignOut</Link>
            </div>
          ) : (
            <Link className='items btn' to={'/signin'}>SignIn</Link>
        )}
      </div>
    </div>
  )
}

export default Navbar