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
    
  const getSessionId = async () => {
    try {
      let res = await axios.get("http://localhost:3001/payment")
      
      if(res.data && res.data.payment_session_id){

        console.log(res.data)
        setOrderId(res.data.order_id)
        return res.data.payment_session_id
      }


    } catch (error) {
      console.log(error)
    }
  }
    const verifyPayment = async () => {
        try {
          
          let res = await axios.post("http://localhost:3001/verify", {
            orderId: orderId
          })
    
          if(res && res.data){
            alert("payment verified")
          }
    
        } catch (error) {
          console.log(error)
        }
      }

    const handlecasefree = async (e) =>{
        e.preventDefault()
        try {
    
          let sessionId = await getSessionId()
          let checkoutOptions = {
            paymentSessionId : sessionId,
            redirectTarget:"_modal",
          }
    
          cashfree.checkout(checkoutOptions).then((res) => {
            console.log("payment initialized")
    
            verifyPayment(orderId)
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
                    
                    onClick={handlecasefree}>check out</div>
                </div>
            </div>
        </>
    );
}
