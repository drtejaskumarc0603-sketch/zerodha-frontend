//import react from "react";

function Awards() {
    return (
        <div className="container mt-5">
            <div className="row ">
                <div className="col-6 p-5">
                    <img src="/media/Colab Notebooks/largestBroker.svg" alt="largestbroker"/>
                </div>
                <div className="col-6 p-5 mt-5">
                    <h1>Largest stock broker in India</h1>
                    <p className="mb-5">We are the largest stock broker in India with over 5 million clients. We are also the fastest growing stock broker in India.</p>
                    <div className="row">
                        <div className="col-6">
                             <ul>
                        <li>
                            <p>Future and Options</p>
                        </li>
                        
                        <li>
                            <p>Currency Derivatives</p>
                        </li>
                        <li>
                            <p>Commodities Derivatives</p>
                        </li>
                        
                    </ul>
                        </div>
                        <div className="col-6">
                             <ul>
                        <li>
                            <p>Stocks & IPOs</p>
                        </li>
                        
                        <li>
                            <p>Direct Mutual Funds</p>
                        </li>
                        <li>
                            <p>Bonds & Debentures</p>
                        </li>
                        
                    </ul>
                        </div>
                    </div>
                   <img src="/media/Colab Notebooks/pressLogos.png" alt="pressLogos" style={{width: "90%"}}/>
                </div>
            </div>
        </div>
    );
}

export default Awards;