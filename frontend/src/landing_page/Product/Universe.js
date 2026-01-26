import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';

function Universe() {
    return (
        <>
            <Hero />
            <LeftSection
                imageURl="/media/images/kite.png"
                productName="Kite"
                productDesription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
                tryDemo=""
                learnMore=""
                googlePlay=""
                appstore=""

            />
            <RightSection
                imageURl="/media/images/console.png"
                productName="console"
                productDesription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."

                learnMore=""

            />

            <LeftSection
                imageURl="/media/images/coin.png"
                productName="coin"
                productDesription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
                tryDemo=""
                learnMore=""
                googlePlay=""
                appstore=""

            />
            <RightSection
                imageURl="/media/images/kiteconnect.png"
                productName="Kite connect API"
                productDesription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
                learnMore=""


            />
            <LeftSection
                imageURl="/media/images/varsity.png"
                productName="varsity mobile"
                productDesription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
                tryDemo=""
                learnMore=""
                googlePlay=""
                appstore=""

            />

        </>
    );
}

export default Universe;