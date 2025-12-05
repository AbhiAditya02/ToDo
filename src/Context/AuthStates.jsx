import React, { useEffect, useState } from 'react'
import AuthContext from './AuthContext'

const AuthStates = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  useEffect(() => {
    const store = localStorage.getItem('loggedIn');
    if (store === "true") {
      setIsLoggedIn(true)
    }
  }, [])

  const logIn = () => {
    localStorage.setItem("loggedIn", "true");
    setIsLoggedIn(true)
  }

  const logOut = () => {
    localStorage.removeItem("loggedIn")
    setIsLoggedIn(false)
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, logIn, logOut }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthStates