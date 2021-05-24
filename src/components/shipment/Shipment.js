import React, { useContext } from 'react';
import { Count2 } from '../../App';

const Shipment = () => {
const[ count,setCount] = useContext(Count2)
    return (
        <div>
    <h1>this is shipment{count}</h1>
    <button onClick={() =>{if(count > 0){setCount(count-1)}}}>Decrese</button>
        </div>
    );
};

export default Shipment;