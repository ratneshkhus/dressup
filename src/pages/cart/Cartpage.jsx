import React, { useEffect, useState } from 'react';
import CartCard from '../../componants/cards/CartCard';
import { MdCurrencyRupee } from "react-icons/md";
import {load} from '@cashfreepayments/cashfree-js'
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
                products: prevItems.products.filter(product => {
                    product.cloth._id !== productId;
                    settotalamount(totalamout - product.cloth.clothprice);
                }
                )
            };
        });
    };

    const handleQuantityChange = (productId, newQuantity) => {
        setcartitems((prevItems) => {
            const updatedProducts = prevItems.products.map(product =>
                product.cloth._id === productId ? { ...product, quantity: newQuantity } : product
            );

            const newTotal = updatedProducts.reduce((sum, product) => {
                return sum + (product.cloth.clothprice * product.quantity);
            }, 150); // Adding delivery charge

            settotalamount(newTotal);

            return {
                ...prevItems,
                products: updatedProducts
            };
        });
    };
    
    let cashfree;

  let insitialzeSDK = async function () {

    cashfree = await load({
      mode: "sandbox",
    })
  }

  insitialzeSDK()

  const [orderId, setOrderId] = useState("")



  const getSessionId = async () => {
    try {
      const res = await axios.post("http://localhost:3001/currentorder")
      console.log(res);
      if (res) {
        window.open(res.data.paymentLink,'_blank')
      }

    } catch (error) {
      console.log(error)
    }
  }

  const handleClick = async (e) => {
    e.preventDefault()
    try {

      let sessionId = await getSessionId()
      let checkoutOptions = {
        paymentSessionId : sessionId,
        redirectTarget:"_modal",
      }

      cashfree.checkout(checkoutOptions).then((res) => {
        console.log("payment initialized")

      })


    } catch (error) {
      console.log(error)
    }

  } 
    return (
        <>
            <div className="cartWarpper">
                <div className="cart_card_scroller">
                    {cartitems.products && cartitems.products.map((product, key) => (
                        <CartCard key={key}
                            cartdata={product}
                            onRemove={handleRemove}
                            onQuantityChange={handleQuantityChange} />
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

                    <div 
                    className="billbtnscart billbtn1" 
                    style={{ marginTop: "30px" }}
                    
                    onClick={handleClick}>check out</div>
                </div>
            </div>
        </>
    );
}
