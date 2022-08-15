import React from 'react';
import Drawer from './Drawer';
import { Link } from 'react-router-dom';

const CartMordal = ({cart}) => {

    

    return (
        <div className="drawer drawer-end">
        <input id="Cart-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
            {/* Open Drawer */}
            {/* <label for="my-drawer-4" className="drawer-button btn btn-primary">Open drawer</label> */}
        </div> 
        <div className="drawer-side">
            <label for="Cart-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 overflow-y-auto w-auto bg-base-100 text-base-content">
            {/* Sidebar */}
            {
                cart.map(getCart=><li><Drawer getCart={getCart}></Drawer></li>)
            }
            {/* <li><a>Sidebar Item 1</a></li>
            <li><a>Sidebar Item 2</a></li> */}
            {
                cart.length === 0 ? " " : 
                <button className="btn btn-outline btn-warning"><Link to='/checkout'>Proccess to Checkout</Link></button>
            }
            </ul>
            
        </div>
        </div>
    );
};

export default CartMordal;