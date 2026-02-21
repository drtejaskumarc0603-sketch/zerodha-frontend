//import react from "react";
import Hero from "./hero";
import Awards from "./awards";
import Education from "./education";
import Stats from "./stats";
import Pricing from "./pricing";
import OpenAccount from "../../openaccount";


function Homepage() {
    return (
       <>
            
            <Hero />
            <Awards />
            <Stats />
            <Pricing />
            <Education />
            <OpenAccount />
            
       </>
    );
}

export default Homepage;