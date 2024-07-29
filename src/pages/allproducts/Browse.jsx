import React, { useState, useEffect } from 'react'
import "./Browse.css"
import axios from "axios"
import { BsSliders } from "react-icons/bs";
import LoaderAni from '../../componants/LoaderAni'
import Card from '../../componants/cards/Card'
import { useParams } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom';

export default function Browse() {
    const [filteropen, setfilteropen] = useState(false);
    const [selectedTags, setSelectedTags] = useState([]);
    const [products, setProducts] = useState([]);
    const [filteredproducts, setfilteredproducts] = useState([]);
    const [catproducts, setcatproducts] = useState([]);

    const [maxprice, setmaxprice] = useState();
    const { cat } = useParams()
    
    const { query } = useParams();

    useEffect(() => {
        const fetchSearchResults = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/search`, {
                    params: { query }
                });
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching search results:', error);
            }
        };

        fetchSearchResults();
    }, [query]);
    const tags = [
        "jeans", "tshirt", "shirt", "night-outfit", "suits", "shorts", "men", "women", "kids"
    ];

    useEffect(() => {
        if (cat) {
            fetchProducts();
            // fetchProducts();
        } else {
            getcloth();
        }
    }, [selectedTags]);

    const toggleTag = (tag) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter(t => t !== tag));
        } else {
            setSelectedTags([...selectedTags, tag]);
        }
    };

    const fetchProducts = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/browse/${cat}`);
            setcatproducts(response.data);
            // console.log(catproducts);
        } catch (err) {
            console.error('Failed to fetch products:', err);
        }
    };

    const getcloth = async () => {
        try {
            const response = await axios.get('http://localhost:3001/fetchcolths');
            setProducts(response.data);
            // console.log(response.data);

        } catch (err) {
            console.error('Failed to fetch products:', err);
        }
    };

    const handlepricefilter = (event) => {
        const { value } = event.target;
        setmaxprice(value);
    }
    const applyPriceFilter = () => {
        const sourceProducts = catproducts.length > 0 ? catproducts : products;

        const priceFiltered = sourceProducts.filter(product => product.clothprice <= maxprice);

        const tagFiltered = selectedTags.length > 0
            ? priceFiltered.filter(product => selectedTags.some(tag => product.category.includes(tag)))
            : priceFiltered;

        setfilteredproducts(tagFiltered);
    };
    const handleExploreAllClick = (e) => {
        e.preventDefault();
        window.location.href = '/browse';
    };
    return (
        <>
            <div className="wrapper">
                <div className="mainheading_of_mainpage">
                    <h2>famous item</h2>
                    <BsSliders fontSize={"1.4rem"}
                        onClick={
                            () => setfilteropen(!filteropen)
                        }
                    />
                </div>
                <div className="wrapper_testing_for_filter_and_grid">
                    <div className={filteropen ? "filtersectionhere" : "categories"}>
                        <div className="categoriesshow">
                            {tags.map((tag, key) => {
                                return <>
                                    <div key={key}
                                        className={selectedTags.includes(tag) ? "selected" : "tags"}
                                        data-value={tag}
                                        onClick={() => toggleTag(tag)}
                                    >
                                        {tag}
                                    </div>
                                </>
                            })}
                        </div>
                        <div className="pricefilter-block">

                            <input type="range"
                                className='sliderprice'
                                min={0}
                                max={5000}
                                onChange={handlepricefilter} />
                            0 - {maxprice}
                        </div>
                        <button onClick={applyPriceFilter} className='btn'>filter</button>
                    </div>

                    <div className="card_container" style={filteropen ? { width: "80vw", gridTemplateColumns: "repeat(3,1fr)" } : { width: "100vw", gridTemplateColumns: "repeat(4,1fr)" }}>
                        {filteredproducts.length > 0 ?
                            filteredproducts.map((product, index) => (
                                <Card key={index} product={product} />
                            )) : products ?
                                products.map((product, index) => (
                                    <Card key={index} product={product} />
                                )) : <LoaderAni />}

                        {catproducts.map((product, index) => (
                            <>
                                <Card key={index} product={product} />
                            </>
                        ))}
                    </div>
                </div>
                {cat &&
                    <Link to={`/browse`} onClick={handleExploreAllClick}>
                        <div className="exploremore_btns_design" style={{ marginTop: "35px" }}>
                            <button className='explorebtns_home'>Explore all</button>
                            <div className="explorebtns_home_arrow_design">
                                <div className="explorebtns_home_arrow_design_white">
                                    <FaArrowRight />
                                </div>
                            </div>
                        </div>
                    </Link>
                }
            </div>
        </>
    )
}