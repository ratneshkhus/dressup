import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LoaderAni from '../../componants/LoaderAni';

export default function Ordershow({ orderdata }) {
    if (!orderdata) {
        return <LoaderAni />;
    }
    const [productshi,setproductshi] = useState([])
    useEffect(()=>{
        orderdata.map((a,key)=>{
            setproductshi(a.products);
        })
    },[])
    
    return (
        <>
        {orderdata && orderdata.map((a,key)=>{
            console.log(a.products);
            a.products.map((b,key)=>{
                console.log(b.cloth);
                <tr key={key}>
                <td>{key + 1}</td>
                <td style={{ width: "65%" }}>
                    <div>{b.cloth.clothname} (x{a.products.quantity})</div>
                </td>
                <td>{new Date(orderdata.createdAt).toLocaleDateString()}</td>
                <td>{a.products.clothprice * a.products.quantity}</td>
                <td>{orderdata.orderstatus}</td>
            </tr>
            })
        })}
            {/* {orderdata.map((product, index) => (
               
            ))} */}
        </>
    );
}
