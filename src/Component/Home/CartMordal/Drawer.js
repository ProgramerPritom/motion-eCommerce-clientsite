import React, { useEffect, useState } from 'react';
import { FaPlus, FaMinus } from "react-icons/fa";
import './Drawer.css';

const Drawer = ({getCart}) => {
    const [value,setValue] = useState(1);
    const {name,stock,image,sale_price} = getCart;
    const productImage = `https://idbdev.com/motion2/public/images/${image}`;
   
    const handlePlusBtn = ()=>{
        if (value >= 1) {
            const newValue = value + 1;
            setValue(newValue);
        }
        
    };
    const handleMinusBtn = ()=>{
        if (value > 1) {
            const newValue = value - 1;
            setValue(newValue);
        }
        
    }


    return (
        <div className='justify-center'>
            <div className="cart-price-quantity">
                <div onClick={handlePlusBtn} className='px-2 mb-4'><FaPlus></FaPlus></div>
                
                <div>
                    <input className='px-2' type="text" name="quantity" value={value} id="input-box" />
                </div>
                <div className='px-2 mt-4' onClick={handleMinusBtn}><FaMinus></FaMinus></div>
            </div>
            <div className="img-area px-3">
                
                <div class="avatar">
                <div class="w-12 rounded">
                    <img src={productImage} alt="product-image" />
                </div>
                </div>
            </div>
            <div className="text-area">
                <h5 className="text-2xl">{name}</h5>
                <p className='font-bold  text-yellow-600'>${sale_price}</p>
            </div>
            
            
        </div>
    );
};

export default Drawer;