import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <div className='Container p-5 mb-5'>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='Hero Image' className='mb-5' />
                <h1 className='mt-5 '>Invest in everything</h1>
                <p className='fs-5'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <Link to="/signup" className='p-3 btn btn-primary fs-5 mb-5' style={{ width: "15%", margin: "1rem auto" }}>Sign up for free</Link>
            </div>

        </div>

    );
}

export default Hero;