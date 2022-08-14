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
          <div class="banner-1 hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                
                <div>
                <h1 class="text-5xl font-bold text-white">Box Office News!</h1>
                <p class="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
            </div>
          </div>



          <div>
          <div class="banner-2 hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                
                <div>
                <h1 class="text-5xl font-bold text-white">Box Office News!</h1>
                <p class="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
            </div>
          </div>



          <div>
          <div class="banner-3 hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div>
                <h1 class="text-5xl font-bold text-white">Box Office News!</h1>
                <p class="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
            </div>
          </div>
        </Slider>
      </div>
        
    );
};

export default Banner;