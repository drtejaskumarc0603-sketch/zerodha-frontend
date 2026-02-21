//import react from "react";

function Universe() {
    return (
        <div className="container">
            <div className="row text-center">
      <h1 className="text-center">The Zerodha Universe</h1>
      <p className="text-center mt-5 mb-5">Extend your trading and investment experience even further with our partner platforms</p>
                
                
                <div className="col-4 p-3 mt-5">
                    <img src="/media/Colab Notebooks/smallcaseLogo.png" alt="smallcase" />
                    <p className="text-small text-muted">Thematic Investment platform</p>
                </div>
                <div className="col-4 p-3 mt-5">
                  <img src="/media/Colab Notebooks/streakLogo.png" alt="streak" style={{width:"20%"}} />
                    <p className="text-small text-muted">Algo and strategy platform</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="/media/Colab Notebooks/sensibullLogo.svg" alt="sensibull" />
                    <p className="text-small text-muted">Options Trading platform</p>
                </div>
                
                <div className="col-4 p-3  mt-5">
                    <img src="/media/Colab Notebooks/zerodhaFundhouse.png"alt="asset"style={{width:"30%"}} />
                    <p className="text-small text-muted">Asset Management</p>
                </div>
                <div className="col-4 p-3 mt-5">
                  <img src="/media/Colab Notebooks/goldenpiLogo.png" alt="goldenpi" />
                    <p className="text-small text-muted">Bonds Trading platform</p>
                </div>
                <div className="col-4 p-3 mt-5 ">
                    <img src="/media/Colab Notebooks/dittoLogo.png" alt="ditto"style={{width:"20%"}}/>
                    <p className="text-small text-muted">Insurance</p>
                </div>
            
              <button className="p-2 btn btn-primary fs-5 mb-5" style={{width : "20%" , margin: "0 auto"}}>Sign Up Now</button>
            </div>
        </div>
    );
}

export default Universe;