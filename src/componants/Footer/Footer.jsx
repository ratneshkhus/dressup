import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
import { AiFillInstagram } from "react-icons/ai";
import { MdOutlineFacebook } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <>
            <footer>
                <h1>Dress up</h1>
                <div className="links_aranges">

                    <div className="links_holders_forfooter">

                        <ul>
                            <li>
                                <h4>Categories</h4>
                            </li>
                            <li>
                                <Link to={`/browse/men`}>men</Link>
                            </li>
                            <li>
                                <Link to={`/browse/women`}>women</Link>
                            </li>
                            <li>
                                <Link to={`/browse/kids`}>kids</Link>
                            </li>
                            <li>
                                <Link to={`/browse/trending`}>Trending</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="links_holders_forfooter">
                        <ul>
                            <li>
                                <h4>Mens wear</h4>
                            </li>
                            <li>
                                <Link to={`/browse/men`}>jeans</Link>
                            </li>
                            <li>
                                <Link to={`/browse/women`}>tshirt</Link>
                            </li>
                            <li>
                                <Link to={`/browse/kids`}>shirt</Link>
                            </li>
                            <li>
                                <Link to={`/browse/trending`}>suits</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="links_holders_forfooter">
                        <ul>
                            <li>
                                <h4>Womens wear</h4>
                            </li>
                            <li>
                                <Link to={`/browse/men`}>jeans</Link>
                            </li>
                            <li>
                                <Link to={`/browse/women`}>tshirt</Link>
                            </li>
                            <li>
                                <Link to={`/browse/kids`}>shirt</Link>
                            </li>
                            <li>
                                <Link to={`/browse/trending`}>suits</Link>
                            </li>
                            <li>
                                <Link to={`/browse/kids`}>plasa</Link>
                            </li>
                            <li>
                                <Link to={`/browse/trending`}>top</Link>
                            </li>
                            <li>
                                <Link to={`/browse/kids`}>saari</Link>
                            </li>
                            <li>
                                <Link to={`/browse/trending`}>nightiy</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="links_holders_forfooter">
                        <ul>
                            <li>
                                <h4>Kids wear</h4>
                            </li>
                            <li>
                                <Link to={`/browse/men`}>jeans</Link>
                            </li>
                            <li>
                                <Link to={`/browse/women`}>tshirt</Link>
                            </li>
                            <li>
                                <Link to={`/browse/kids`}>shirt</Link>
                            </li>
                            <li>
                                <Link to={`/browse/trending`}>suits</Link>
                            </li>
                            <li>
                                <Link to={`/browse/kids`}>plasa</Link>
                            </li>
                            <li>
                                <Link to={`/browse/trending`}>top</Link>
                            </li>
                            <li>
                                <Link to={`/browse/kids`}>saari</Link>
                            </li>
                            <li>
                                <Link to={`/browse/trending`}>nightiy</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="social_icons_foooter">
                        <AiFillInstagram fontSize={"1.7rem"} />
                        <MdOutlineFacebook fontSize={"1.7rem"} />
                        <FaXTwitter fontSize={"1.5rem"} />
                    </div>
                </div>

                <h1 className='heading_footer'>Dress up</h1>
                <div className="aboutdev_links">
                <Link to={'/aboutdev'}>
                <span style={{color : 'white'}}>about this project</span>
                </Link>
                <Link to={'/aboutdev'}>
                <span style={{color : 'white'}}>about dev?</span>
                </Link>
                <Link to={'/aboutdev'}>
                <span style={{color : 'white'}}>what i learned</span>
                </Link>
                </div>
            </footer>
        </>
    )
}
