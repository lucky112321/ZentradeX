import React from 'react';

function Team() {
    return (
        <div className='Container border-top'>
            <div className='row p-5 mt-5 mb-5'>
                <h1 className=' text-center '>
                    People
                </h1>
            </div>
            <div className='row p-5 mt-4 text-muted' style={{ lineHeight: "1.8" }}>
                <div className='col-2'></div>
                <div className='col-4 fs-4'>
                    <img src='/media/images/nithinKamath.jpg' style={{ borderRadius: "50%", width: "70%", marginLeft: "15%" }} />
                    <p className='fs-2 text-center mt-4'  >Nithin Kamath</p>
                    <p className='fs-5 text-center mt-3'>founder CEO</p>
                </div>
                <div className='col-4 fs-5' >
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>


                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

                    <p>Playing basketball is his zen.</p>

                    <p>Connect on<a href='' style={{ textDecoration: "none" }}>Homepage</a> /<a href='' style={{ textDecoration: "none" }}>TradingQnA</a> /<a href='' style={{ textDecoration: "none" }} >Twitter</a></p>
                </div>
            </div>
        </div>

    );
}

export default Team;