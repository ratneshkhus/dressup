import React, { useState,useEffect } from 'react'
import { Link } from "react-router-dom"
import { LuShoppingCart } from "react-icons/lu";
import { MdSearch } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import "./navbar.css"

export default function Navbar() {

    const [istoken, setistoken] = useState(false)
    useEffect(() => {
        if (localStorage.getItem('token')) {
            setistoken(true);
        }
    }, []);
    const handleExploreAllClick = (e,param) => {
        e.preventDefault(); // Prevent the default link behavior
        window.location.href = `/browse/${param}`; // Force a page reload
    };
    return (
        <nav>
            <div className="logo">
                <Link to={'/'}>
                    dress<span>up</span>
                </Link>
            </div>
            <div className="linksholder">
                <ul>
                    <li>
                        <Link to={`/browse/men`}  onClick={(e) => handleExploreAllClick(e, 'men')}>men</Link>
                    </li>
                    <li>
                        <Link to={`/browse/women`} onClick={(e) => handleExploreAllClick(e, 'women')}>women</Link>
                    </li>
                    <li>
                        <Link to={`/browse/kids`} onClick={(e) => handleExploreAllClick(e, 'kids')}>kids</Link>
                    </li>
                    <li>
                        <Link to={`/browse`} >Explore</Link>
                    </li>
                    <li>
                        <Link to={`/aboutdev`}>Aboutdev</Link>
                    </li>
                </ul>
            </div>
            <div className="iconsbar">
                <form action="" method='get' className='search_bar'>
                    <MdSearch fontSize={"1.5rem"} className='searchicon' />
                    <input type="text" name="search" placeholder="search" />
                </form>
                <Link to={`/cart`}>
                    <LuShoppingCart fontSize={"1.5rem"} />
                </Link>
                {!istoken ?
                    <div className="loginbtn">
                        <Link to={`/login`}>
                            <h4>login</h4>
                        </Link>
                    </div>
                    : <Link to={`/profile`}>
                        <FaRegCircleUser fontSize={"1.4rem"} />
                    </Link>
                }
            </div>
        </nav>
    )
}
