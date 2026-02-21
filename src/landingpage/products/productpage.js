//import React from "react";
//import Navbar from "../../components/navbar/navbar";
import Hero from "./hero";
import Leftsection from "./leftsection";
import RightSection from "./rightsection";
import Universe from "./universe";
//import Footer from "../../components/footer/footer";

function Productpage() {
    return (
        <>

            <Hero />
            <Leftsection imageURL="/media/Colab Notebooks/kite.png"
                productName="Kite"
                productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
                tryDemo=""
                learnMore=""
                googlePlay=""
                appStore=""
            />
            <RightSection 
            imageURL = "/media/Colab Notebooks/console.png"
             productName="Console"
              productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
               learnMore=""
                />
            <Leftsection imageURL="/media/Colab Notebooks/coin.png"
                productName="Coin"
                productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
                tryDemo=""
                learnMore=""
                googlePlay=""
                appStore=""
            />
            <RightSection
            imageURL = "/media/Colab Notebooks/kiteconnect.png"
             productName="Kite Connect API"
              productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
               learnMore=""
                />
            <Leftsection imageURL="/media/Colab Notebooks/varsity.png"
                productName="Varsity Mobile"
                productDescription="BAn easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
                
                googlePlay=""
                appStore=""
            />
            <p className="text-center">Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>

            <Universe />

        </>
    );
}

export default Productpage;