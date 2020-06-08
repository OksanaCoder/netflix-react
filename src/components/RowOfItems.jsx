import React, { Component } from 'react';
import { render } from '@testing-library/react';
import Item from "./Item";

const RowOfItems = ({movies, title}) => {
        return(
            <>
            <h5 className='text-left text-muted mt-2'>{title}</h5>
            <div className='row'>
            { movies.map((movie) => (
                <Item data={movie}
                      key={movie.imdbID}
                      
                />
            ))}
            </div>
            </>
        )
    
}
export default RowOfItems;