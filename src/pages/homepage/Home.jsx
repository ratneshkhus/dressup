import React, { useState, useEffect } from 'react'
import Hero from '../../componants/herosection/Hero'
import { Link } from 'react-router-dom'
import "./Home.css"
import axios from "axios"
import { FaArrowRight } from "react-icons/fa";
import starsvg from '../../svgs/Star_black.svg';

import c1 from './cloths/casual.png'
import c3 from './cloths/c3.jpg'
import c2 from './cloths/c2.jpg'
import zeno from './cloths/ZENO.jpg'
import user1 from './cloths/user1.jpeg'
import pfp from './cloths/poses-for-pictures.jpg'
import Testimonial from '../../componants/testimonial/Testimonial';
import LoaderAni from '../../componants/LoaderAni'
import Card from '../../componants/cards/Card'



export default function Home() {
  const [main, setMain] = useState({
    imageUrl: zeno,
    price: '$100',
    description: 'Default product description'
  });

  const [images, setImages] = useState([
    {
      imageUrl: c1,
      price: '200',
      description: 'Product 1 description',
      lnk: ''
    },
    {
      imageUrl: c2,
      price: '300',
      description: 'Product 2 description',
      lnk: ''
    },
    {
      imageUrl: c3,
      price: '400',
      description: 'Product 3 description',
      lnk: ''
    }
  ]);

  const swapDetails = (index) => {
    const newMain = images[index];
    const newImages = [...images];
    newImages[index] = main;

    setMain(newMain);
    setImages(newImages);
  };

  const [Products, setProducts] = useState([]);

  useEffect(() => {
    const fetchRandomClothes = async () => {
      try {
        const response = await axios.get('https://codsoft-dressupproject.vercel.app/randomWomenClothes');
        setProducts(response.data);
        // console.log(response.data);
      } catch (err) {
        console.error('Error fetching random women clothes:', err);
      }
    };
    fetchRandomClothes();
  }, []);


  return (
    <>
      <Hero />
      <section className='banner_offer_design'>
        <div className="bg_BIG_imgs" >
          <div className="img_holder_of_bg_big">
            <img src={main.imageUrl} alt="" />
          </div>
          <div className="design_overlay_and_link">

            <div className="design_overlay_and_link_circle">
              <img src={starsvg} alt="star" style={{ width: "25px", height: "25px" }} />
            </div>
            <div className="design_overlay_and_link_circle"></div>
            <div className="design_overlay_and_link_circle"></div>
            <div className="design_overlay_and_link_circle">
              <FaArrowRight fontSize={"1.3rem"} />
            </div>

          </div>
        </div>


        <div className="onclickeditbtns_for_images_and_deatials">
          {images.map((img, index) =>
            <div className="image_choice" key={index} onClick={() => swapDetails(index)}>
              <img src={img.imageUrl} alt="" />
            </div>
          )}

        </div>
        <div className="design_overlay">
          <div>
            <h3>namehere</h3>
            <h4>price</h4>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, harum.</p>
          <div className="people_showing">
            <div className="pcircle pc1">
              <img src={zeno} alt="" />
            </div>
            <div className="pcircle pc2">
              <img src={pfp} alt="" />
            </div>
            <div className="pcircle pc3">
              <img src={user1} alt="" />
            </div>
            <div>
              <span>10+</span> <br />
              <span>happy customers</span>
            </div>
          </div>
        </div>
      </section>

      <section id='cardsection' >
        <h1>Fashion brands</h1>
        <div className="card_container" style={{ width: "100%" }}>
            {Products.map((Product, key) => {
              return <Card product={Product} key={key} />
            })}
        </div>
        <div
          style={{
            width: "100%", height: "80px", display: "flex",
            alignItems: "center", justifyContent: "center", marginTop: "20px"
          }}>
          <Link to={"/browse"}>
            <div className="exploremore_btns_design">

              <button className='explorebtns_home'>Explore more</button>
              <div className="explorebtns_home_arrow_design">
                <div className="explorebtns_home_arrow_design_white">
                  <FaArrowRight />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <Testimonial />
    </>
  )
}