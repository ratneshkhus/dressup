import React from 'react'
import "./testimonial.css"
import { FaUser } from 'react-icons/fa'
import { FaStar } from 'react-icons/fa6'

export default function Testimonial() {
    return (
        <>
            <section id='testimonial'>
                <div className="tesimonial_inner">
                    <h1>What our customers says</h1>
                    <div className="review_holder">
                        <div className="review">
                            <div className="heading">
                                <FaUser />
                                <h4>magodiya prashant</h4>
                            </div>
                            <div className="review_contant">

                                <p>i really like the design of cloths so much
                                    also material is good as</p>
                                <div>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                            </div>
                        </div>
                        <div className="review">
                            <div className="heading">
                                <FaUser />
                                <h4>Ratnesh kumawat</h4>
                            </div>
                            <div className="review_contant">

                                <p>i really like the design of cloths so much... its fine and looks perfect on me
                                    also material is good as well.. i really like the design of cloths so much... its fine and looks perfect on me
                                    also material is good as wellfeels like premium quality also material is good as well.. feels like premium quality</p>
                                <div>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                            </div>
                        </div>
                        <div className="review">
                            <div className="heading">
                                <FaUser />
                                <h4>darshit mungra</h4>
                            </div>
                            <div className="review_contant">

                                <p style={{marginBottom : "10px"}}>i really like the design of cloths so much... its fine and looks perfect on me
                                    also material is good as well.. feels like premium quality</p>
                                <div>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                            </div>
                        </div>
                        <div className="review">
                            <div className="heading">
                                <FaUser />
                                <h4>avi chovatiya</h4>
                            </div>
                            <div className="review_contant">

                                <p style={{marginBottom : "10px"}}>i reaalso material is good as well.. feels like premium qualitylly like the design of cloths so much... its fine and looks perfect on me
                                    also material is good as well.. feels like premium quality</p>
                                <div>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
