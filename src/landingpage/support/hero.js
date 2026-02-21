//import react from "react";

function Hero() {
    return (
       <section className="container-fluid" id="supportHero">
            <div className=" p-5 mb-5 mt-5" id="supportWrapper">
                <h4>
                    Support Portal
                </h4>
            <a href="/">Track Tickets</a>
            </div>
            <div className="row p-5 mb-5 mt-5" >
                <div className="col-6 p-5 " >  
                    <h1 className="fs-3">Search for the Answer or browse help Topics</h1>
                    <input placeholder="Eg. how do i activate F&O"/><br/>
                    <a href="/"Track account Opening></a>
                    <a href="/"Track Segement Activation></a>
                    <a href="/"Intraday Margins></a>
                      </div>
                <div className="col-6 p-5 " >  
                    <h2>Featured</h2>
                    <ol>
                    <li><a href="/"Current Takeovers></a></li>
                    <li><a href="/"Latest Intraday Leverages></a></li>
                    </ol>
                      </div>
                
            </div>
   </section>
   
    );
}

export default Hero;