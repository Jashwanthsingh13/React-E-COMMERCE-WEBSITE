import React from "react";
// import { useNavigate } from "react-router-dom";
import "./Product.scss";

import prod from "../../../assets/products/watch-prod-3.jpg"
const Product = () => {
    // const navigate = useNavigate();
    return (


        <div className="product-card">
            <div className="thumbnail">
                <img src={prod} alt="" />
            </div>
            <div className="prod-details">
                <span className="name">Product name</span>
                <span className="price">&#8377; 499</ span> </div>
        </div>

        // <div
        //     className="product-card"
        //     onClick={() => navigate("/product/" + id)}
        // >
        //     <div className="thumbnail">
        //         <img
        //             src={
        //                 process.env.REACT_APP_STRIPE_APP_DEV_URL +
        //                 data.image.data[0].attributes.url
        //             }
        //         />
        //     </div>
        //     <div className="prod-details">
        //         <span className="name">{data.title}</span>
        //         <span className="price">&#8377;{data.price}</span>
        //     </div>
        // </div>
    );
};

export default Product;
