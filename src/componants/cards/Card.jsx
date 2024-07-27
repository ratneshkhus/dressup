import React from 'react';
import { Link } from "react-router-dom"
import "./Card.css";
import { BsCurrencyRupee, BsStarFill } from 'react-icons/bs';

export default function Card({ product }) {
    // console.log(product);
    return (
        <>
            <div className="card">
                <Link to={`/details/${product._id}`}>
                    <div className="imgbox">
                        <img src={product.imgurl[0]} alt={product.clothname} />
                    </div>
                    <div className="details">
                        <div>
                            <h3>{product.clothname}</h3>
                        </div>
                        <div>
                            <h3><BsCurrencyRupee fontSize={"1rem"} fontWeight={700} />{product.clothprice}</h3>
                            <span><BsStarFill fontSize={"0.8rem"} /> 4.5</span>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
}
