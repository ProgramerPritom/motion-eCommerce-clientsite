import React from 'react';
import Banner from './Banner/Banner';
import Products from './Products/Products';
import Support from './Support/Support';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Support></Support>
            <Products></Products>
        </div>
    );
};

export default Home;