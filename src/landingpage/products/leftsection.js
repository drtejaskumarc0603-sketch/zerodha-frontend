//import react from "react";

function Leftsection({imageURL , productName , productDescription , tryDemo , learnMore , googlePlay , appStore }) {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 ">
                    <img  src={imageURL} alt="leftimages"/>
                </div>
                <div className="col-6 p-5 mt-5">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div className="mt-3">
                    <a href={tryDemo} >Try Demo</a>
                    <a href={learnMore} style={{marginLeft:"40px"}}>Learn More</a></div>
                    <div>
                    <a href={googlePlay} ><img src="media/Colab Notebooks/googlePlayBadge.svg" alt="googleplay"/></a>
                    <a href={appStore} style={{marginLeft:"40px"}}><img src="media/Colab Notebooks/appStoreBadge.svg" alt="appstore"/></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Leftsection;