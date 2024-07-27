import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios'

import "./form.css"

export default function Login() {

  const [email, setemail] = useState()
  const [password, setpassword] = useState()


  // const handlesubmit = (e) => {
  //   e.preventDefault()
  //   const response = axios.post('http://localhost:3001/login', {email , password})
  //     .then(result => {
  //       console.log(result.data)
  //       localStorage.setItem('token' , result.data.token)
  //     })
  //     .catch(err => console.log(err));
  // }
  const handlesubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:3001/login', { email, password });
      console.log(response.data);
      localStorage.setItem('token', response.data.token);
      window.location.href = '/browse';
    } catch (err) {
      if (err.response) {
        console.error('Login failed:', err.response.data.message);
        alert('Login failed: ' + err.response.data.message);
      } else if (err.request) {
        console.error('No response from server:', err.request);
        alert('No response from server. Please try again later.');
      } else {
        console.error('Error:', err.message);
        alert('An error occurred: ' + err.message);
      } 
    }
  }

  return (
    <>
      <section className='formwrapper'>
        <div className="form_container" style={{ width: "320px" }}>
          <h2>Welcome Back!</h2>
          <span style={{ fontSize: "0.9rem", opacity: "0.8" }}>its time for new look!</span>
          <form onSubmit={handlesubmit} style={{ marginTop: "20px" }}>
            <div className="forminputareas">
              <h4>Email</h4>
              <input type="text" name='sname' placeholder='enter email'
                onChange={(e) => setemail(e.target.value)}

              />
            </div>
            <div className="forminputareas" >
              <h4>Password</h4>
              <input type="password" name='spass' placeholder='enter Password'
                onChange={(e) => setpassword(e.target.value)}

              />
            </div>
            <div className="forminputareas">
              <input type="submit" name='submit' value={"Login"} style={{ background: "#9B5FFC", color: "white", marginTop: "20px" }} />
            </div>
          </form>
          <span style={{ fontSize: "0.8rem", marginTop: "10px", transform: "translate(40px)" }}>don’t have a account ?
            <Link to={`/register`}>
              <span style={{ color: "#9B5FFC" }}> Sign up!</span>
            </Link>
          </span>
        </div>
      </section>
    </>
  )
}
