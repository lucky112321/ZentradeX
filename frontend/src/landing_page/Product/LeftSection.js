import React from 'react';



function LeftSection({
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
                <div className='col-2'></div>
                <div className='col-4 p-5 mb-5 '>
                    <img src={imageURl} />
                </div>
                <div className='col-6 p-5 mt-5'>
                    <h1>{productName}</h1>
                    <p>{productDesription}</p>
                    <div >
                        <a href={tryDemo}>try Demo</a>
                        <a href={learnMore} style={{ marginLeft: "120px" }}>learn more</a>
                    </div >
                    <div className='mt-3'>
                        <a href={googlePlay}><img src='/media/images/googlePlayBadge.svg' /></a>
                        <a href={appstore} style={{ marginLeft: "50px" }}><img src='/media/images/appstoreBadge.svg' /></a>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default LeftSection;