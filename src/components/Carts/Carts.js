import React from 'react';

const Carts = (props) => {
    console.log(props)
    const { name, id, price, seller, img, ratings } = props.product
    return (
        <div>
            <div className="card w-72 h-[500px] bg-base-100 shadow-xl">
                <figure><img className='w-11/12 rounded-md mt-2' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        {/* <div className="badge badge-secondary">NEW</div> */}
                    </h2>
                    <p className='text-left'>Price : ${price}</p>
                    <div className="card-actions">
                        <div className="badge badge-outline">Seller: {seller}</div>
                        <div className="badge badge-outline">Rating: {ratings}</div>

                    </div>
                    <button onClick={() => props.getIdForAddTOCart(id)} className="btn btn-accent">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Carts;