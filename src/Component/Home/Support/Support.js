import React from 'react';
import './Support.css';

const Support = () => {
    return (
        <div class="support-delivery stats stats-vertical lg:stats-horizontal w-full my-4">
  
            <div class="stat">
                <div class="stat-title">Downloads</div>
                <div class="stat-value">31K</div>
                <div class="stat-desc">Jan 1st - Feb 1st</div>
            </div>
            
            <div class="stat">
                <div class="stat-title">New Users</div>
                <div class="stat-value">4,200</div>
                <div class="stat-desc">↗︎ 400 (22%)</div>
            </div>
            
            <div class="stat">
                <div class="stat-title">New Registers</div>
                <div class="stat-value">1,200</div>
                <div class="stat-desc">↘︎ 90 (14%)</div>
            </div>
            
            </div>
    );
};

export default Support;