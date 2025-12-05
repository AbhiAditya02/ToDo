import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../Context/AuthContext";
import "./SignIn.css"

const SignIn = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData({ ...formData, [name]: value })
  }

  const data = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
      alert("Fill all fields");
      return;
    }

    localStorage.setItem("profile_name", formData.name);
    localStorage.setItem("profile_email", formData.email);

    data.logIn();
    navigate("/dashboard");
    alert(`Welcome, ${formData.name} !!`);
    setFormData({
      name: '',
      age: '',
      email: '',
      password: '',
      Phone: ''
    })
  };

  return (
    <div className="signInFull">
      <div className="signIn">
        <form className="form" onSubmit={handleSubmit}>
          <h1 className="SignInh1">Sign In</h1>
          <div>
            <label className="lable">Name: </label>
            <input type="text" placeholder="Name" className="input" value={formData.name} name='name' onChange={handleChange} />
          </div>
          <div>
            <label className="lable">Email: </label>
            <input type="email" placeholder="Email" className="input" value={formData.email} name="email" onChange={handleChange} />
          </div>
          <div>
            <label className="lable">Password: </label>
            <input type="password" placeholder="Password" className="input" value={formData.password} name="password" onChange={handleChange} />
          </div>
          <button className="Sbtn" type="submit">
            Sign In
          </button>
        </form>
      </div>
      <div className="backDesign">
        <img src="/To-do.png" className="design" />
      </div>
    </div>
  );
};

export default SignIn;
