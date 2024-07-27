import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import "./details.css"

import { jwtDecode } from "jwt-decode";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Details() {
    const { id } = useParams()
    const [userId, setUserId] = useState('');
    const [clothprice, setclothprice] = useState();

    console.log(userId);

    const [detaldata, setdetaldata] = useState({
        clothname: '',
        imgurl: [],
        clothprice: 0,
        material: '',
        clothsize: [],
        clothcolor: '',
        clothsStock: 0,
        category: [],
        description: ''
    });

    useEffect(() => {
        selectedcloth();

        const token = localStorage.getItem('token');
        // console.log(token);
        const decodedToken = jwtDecode(token);
        // console.log(decodedToken);

        setUserId(decodedToken.userid);

        console.log(userId);
    }, [id])
    // console.log(detaldata);



    const selectedcloth = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/details/${id}`);
            setdetaldata(response.data);
            setclothprice(response.data.clothprice);
        } catch (e) {
            console.log("error from front end Details page ==== : " + e);
        }
    }
    // console.log(clothprice);
    const handlecart = (e) => {
        e.preventDefault()

        toast.success('Item added to Cart!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

        // console.log("clicked" + userId);
        axios.post('http://localhost:3001/addcart', { userId,id,clothprice })
            .then(result => console.log(result.data))
            .catch(err => console.log(err));
    }
    return (
        <>
            <div className="main_wrapper_for_details_page">

                <div className="otherimg">

                    {detaldata.imgurl.map((images, key) => (
                        <div key={key} className={`imgbox_for_details box${key + 1}`}>
                            <img src={images} alt={detaldata.clothname + " " + key} />
                        </div>
                    ))}

                </div>
                <div className="full_details">
                    <div style={{ marginBottom: "10px" }}>
                        <h2 style={{ marginBottom: "5px" }}>{detaldata.clothname}</h2>
                        {detaldata.category.map((category, key) => {
                            return <div key={key} style={{ display: "flex", flexDirection: "row" }}>

                                <span className="tags">{category}</span>
                            </div>
                        })}
                        <span>{detaldata.clothprice}</span>

                    </div >
                    <div className="colorbox_allcol">
                        <div><h3>colors</h3></div>
                        <span>{detaldata.clothcolor}</span>
                    </div>
                    <div>
                        <h4>Description</h4>
                        <p>{detaldata.description}</p>
                    </div>
                    <h4>Size available</h4>
                    <div className="all_sizeholder">

                        {detaldata.clothsize.map((sizes, key) => {
                            return <div key={key} className="sizeboxs">
                                <span>{sizes}</span>
                            </div>
                        })}

                    </div>

                    <div style={{ marginTop: "20px" }}>
                    <ToastContainer />
                        <span className='addtocartbtn' onClick={handlecart}>Add to cart</span>
                    </div>
                </div>

            </div>

        </>
    );
}