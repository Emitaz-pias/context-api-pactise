import React, { useContext } from 'react';
import { Count2 } from '../../App';

const Header = () => {
    const [count,setCount] =useContext(Count2)
       return (
        <div>
            <h1>this is header :{count}</h1>
            <button onClick={()=>{setCount(count+1)}}>Icrease</button>
        </div>
    );
};

export default Header;