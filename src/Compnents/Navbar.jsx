import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import AuthContext from '../Context/AuthContext'

const Navbar = () => {
  const data = useContext(AuthContext)

  return (
    <div className='NavBar'>
      <div className='left'>
        <Link className='items' to={data.isLoggedIn ? '/dashboard' : '/'}><img src="../public/To-do.png" className='icon' />ToDo</Link>
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