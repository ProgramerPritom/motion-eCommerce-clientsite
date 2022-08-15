import React, { useEffect, useState } from 'react';
import { FaPlus, FaMinus } from "react-icons/fa";
import './Drawer.css';

const Drawer = ({getCart}) => {
    const [value,setValue] = useState(1);
    const [price,setPrice] = useState(0);
    const {name,stock,image,sale_price} = getCart;
    const productImage = `https://idbdev.com/motion2/public/images/${image}`;
    // setPrice(sale_price);
    useEffect(()=>{
         let newPrice = sale_price;
         
        setPrice(newPrice);
    },[sale_price]);
    
    const handlePlusBtn = (sale_price)=>{

        
        
        if (value >= 1) {
            const newPrice = parseInt(price) + parseInt(sale_price);
            setPrice(newPrice);
            setValue( value + 1);
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
                <div onClick={()=>handlePlusBtn(sale_price)} className='px-2 mb-4'><FaPlus></FaPlus></div>
                
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
                <p className='font-bold  text-yellow-600'>
                    ${
                        value < 2 ? sale_price : price
                    }
                    </p>
            </div>
            <div className='w-12'>
            <button class="btn btn-circle btn-outline">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            </div>
            
            
        </div>
    );
};

export default Drawer;