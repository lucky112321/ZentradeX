import React from 'react';

function Hero() {
    return (
        <section className='Container-fluid' id='supportHero'>
            <div className=' p-5 ' id='supportWrapper'>
                <h4>Support Portal</h4>
                <a href=''>Track Ticket</a>
            </div>
            <div className='row p-5  m-5' >
                <div className='col-6 p-5 ' >
                    <h1>Search for an answer or browse help topics to create a ticket</h1>
                    <input placeholder='Eg. how do I activat F&O, Why is my order getting rejected' /><br />
                    <a href='' >Track Accout Opingin</a>
                    <a href=''>Track sagement ACtivation</a>
                    <a href='' >Intraday margins</a>
                    <a href='' >Kite user manual</a>
                </div>
                <div className='col-6 p-5 ' >
                    <h1>Featured</h1><br />
                    <ol>
                        <li> <a href='' >Currnet Takeovers and Dellisting-January</a></li>

                        <li><a href=''>Latest Intraday Ieverages -MIS & CO</a></li>
                    </ol>



                </div>


            </div>
        </section >
    );
}


export default Hero;