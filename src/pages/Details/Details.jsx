import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import "./details.css"

import { jwtDecode } from "jwt-decode";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdCurrencyRupee } from "react-icons/md";



export default function Details() {
    const { id } = useParams()
    const [userId, setUserId] = useState('');
    const [clothprice, setclothprice] = useState();
    const [selectedSize, setSelectedSize] = useState('');
    console.log(selectedSize);

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
            const response = await axios.get(`https://codsoft-dressupproject.vercel.app/details/${id}`);
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
        axios.post('https://codsoft-dressupproject.vercel.app/addcart', { userId, id, clothprice, selectedSize })
            .then(result => console.log(result.data))
            .catch(err => console.log(err));
    }

    const handleSizeSelect = (size) => {
        setSelectedSize(size);
    };
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
                    <div style={{ marginBottom: "10px" }} className='headerofdetails'>
                        <h2 style={{ marginBottom: "5px" }}>{detaldata.clothname}</h2>

                        <h2 className="itempricecart">
                            <MdCurrencyRupee />
                            <span>{detaldata.clothprice}</span>
                        </h2>

                        <div className='tagsATdetails'>
                            {detaldata.category.map((category, key) => {
                                return <span key={key} className="tags">{category}</span>
                            })}
                        </div>

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
                            return <div key={key} 
                            className={`sizeboxs ${selectedSize === sizes ? 'selectedsize' : ''}`}
                            onClick={() => handleSizeSelect(sizes)}
                            >
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