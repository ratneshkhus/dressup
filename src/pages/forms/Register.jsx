import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import "./form.css"


export default function Register() {
    const [username, setusername] = useState()
    const [mobile, setmobile] = useState()
    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const [address, setaddress] = useState()

    const handlesubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register', {username,password,email,address,mobile})
        .then(result => console.log(result.data))
        .catch(err => console.log(err));
    }
    return (
        <>
            <section className='formwrapper'>
                <div className="form_container">
                    <h2>join us !</h2>
                    <span style={{ fontSize: "0.9rem", opacity: "0.8" }}>and become more stylish !</span>
                    <form onSubmit={handlesubmit} className='gridfor_register' style={{ marginTop: "20px" }}>
                        <div className="formcontainer">
                            <div className="forminputareas">
                                <h4>Full name</h4>
                                <input
                                    type="text"
                                    name="username"
                                    placeholder='enter name'
                                    onChange={(e) => setusername(e.target.value)}
                                />
                            </div>
                            <div className="forminputareas">
                                <h4>Contact no.</h4>
                                <input
                                    type="number"
                                    name="mobile"
                                    placeholder='enter no.'
                                    onChange={(e) => setmobile(e.target.value)}
                                    />
                            </div>
                            <div className="forminputareas">
                                <h4>Email</h4>
                                <input
                                    type="text"
                                    name='email'
                                    placeholder='enter email'
                                    onChange={(e) => setemail(e.target.value)}
                                    />
                            </div>
                            <div className="forminputareas" >
                                <h4>Password</h4>
                                <input
                                    type="password"
                                    name='password'
                                    placeholder='enter Password'
                                    onChange={(e) => setpassword(e.target.value)}
                                    />
                            </div>
                            <div className="forminputareas row_span_for_2" >
                                <h4>address</h4>
                                <textarea
                                    name="address"
                                    id="address"
                                    placeholder='enter address'
                                    onChange={(e) => setaddress(e.target.value)}
                                ></textarea>
                            </div>

                            <div className="forminputareas row_span_for_2">
                                <input type="submit" name='submit' style={{ background: "#9B5FFC", color: "white" }} />
                            </div>

                        </div>

                    </form>
                    <span style={{ fontSize: "0.8rem", marginTop: "10px", transform: "translate(10vw)" }}>alredy have a account ?
                        <Link to={`/login`}>
                            <span style={{ color: "#9B5FFC" }}> Sign in!</span>
                        </Link>
                    </span>
                </div>
            </section>
        </>
    )
}
