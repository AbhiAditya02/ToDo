import React, { useContext } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AuthContext from "../Context/AuthContext";
import logo from '../assests/To-do.png';

const Home = () => {
  const data = useContext(AuthContext);
  return (
    <div className="home">
      <div className="content">

        <h1 className="Home-title">Organize Your Day Effortlessly</h1>

        <p className="para">
          A simple and powerful To-Do App that helps you plan, create, track, 
          and complete your tasks on time. Stay productive. Stay organized.
        </p>

        <Link to={data.isLoggedIn ? '/dashboard' : '/signin'} className="start">
          Get Started
        </Link>

      </div>

      <div>
        <img src={logo} className="hdesign" />
      </div>
    </div>
  );
};

export default Home;
