import React from 'react'
import { useLocation } from 'react-router-dom';
import "./UserDetails.css"

const UserDetails = () => {
    const location = useLocation();
    const userData = location.state?.data;

    console.log(userData)

  return (
    <div className='container details__container'>
        <h3>User Details</h3>
      {userData && (
        <div>
          <div className="details">
            <div className="details__left">
                <img src={userData.picture.thumbnail} alt="" />
            </div>
            <div className="details__right">
                <div>
                <p>
                    <strong>Name:</strong> {userData.name.first} {userData.name.last}
                </p>
                <p>
                    <strong>Email:</strong> {userData.email}
                </p>
                <p>
                    <strong>Phone:</strong> {userData.phone}
                </p>
                <p>
                    <strong>Country:</strong> {userData.location.country}
                </p>
                
                <p>
                    <strong>Nationality:</strong> {userData.nat}
                </p>
                <p>
                    <strong>City:</strong> {userData.location.city}
                </p>
                <p>
                    <strong>Date of Birth:</strong> {userData.dob.date}
                </p>
                </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default UserDetails