//import react from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg border-bottom bg-white">
  <div className="container">

    {/* Logo */}
    <a className="navbar-brand" href="/">
      <img 
        src="/media/Colab Notebooks/logo.svg" 
        alt="logo" 
        style={{ width: "20%" }}
      />
    </a>

    {/* Toggler */}
    <button 
      className="navbar-toggler" 
      type="button" 
      data-bs-toggle="collapse" 
      data-bs-target="#navbarSupportedContent"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    {/* Links */}
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">

        <li className="nav-item">
          <Link className="nav-link" to="/signup">Signup</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/product">Product</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/pricing">Pricing</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/support">Support</Link>
        </li>

        <li className="nav-item d-flex align-items-center">
          <i className="fa-solid fa-bars"></i>
        </li>

      </ul>
    </div>

  </div>
</nav>
        
    );
}

export default Navbar;