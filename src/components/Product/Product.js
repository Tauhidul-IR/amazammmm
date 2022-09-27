import React, { useEffect, useState } from 'react';
import Carts from '../Carts/Carts';

const Product = (props) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <div className='grid grid-cols-3 mt-3 gap-4'>
                {

                    products.map(product => <Carts
                        product={product}
                        key={product.id}
                        getIdForAddTOCart={props.getIdForAddTOCart}
                    ></Carts>)
                }
            </div>
        </div>
    );
};

export default Product;