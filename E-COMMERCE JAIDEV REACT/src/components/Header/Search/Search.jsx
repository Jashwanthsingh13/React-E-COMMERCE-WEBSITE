import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import "./Search.scss";
import useFetch from "../../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

import prod from "../../../assets/products/watch-prod-3.jpg"

const Search = ({ setShowSearch }) => {
    // const [query, setQuery] = useState("");
    // const navigate = useNavigate();

    // const onChange = (e) => {
    //     setQuery(e.target.value);
    // };

    // let { data } = useFetch(
    //     `/api/products?populate=*&filters[title][$contains]=${query}`
    // );

    // if (!query.length) {
    //     data = null;
    // }

    return (
        <div className="search-modal">
            <div className="form-field">
                <input
                    autoFocus
                    type="text"
                    placeholder="Search for products"
                // value={query}
                // onChange={onChange}
                />
                <MdClose
                    className="close-btn"
                    onClick={() => setShowSearch(false)}
                />
            </div>
            <div className="search-result-content">
                {/* {!data?.data?.length && (
                    <div className="start-msg">
                        Start typing to see products you are looking for.
                    </div>
                )} */}
                <div className="search-results">
                    {/* {data?.data?.map((item) => ( */}
                    <div
                        className="search-result-item"
                    // key={item.id}
                    // onClick={() => {
                    //     navigate("/product/" + item.id);
                    //     setSearchModal(false);
                    // }}
                    >
                        <div className="image-container">
                            <img
                                src={prod}
                            />
                        </div>
                        <div className="prod-details">
                            <span className="name">
                                Product name
                                {/* {item.attributes.title} */}
                            </span>
                            <span className="desc">
                                Product name
                                {/* {item.attributes.description} */}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
