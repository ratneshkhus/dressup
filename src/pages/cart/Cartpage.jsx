import React, { useEffect, useState } from 'react';
import CartCard from '../../componants/cards/CartCard';
import { MdCurrencyRupee } from "react-icons/md";
import "./cart.css";
import axios from 'axios';

export default function Cart() {
    const [cartitems, setcartitems] = useState([]);
    const [totalamout, settotalamount] = useState();

    useEffect(() => {
        const loadOrderdata = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:3001/orderdataTable', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setcartitems(response.data);
                settotalamount(response.data.Totalprice + 150)
                console.log(response.data);
            } catch (err) {
                console.error('Error fetching user information:', err);
            }
        };
        loadOrderdata();
    }, []);

    const handleRemove = (productId) => {
        setcartitems((prevItems) => {
            if (!prevItems || !prevItems.products) {
                return prevItems; // Return the previous state if there are no items
            }

            return {
                ...prevItems,
                products: prevItems.products.filter(product => 
                    {
                        product.cloth._id !== productId;
                        settotalamount(totalamout - product.cloth.clothprice);
                    }
                )
            };
        });
    };

    // console.log(cartitems);

    return (
        <>
            <div className="cartWarpper">
                <div className="cart_card_scroller">
                    {cartitems.products && cartitems.products.map((product, key) => (
                        <CartCard key={key} cartdata={product} onRemove={handleRemove} />
                    ))}
                </div>

                <div className="bill">
                    <h2 style={{ marginBottom: "20px" }}>items</h2>
                    {cartitems.products && cartitems.products.map((product, key) => (
                        <div className="item_and_the_price_cart">
                            <h4>{product.cloth.clothname} x {product.quantity}</h4>
                            <h4 className="itempricecart">
                                <MdCurrencyRupee />
                                {product.cloth.clothprice * product.quantity}
                            </h4>
                        </div>
                    ))}

                    <hr style={{ marginBottom: "15px", marginTop: "15px" }} />

                    <div className="item_and_the_price_cart">
                        <h4>Delivery charge</h4>
                        <h4 className="itempricecart">
                            <MdCurrencyRupee />
                            150
                        </h4>
                    </div>
                    <div className="item_and_the_price_cart">
                        <h4>Total amount</h4>
                        <h4 className="itempricecart">
                            <MdCurrencyRupee />
                            {totalamout}
                        </h4>
                    </div>

                    <div className="billbtnscart billbtn1" style={{ marginTop: "30px" }}>check out</div>
                </div>
            </div>
        </>
    );
}
