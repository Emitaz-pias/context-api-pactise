import React from 'react';

const CategoryDetails = (props) => {
    const {count} = props
    return (
        <div>
            <h3>this is CategoryDetails:{count}</h3>
        </div>
    );
};

export default CategoryDetails;