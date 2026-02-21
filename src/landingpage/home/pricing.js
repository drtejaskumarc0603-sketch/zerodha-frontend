//import react from "react";

function Pricing() {
    return (
         <div className="container">
            <div className="row">
                <div className="col-4">
                    <h1 className="fs-2 mb-3">Unbeatable Pricing</h1>
                    <p className="text-muted">We pioneered the concept of zero-cost trading in India, and we're committed to keeping it that way. No hidden charges, no surprises.</p>
                    <a href="/">See Pricing <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className="col-2"></div>
                <div className="col-6">
                    <div className="row">
                        <div className="col-6-border p-3 ">
                            <h1 className="mb-3 mt-2">₹0</h1>
                            <p className="mb-2">Free Equity Delivery and <br/>direct Mutual Funds</p>
                        </div>
                        <div className="col-6-border p-3 mb-5">
                            <h1 className="mb-3 mt-2">₹20</h1>
                            <p className="mb-2">Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
         </div>
    );
}

export default Pricing;