import React from 'react';

function Stats() {
    return (
        <div className='Container p-3'>
            <div className='row p-5'>
                <div className='col-4 p-5'>
                    <h1 className='fs-0 mb-5'>Trust with confidence</h1>
                    <h2 className='fs-3 text-muted'>Customer-first always</h2>
                    <p className='text-muted'>That's why 1.3+ crore customers trust Zerodha with 3.5+ lakh crores worth of equity investments.</p>
                    <h2 className='fs-3  text-muted'>No spam or gimmicks</h2>
                    <p className='text-muted'>No gimmicks, spam , "gamifiction", of annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    <h2 className='fs-3  text-muted'>The Zerodha univese</h2>
                    <p className='text-muted'>Not just an app , but a whole ecosystem .Or investments in 30+ fintech starpups offer you tailored services specific to your needs.</p>
                    <h2 className='fs-3  text-muted'>Do better with money </h2>
                    <p className='text-muted'>With initiatibes like Nudge and kill Weitch , we don't just facilitate transaction, but actely help you do better with your money.</p>
                </div>
                <div className='col-8 p-2'>
                    <img src='/media/images/ecosystem.png' style={{ width: "75%" }} />
                    <div className='text-center p-5 '>
                        <a href='' className='mx-5 p-5 ' style={{ textDecoration: "none" }}>Explore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href='' style={{ textDecoration: "none" }}>try kite <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;