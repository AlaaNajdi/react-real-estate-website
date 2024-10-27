import React from 'react'
import { useLocation } from 'react-router-dom'

const Profile = () => {
  //to get information
  //uselocation is method in react to detrimain the information location
  const { state } = useLocation();
  console.log(state);
  return (
    <div>
      <h2>profile page</h2>
      <h3>name:{state.name}</h3>
      <h3>email:{state.email}</h3>
      <h3>address:{state.address}</h3>
    </div>
  )
}

export default Profile
