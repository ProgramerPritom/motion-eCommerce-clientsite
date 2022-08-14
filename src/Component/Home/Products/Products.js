import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://idbdev.com/motion2/public/api/product-is-here-caught-me')
        .then(res =>res.json())
        .then(data =>{
            // console.log(data);
            setProducts(data.data);
        })
    },[])
    return (
        <div>
            <div className="products-text flex justify-between p-3">
                <h3 className='text-4xl text-yellow-800 font-bold'>New Arrival</h3>
                <button class="btn btn-outline btn-success">See All</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {
                    products.slice(0,6).map(product=><Product key={product.id} product={product}></Product>)
                }
            </div>
           

        </div>
    );
};

export default Products;