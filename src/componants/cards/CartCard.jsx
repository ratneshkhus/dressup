import React, { useContext, useEffect, useState } from 'react';
import { FaMinus } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { MdCurrencyRupee } from "react-icons/md";
import axios from 'axios';
import { GlobalContext } from '../context/Contex'; // Ensure the path is correct

export default function CartCard({ cartdata, onRemove }) {
    // const { getQuantity, setGetQuantity } = useContext(GlobalContext);
    const [quantity, setQuantity] = useState(cartdata.quantity);
    const maxStock = cartdata.cloth.clothsStock;

    // useEffect(() => {
    //     setGetQuantity(quantity);
    // }, [quantity, setGetQuantity]);

    const increaseQuantity = () => {
        if (quantity < maxStock) {
            setQuantity(quantity + 1);
        }
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const removeProduct = async () => {
        try {
            const token = localStorage.getItem('token');
            await axios.delete('http://localhost:3001/removeProduct', {
                headers: {
                    Authorization: `Bearer ${token}`
                },
                data: {
                    productId: cartdata.cloth._id
                }
            });
            onRemove(cartdata.cloth._id);
        } catch (error) {
            console.error('Error removing product:', error);
        }
    };

    return (
        <>
            <div className="cart_card">
                <div className="imgholde_cart">
                    <img src={cartdata.cloth.imgurl[0]} alt={cartdata.cloth.clothname} />
                </div>
                <div className="details_cartitem">
                    <div>
                        <div className="cartCARD_head">
                            <h2>{cartdata.cloth.clothname}</h2>
                        </div>
                        <h3 className="itempricecart">
                            <MdCurrencyRupee />
                            {cartdata.cloth.clothprice}
                        </h3>
                    </div>
                    <div className="cartCARD_head">
                        <div className="quantity_holder">
                            <div className="quantity_btns cart_greybtn" onClick={decreaseQuantity}>
                                <FaMinus />
                            </div>
                            <span>{quantity}</span>
                            <div className="quantity_btns cart_actionbtn" onClick={increaseQuantity}>
                                <FaPlus color='white' />
                            </div>
                        </div>
                        <FaRegTrashAlt fontSize={"1.3rem"} onClick={removeProduct} />
                    </div>
                </div>
            </div>
        </>
    );
}