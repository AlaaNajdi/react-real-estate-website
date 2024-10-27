import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const navigate = useNavigate();
  const [user, setuser] = useState({
    email: '',
    password: '',
  });
  const handlechange = (event) => {
    const { name, value } = event.target;
    setuser((prevuser) => {
      return { ...prevuser, [name]: value }
    })
  }
  const handlesubmit = (event) => {
    event.preventDefault()
    // creat user
    const newuser = {
      id: Date.now().toString(),
      email: user.email,
      password: user.password
    }
    const userdata = {
      id: Date.now().toString(),
      name: 'alaa',
      email: 'alaa@gmail.com',
      address: 'med',
      password: '123456',
      isAdmin: true,
    }
    if (user.email === userdata.email && user.password === userdata.password) {
      navigate("/profile", { state: userdata })
      console.log('secssful to sign in')
      localStorage.setItem("signin", JSON.stringify({ userdata, IsSignin: true }))
    }
    else {
      console.log(' not secssful to sign in')
      navigate("/signin")
    }
    console.log(newuser)
  }
  return (
    <div >
      <h2>sign in</h2>
      <form onSubmit={handlesubmit}>
        <div>
          <label htmlFor="email">email: </label>
          <input type="text" id='email' name='email' value={user.email} onChange={handlechange} />
        </div>
        <br />
        <div>
          <label htmlFor="password">password: </label>
          <input type="password" id='password' name='password' value={user.password} onChange={handlechange} />
        </div>
        <br />
        <button type='submit' onClick={handlesubmit}>sign in</button>
      </form>
    </div>
  )
}

export default Signin
