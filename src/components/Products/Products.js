import React from 'react';
import Product from '../Product/Product';
import Summary from '../Summary/Summary';

const Products = () => {

    const getIdForAddTOCart = (id) => {
        console.log(id)
    }
    return (
        <div className='grid grid-cols-4 gap-4'>
            <div className='col-span-3 bg-slate-500'>
                <Product
                    getIdForAddTOCart={getIdForAddTOCart}
                ></Product>
            </div>
            <div className='bg-red-100'>
                <Summary></Summary>
            </div>
        </div>
    );
};

export default Products;