import React from 'react';
import Category from './category/Category';

const Home = (props) => {
    const {count} = props
    return (
        <div>
            <h1>this is home component:{count}
            </h1>
            <Category count={count}/>
        </div>
    );
};

export default Home;