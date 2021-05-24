import React from 'react';
import CategoryDetails from './categoryDetails/CategoryDetails';

const Category = (props) => {
    const {count} = props
    return (
        <div>
            <h2>this is category</h2>
            <CategoryDetails count={count}/>
        </div>
    );
};

export default Category;