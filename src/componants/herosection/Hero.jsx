import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'
import "./hero.css"

import img1 from './img1.png'
import img2 from './fashion.jpg'
import img3 from './spring.jpeg'
import img4 from './cute-fashion.jpg'

export default function Hero() {
    return (
        <>
            <div className="hero">
                <div className="modelimg1">
                    <img src={img1} alt="img1"/>
                </div>
                <div className="herotext">
                    <h2>Explore your</h2>
                    <div className='herotex_text_design'>
                        <h2>Perfect</h2>
                        <div className="modelimg2_design">
                            <img src={img2} alt="img2" />
                        </div>
                    </div>
                    <h2>Cloths collection</h2>
                    <p>discover your favorite outfit - home  wear , fashion brand
                        and <br />more only on dress up</p>

                    <div className="exploremore_btns_design">
                        <button className='explorebtns_home'>Explore more</button>
                        <div className="explorebtns_home_arrow_design">
                            <div className="explorebtns_home_arrow_design_white">
                                <FaArrowRight />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="modelimg3">
                    <img src={img3} alt="" />
                </div>
            </div>
            <div className="hero">
                <div className="lefthero">
                    <h1>Discover perfect outfit for kids</h1>
                    <p>Uncover the Perfect Outfits for Your Little Ones. <br />
                        Where  Style  Meets  Comfort  for  Every  Adventure !</p>

                    <div className="left_MINI_herobtn">
                        <Link to={`/explore/kids`}>
                            <span>Explore</span>
                        </Link>
                    </div>
                </div>
                <div className="righthero">
                    <div className="kidimg">
                        <img src={img4} alt="kids"  style={{scale: "1.2"}}/>
                        <div className="explorebtn_onmini_hero">
                            <FaArrowRight fontSize={"1.3rem"} color='white' />
                        </div>
                    </div>
                    <div>
                        <h1>Special Offers</h1>
                        <br />
                        <p>Find Trendy and Comfortable  
                            Clothing for Kids. Dress <br />
                            Them in Joy, Play, and Style!</p>
                    </div>
                </div>
            </div>
        </>
    )
}
