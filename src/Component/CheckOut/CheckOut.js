import React from 'react';
import { useForm } from "react-hook-form";
import {  useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const CheckOut = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const onSubmit = (data) => {
        navigate('/home');
        toast.success('Successfully Confirm Your Order');
        console.log(data);
    };
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                <div>
                    <h2 className="text-center font-semibold text-2xl">
                        Select Your Payment Method
                    </h2>
                    <select className="select w-full max-w-xs">
                    <option disabled selected>Select your Payment</option>
                    <option>Cash On Delivery</option>
                    <option>Bkash</option>
                    <option>Nogot</option>
                    <option>Visa</option>
                    </select>
                </div>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                <h2 className="text-3xl text-center my-3 font-bold">Information</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
                    <label className="label">
                    <span className="label-text">Full Name</span>
                    </label>
                    <input type="text" placeholder="Enter Name" className="input input-bordered" {...register("name", { required: true })}/>
                    </div>
                    <div className="form-control">
                    <label className="label">
                    <span className="label-text">Phone</span>
                    </label>
                    <input type="text" placeholder="Enter Phone" className="input input-bordered" {...register("phone", { required: true })}/>
                    </div>
                    <div className="form-control">
                    <label className="label">
                    <span className="label-text">Address</span>
                    </label>
                    <input type="text" placeholder="House / Road" className="input input-bordered" {...register("address", { required: true })}/>
                    </div>
                    <div className="form-control">
                    <select className="select w-full max-w-xs">
                    <option disabled selected>Pick your Divition</option>
                    <option>Dhaka</option>
                    <option>Rangpur</option>
                    <option>Chattogram</option>
                    <option>Khulna</option>
                    <option>Sylhet</option>
                    </select>
                    </div>
                    <div className="form-control mt-6">
                        
                    <button className="btn btn-primary">Confirm Order</button>
                    </div>
                    </form>
                </div>
                </div>
            </div>
            </div>
    );
};

export default CheckOut;