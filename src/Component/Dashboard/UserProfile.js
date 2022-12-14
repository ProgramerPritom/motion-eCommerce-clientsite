import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import LoadingSpinner from '../Sharer/LoadingSpinner';

const UserProfile = () => {
    const [user, loading, error] = useAuthState(auth);
    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure><div className="avatar online">
            <div className="w-24 rounded-full">
                <img src={user?.photoURL} />
            </div>
            </div></figure>
        <div className="card-body">
            <h2 className="card-title">Name:{user?.displayName}</h2>
            <p>Phone: {user?.phone}</p>
            <p>Email: {user?.email}</p>
            
        </div>
        </div>
    );
};

export default UserProfile;