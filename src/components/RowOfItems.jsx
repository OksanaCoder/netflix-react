import React, { Component } from 'react';
import { render } from '@testing-library/react';
import Item from "./Item";

const RowOfItems = ({movies}) => {
        return(
            <div className='row'>
            { movies.map((movie) => (
                <Item data={movie}/>

            ))}
            </div>
        )
    
}
export default RowOfItems;