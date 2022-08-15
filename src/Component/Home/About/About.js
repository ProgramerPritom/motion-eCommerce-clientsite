import React from 'react';

const About = () => {
    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
            <img src="https://images.livemint.com/img/2021/09/27/1600x900/AFP_9DD4KZ_1629870213363_1632742003316.jpg" className="max-w-sm rounded-lg shadow-2xl" />
            <div>
            <h1 className="text-5xl font-bold">Motion View</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button id='banner-btn' className="btn btn-primary">See Document</button>
            </div>
        </div>
        </div>
    );
};

export default About;