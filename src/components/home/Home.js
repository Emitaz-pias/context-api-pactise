import React from 'react';

const Home = (props) => {
    const {count} = props
    return (
        <div>
            <h1>this is home component:{count}
            </h1>
        </div>
    );
};

export default Home;