import React from 'react';
import LoadingSpinner from '../Sharer/LoadingSpinner';
import About from './About/About';
import Banner from './Banner/Banner';
import Products from './Products/Products';
import Support from './Support/Support';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Support></Support>
            <Products></Products>
            <About></About>
            {/* <LoadingSpinner></LoadingSpinner> */}
        </div>
    );
};

export default Home;