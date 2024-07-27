import React from 'react'
import './About.css'
import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import img1 from './ratu1.jpg'


export default function AboutDev() {
    return (
        <>
            <section className='aboutdev'>
                <div className="profiletype">
                    <div className="devname">
                        <h3>Ratnesh kumawat</h3>
                        <span style={{ marginLeft: "5px" }}>UI/UX Designer | Web Developer | 3D web-designing</span>
                    </div>
                </div>
                <div className="profiletype">
                <FaInstagram fontSize={"1.3rem"} color='white'/>
                <a href="https://www.linkedin.com/in/ratnesh-kumawat-6301b425b" 
                target="_blank" rel="noopener noreferrer">
                <CiLinkedin  fontSize={"1.5rem"} color='white'/>
                </a>
                </div>
            </section>
        </>
    )
}
