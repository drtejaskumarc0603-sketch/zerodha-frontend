//import react from "react

function Footer() {
    return (
        <footer style={{backgroundColor:"#f0e9e9"}}>
        <div className="container border-top mt-5" >
            <div className="row mt-5">
                <div className="col">
                    <img src="media/Colab Notebooks/logo.svg"  style={{width:"20%"}} alt="svdlogo"/>
                    <p> &copy; 2010-2026 , Not Zerodha Broking.ltd .  All Rights Reserved</p>
                </div>
                 <div className="col">
                    <h3>Company</h3>
                    <a href="/about"className="muted-link mb-2 mt-2" style={{textDecoration : "none"}}>About</a><br/>
                    <a href="/products"className="muted-link mb-2"style={{textDecoration : "none"}}>Products</a><br/>
                    <a href="/pricing"className="muted-link mb-2"style={{textDecoration : "none"}}>Pricing</a><br/>
                     <a href="/"className="muted-link mb-2"style={{textDecoration : "none"}}>Refereal Programee</a><br/>
                     <a href="/"className="muted-link mb-2"style={{textDecoration : "none"}} >Careers</a><br/>
                     <a href="/"className="muted-link mb-2"style={{textDecoration : "none"}}>Zerodha.tech</a><br/>
                    <a href="/"className="muted-link mb-3"style={{textDecoration : "none"}}>Zerodha Cares (CSR)</a><br/>
                 </div>
                  <div className="col">
                    <h3>Support</h3>
                    <a href="/"className="muted-link mb-2 mt-2"style={{textDecoration : "none"}}>Contact</a><br/>
                    <a href="/"className="muted-link mb-2"style={{textDecoration : "none"}}>Support portal</a><br/>
                    <a href="/"className="muted-link m b-2"style={{textDecoration : "none"}}>Z-connect</a><br/>
                     <a href="/"className="muted-link mb-2"style={{textDecoration : "none"}}>List of charges</a><br/>
                     <a href="/"className="muted-link mb-3"style={{textDecoration : "none"}}>Resources</a><br/>
                     
                  </div>
                   <div className="col">
                    <h3>Accounts</h3>
                    <a href="/" className="muted-link mb-2 mt-2"style={{textDecoration : "none"}}>Open an account </a><br/>
                    <a href="/"className="muted-link mb-2"style={{textDecoration : "none"}}>Fund Transfer</a><br/>
                    <a href="/"className="muted-link mb-3"style={{textDecoration : "none"}}>60 Day Challenge</a><br/>
                   </div>
            </div>
            <div className="mt-5 text-small text-muted" style={{fontSize:"12px"}}>
           <p> Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

<p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>

<p>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>

<p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>



<p>India's largest broker based on networth as per NSE. NSE broker factsheet</p>
</div>

        </div>
        </footer>
    );
}

export default Footer;