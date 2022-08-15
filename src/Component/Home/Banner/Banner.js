import React from 'react';
import Slider from "react-slick";
import './Banner.css';

const Banner = () => {
    var settings = {
        // dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7000,
        useCSS:true,
      };
    return (
        
        <div>
        
        <Slider {...settings}>
          <div>
          <div className="banner-1 hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                
                <div>
                <h1 id='banner1-text' className="text-5xl font-bold text-white">Exclusive Offer</h1>
                <p id='banner2-text' className="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button id='banner-btn' className="btn btn-primary">Shop Now</button>
                </div>
            </div>
            </div>
          </div>



          <div>
          <div className="banner-2 hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                
                <div>
                <h1 id='banner1-text' className="text-5xl font-bold text-white">Visit Out Latest Collection</h1>
                <p id='banner2-text' className="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button id='banner-btn' className="btn btn-primary">Shop Now</button>
                </div>
            </div>
            </div>
          </div>



          <div>
          <div className="banner-3 hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div>
                <h1 id='banner1-text' className="text-5xl font-bold text-white">Find you Happiness</h1>
                <p id='banner2-text' className="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button id='banner-btn' className="btn btn-primary">Shop Now</button>
                </div>
            </div>
            </div>
          </div>
        </Slider>
      </div>
        
    );
};

export default Banner;