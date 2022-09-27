import React from 'react';

const Summary = () => {
    return (
        <div>
            <div className='text-black text-3xl mt-6 fixed mx-4 border-2 border-sky-500'>
                <div className='px-3'>
                    <h1>Summary Products</h1>
                    <h2>Select Item : { }</h2>
                    <h2>Total Price : ${ }</h2>
                    <h2>Total Tax : ${ }</h2>
                    <h2>Total shpping : ${ }</h2>
                    <h2>Grand Total : ${ }</h2>

                </div>
            </div>
        </div>
    );
};

export default Summary;