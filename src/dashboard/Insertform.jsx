import axios from "axios"
import { useState } from "react"
import React from 'react'

export default function Insertform() {
    const [clothname, setclothname] = useState()
    const [imgurl, setimgurl] = useState([''])
    const [clothprice, setclothprice] = useState()
    const [material, setmaterial] = useState()
    const [clothsize, setclothsize] = useState([''])
    const [clothcolor, setclothcolor] = useState()
    const [description, setdescription] = useState() 
    const [clothsStock, setclothsStock] = useState() 
    const [category, setcategory] = useState() 

    const handlesubmit = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:3001/insertproducts', 
            {clothname,imgurl:imgurl.split(','),clothprice,material,clothsize:clothsize.split(','),clothcolor,clothsStock,category:category.split(','),description})
            .then(result => console.log(result.data))
            .catch(err => console.log(err))
    }

    return (
        <section className='formwrapper'>
            <div className="form_container">
                <h2>add product</h2>
                <span style={{ fontSize: "0.9rem", opacity: "0.8" }}>add products here</span>
                <form onSubmit={handlesubmit} className='gridfor_register' style={{ marginTop: "20px" }}>
                    <div className="formcontainer">
                        <div className="forminputareas">
                            <h4>clothname</h4>
                            <input
                                type="text"
                                name="clothname"
                                placeholder='enter clothname'
                                onChange={(e) => setclothname(e.target.value)}
                            />
                        </div>
                        <div className="forminputareas">
                            <h4>image url</h4>
                            <input
                                type="text"
                                name="imgurl"
                                placeholder='enter url.'
                                onChange={(e) => setimgurl(e.target.value)}
                            />
                        </div>
                        <div className="forminputareas">
                            <h4>price</h4>
                            <input
                                type="number"
                                name='clothprice'
                                placeholder='enter price'
                                onChange={(e) => setclothprice(e.target.value)}
                            />
                        </div>
                        <div className="forminputareas" >
                            <h4>clothsize</h4>
                            <input
                                type="text"
                                name='clothsize'
                                placeholder='enter clothsize'
                                onChange={(e) => setclothsize(e.target.value)}
                            />
                        </div>
                        <div className="forminputareas" >
                            <h4>clothcolor</h4>
                            <input
                                type="text"
                                name='clothcolor'
                                placeholder='enter clothcolor'
                                onChange={(e) => setclothcolor(e.target.value)}
                            />
                        </div>
                        <div className="forminputareas" >
                            <h4>material</h4>
                            <input
                                type="text"
                                name='material'
                                placeholder='enter material'
                                onChange={(e) => setmaterial(e.target.value)}
                            />
                        </div>
                        <div className="forminputareas" >
                            <h4>clothsStock</h4>
                            <input
                                type="number"
                                name='clothsStock'
                                placeholder='enter clothsStock'
                                onChange={(e) => setclothsStock(e.target.value)}
                            />
                        </div>
                        <div className="forminputareas" >
                            <h4>category</h4>
                            <input
                                type="text"
                                name='category'
                                placeholder='enter category'
                                onChange={(e) => setcategory(e.target.value)}
                            />
                        </div>
                        <div className="forminputareas row_span_for_2" >
                            <h4>address</h4>
                            <textarea
                                name="address"
                                id="address"
                                placeholder='enter address'
                                onChange={(e) => setdescription(e.target.value)}
                            ></textarea>
                        </div>

                        <div className="forminputareas row_span_for_2">
                            <input type="submit" name='submit' style={{ background: "#9B5FFC", color: "white" }} />
                        </div>

                    </div>

                </form>
            </div>
        </section>
    )
}
