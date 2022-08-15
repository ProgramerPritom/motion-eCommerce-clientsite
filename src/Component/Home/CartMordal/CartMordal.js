import React from 'react';
import Drawer from './Drawer';
import { Link } from 'react-router-dom';

const CartMordal = ({cart}) => {

    

    return (
        <div class="drawer drawer-end">
        <input id="Cart-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
            {/* Open Drawer */}
            {/* <label for="my-drawer-4" class="drawer-button btn btn-primary">Open drawer</label> */}
        </div> 
        <div class="drawer-side">
            <label for="Cart-drawer" class="drawer-overlay"></label>
            <ul class="menu p-4 overflow-y-auto w-auto bg-base-100 text-base-content">
            {/* Sidebar */}
            {
                cart.map(getCart=><li><Drawer getCart={getCart} ></Drawer></li>)
            }
            {/* <li><a>Sidebar Item 1</a></li>
            <li><a>Sidebar Item 2</a></li> */}
            {
                cart.length === 0 ? " " : 
                <button class="btn btn-outline btn-warning"><Link to='/checkout'>Proccess to Checkout</Link></button>
            }
            </ul>
            
        </div>
        </div>
    );
};

export default CartMordal;