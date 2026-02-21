//import react from "react";

function Stats() {
    return (
       <div className="container p-5">
        <div className="row p-5">
            <div className="col-6 p-5">
                <h1 className="fs-2 mb-5">Trust With Confidence</h1>
                <h2 className="fs-4 ">Customer-first Always</h2>
                <p className="text-muted">That's what we stand for. We're committed to providing a seamless and secure trading experience for all our customers</p>
                <h2>No Spam or Gimmicks</h2>
                <p className="text-muted">We don't believe in misleading our customers with flashy promises or gimmicks. We're here to help you make informed decisions</p>
                <h2 className="fs-4">The Zerodha Universe</h2>
                <p>Not just an App , But a complete financial ecosystem. Our Investment Platform, Educational Resources, and Community Engagement make us more than just a trading platform. We're your partner in financial growth and success
                </p>
                <h2>Do Better With Money</h2>
                <p className="text-muted">We help you make smarter financial decisions with tools and resources that empower you to build wealth and achieve your goals.</p>
            </div>
            <div className="col-6 p-5">
                <img src="/media/Colab Notebooks/ecosystem.png" alt="ecosystem" style={{width:"88%"}} />
            
            <div className="text-center">
                <a href="/" className="mx-5">Explore Our Products <i class="fa-solid fa-arrow-right"></i></a>
                <a href="/">Try Kite <i class="fa-solid fa-arrow-right"></i></a>
            </div>
            </div>
        </div>
       </div>
    );
}

export default Stats;