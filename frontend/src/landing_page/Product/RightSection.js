import React from 'react';

function RightSection({
    imageURl,
    productName,
    productDesription,
    tryDemo,
    learnMore,
    googlePlay,
    appstore,

}) {
    return (
        <div className='Container'>
            <div className='row'>
                <div className='col-1'></div>
                <div className='col-5 p-5 mt-5 fs-4' style={{ marginTop: "10%" }}>
                    <h1>{productName}</h1>
                    <p>{productDesription}</p>
                    <div >

                        <a href={learnMore} style={{ marginLeft: "1px", textDecoration: "none" }} className='fs-4'>Learn more <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div >


                </div>

                <div className='col-4 '>
                    <img src={imageURl} />
                </div>
                <div className='col-2'></div>
            </div>
        </div>
    );
}

export default RightSection;