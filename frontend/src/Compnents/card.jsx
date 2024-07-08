import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.css"; // Assuming you have a CSS file for CardSlider styles

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 3,
        slidesToSlide: 3
    },
    mobile: {
        breakpoint: { max: 767, min: 464 },
        items: 2,
        slidesToSlide: 1
    }
};

const sliderImages = [
    {
        url: "c1.avif"
    },
    {
        url: "c2.avif"
    },
    {
        url: "c6.avif"
    },
    {
        url: "c4.jpg"
    },
    {
        url: "c5.jpg"
    }
];

const CardSlider = () => {
    return (
        <>
            <div className="card_heading">
                <h2>Secure & Private</h2>
                <p>24/7 Dedicated Support Team</p>
            </div>
            <Carousel
                responsive={responsive}
                autoPlay={true}
                swipeable={true}
                draggable={true}
                infinite={true}
                partialVisible={false}
                dotListClass="custom-dot-list-style"
                containerClass="carousel-container" // Optional: CSS class for the carousel container
            >
                {sliderImages.map((image, index) => (
                    <div key={index} className="slider">
                        <img src={image.url} alt={`slide-${index}`} />
                    </div>
                ))}
            </Carousel>
        </>
    );
};

export default CardSlider;
