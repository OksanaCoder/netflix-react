import React, { Component } from 'react';
import { render } from '@testing-library/react';


class Cart extends Component {
    render () {

        return(
            <>
            <div className='container'>
            <h5 className='text-left text-white mt-3'>Your cart</h5>
            </div>
            </>
        )

    }
        
    
}
export default Cart;