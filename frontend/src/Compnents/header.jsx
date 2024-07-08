import React from "react";
import Navbar from "../Header/navbar";
import CardSlider from "./card"; // Adjust import path if needed
import "./style.css";

const Header = () => {
    return (
        <>
            <Navbar />
            <div className="home_cntnr">
                {/* header text */}
                <div className="home_text">
                    <h1>Discover, collect, and sell extraordinary NFTs</h1>
                    <p>Buy, Sell, and Collect NFTs from the world's top artists.</p>
                    <img src="3ddiamond.png" alt="diamond" className="diamond_img" />
                    <div className="header_btn_div">
                        <button className="home_btn">Explore</button>
                        <button className="home_btn">Create</button>
                    </div>
                </div>

                
            </div>
        </>
    );
};

export default Header;
