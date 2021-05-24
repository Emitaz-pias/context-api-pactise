import React, { useContext } from 'react';
import { Count2 } from '../../App';

const Shipment = () => {
    const count = useContext(Count2)
    return (
        <div>
    <h1>this is shipment{count}</h1>
        </div>
    );
};

export default Shipment;