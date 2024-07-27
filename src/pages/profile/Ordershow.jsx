import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LoaderAni from '../../componants/LoaderAni';

export default function Ordershow() {
    const [orderdata, setOrderdata] = useState(null);

    useEffect(() => {
        const loadOrderdata = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:3001/orderdataTable', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setOrderdata(response.data);
                console.log(response.data);
            } catch (err) {
                console.error('Error fetching user information:', err);
            }
        };
        loadOrderdata();
    }, []);

    if (!orderdata) {
        return <LoaderAni />;
    }

    return (
        <>
            <div className="holder_Table">
                <h3>Order History</h3>
                <table>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Order</th>
                            <th>Date</th>
                            <th>Total Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderdata.products.map((product, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td style={{ width: "65%" }}>
                                    <div>{product.cloth.clothname} (x{product.quantity})</div>
                                </td>
                                <td>{new Date(orderdata.createdAt).toLocaleDateString()}</td>
                                <td>{product.cloth.clothprice * product.quantity}</td>
                                <td>{orderdata.orderstatus}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
