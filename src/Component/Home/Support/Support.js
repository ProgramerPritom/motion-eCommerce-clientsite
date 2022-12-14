import React from 'react';
import './Support.css';

const Support = () => {
    return (
        <div className="support-delivery stats stats-vertical lg:stats-horizontal w-full my-4">
  
            <div className="stat">
                <div className="stat-title">Over Selling</div>
                <div className="stat-value">31K</div>
                <div className="stat-desc">Jan 1st - Feb 1st</div>
            </div>
            
            <div className="stat">
                <div className="stat-title">New Users</div>
                <div className="stat-value">4,200</div>
                <div className="stat-desc">↗︎ 400 (22%)</div>
            </div>
            
            <div className="stat">
                <div className="stat-title">New Registers</div>
                <div className="stat-value">1,200</div>
                <div className="stat-desc">↘︎ 90 (14%)</div>
            </div>
            
            </div>
    );
};

export default Support;