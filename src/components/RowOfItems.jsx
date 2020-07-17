import React, { Component } from 'react';
import { render } from '@testing-library/react';
import Item from "./Item";

const RowOfItems = ({goods, title}) => {
        return(
            <>
            <h5 className='text-left text-muted mt-2'>{title}</h5>
            <div className='row'>
            { goods.map((item) => (
                <Item data={item}
                      key={item._id}
                      
                />
            ))}
            </div>
            </>
        )
    
}
export default RowOfItems;