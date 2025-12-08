import "../DashboardCompnent/Profile.css";
import { FaUserCircle } from "react-icons/fa";
import { IoCamera } from "react-icons/io5";
import React, { useEffect, useRef, useState } from 'react'

const Profile = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const fileInputRef = useRef(null);

  useEffect(() => {
    const storedImage = localStorage.getItem('profile_image')
    const storedName = localStorage.getItem("profile_name")
    const storedEmail = localStorage.getItem("profile_email")

    if(storedImage) setImage(storedImage)
    if (storedName) setName(storedName)
    if (storedEmail) setEmail(storedEmail)
  }, [])


  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (!file) return;

    const reader = new FileReader()
    reader.onloadend = () => {
      setImage(reader.result)
      localStorage.setItem("profile_image", reader.result)
    }
    reader.readAsDataURL(file)
  }

  return (
    <>
      <div className="profile">
        <p className="profle-heading">Profile</p>
        <div className="profile-image-section">
          {image ? (<img src={image} alt="profile" className="profile-image" />) : (
            <FaUserCircle className="profile-icon" />
          )}
          <label className="profile-upload-btn" onClick={() => fileInputRef.current.click()}><IoCamera /></label>
          <input type="file" accept="image/*" ref={fileInputRef} onChange={handleImageUpload} hidden />
        </div>
        <div className="Profile-Details">
          <div className="Detail-tab">
            <h4 className="Details-heading">Name</h4>
            <p className="Details-description">{name}</p>
          </div>
          <div className="Detail-tab">
            <h4 className="Details-heading">Email:</h4>
            <p className="Details-description">{email}</p>
          </div>
        </div>
      </div>
    </>

  )
}

export default Profile