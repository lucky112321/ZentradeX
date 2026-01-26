import React from 'react';

function pricing() {
    return (
        <div className='Container'>
            <div className='row'>
                <div className='col-3 ' style={{ marginLeft: "100px" }}>
                    <h1 className='mb-3'>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges. </p>
                    <a href='' style={{ textDecoration: "none" }}>See pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>

                </div>
                <div className='col-2'></div>
                <div className='col-5 mb-5'>
                    <div className='row text-center' >
                        <div className='col p-5 border'>
                            <h1 className='mb-4'>₹0</h1>
                            <p>Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className='col p-4 border'>
                            <h1 className='mb-5'>₹20</h1>
                            <p>Intraday and F&O</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default pricing;