import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import LoadingSpinner from '../../Sharer/LoadingSpinner';

const SignUp = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user1,
        loading1,
        error1,
      ] = useCreateUserWithEmailAndPassword(auth);
      const navigate = useNavigate();
      const location = useLocation();
    const { register, formState: { errors }, handleSubmit } = useForm();
    let from = location.state?.from?.pathname || "/";

      if (user || user1) {
        navigate(from, { replace: true })
      }

      if (loading || loading1) {
        return <LoadingSpinner></LoadingSpinner>
      }
      let signInError;
      if (error || error1 ||errors) {
        signInError = <p className='text-red-500 py-4 text-center'> {error?.message || error1?.message || errors?.message}</p>
      }


    const onSubmit = (data) => {
        createUserWithEmailAndPassword(data.email,data.password);
        toast.success('Successfully Login');
        console.log(data);
    };

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse mx-4">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">SignUp Now</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    
                <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>

                <input type="text" placeholder="Enter Your Name" className="input input-bordered" {...register("name", { required: true })} />
                </div>

                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>

                <input type="text" placeholder="Enter your Email" className="input input-bordered" {...register("email", { required: true })} />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Phone</span>
                </label>

                <input type="text" placeholder="Enter your Phone" className="input input-bordered" {...register("phone", { required: true })} />
                </div>

                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="Type Password" className="input input-bordered" {...register("password", { required: true })} />
                <label className="label">
                    <Link to='' className="label-text-alt link link-hover">Forgot password?</Link>
                </label>
                <p>New on Motion view? <span className='text-yellow-700 font-semibold underline cursor-pointer'><Link to='/signup'>Create an account</Link></span></p>
                </div>
                <div className="form-control mt-6">
                <input className='btn btn-primary' type="submit" />
                </div>
                </form>

                <div className="divider">OR</div>
                <button className='btn btn-accen' onClick={()=>signInWithGoogle()}>Continue with GOOGLE</button>
                {
                    signInError
                }
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default SignUp;