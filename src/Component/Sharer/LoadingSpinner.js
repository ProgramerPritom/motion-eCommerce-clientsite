import React, { useState } from 'react';
import { BarLoader } from 'react-spinners';

const LoadingSpinner = () => {
    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
        // padding: '10px',
        marginTop : '230px'
      };
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#eb9b30");
    return (
        <div>
            <BarLoader color={color} loading={loading} cssOverride={override} size={20} />
        </div>
    );
};

export default LoadingSpinner;