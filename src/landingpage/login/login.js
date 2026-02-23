import { useState } from "react";
//import { useNavigate } from "react-router-dom";

export default function Login() {
  //const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://zenalgo.onrender.com/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      window.location.href = "https://zerodha-dashboard-puce.vercel.app/";
    } else {
      alert(data.error);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}>
      <div style={{
        width: "400px",
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)"
      }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Login</h2>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <label>Email address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              style={{ width: "100%", padding: "10px", marginTop: "5px" }}
              required
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              style={{ width: "100%", padding: "10px", marginTop: "5px" }}
              required
            />
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#387ed1",
              color: "white",
              border: "none",
              borderRadius: "5px",
              fontSize: "16px",
              cursor: "pointer"
            }}
          >
            Login
          </button>
        </form>

        <p style={{ marginTop: "15px", textAlign: "center" }}>
          Don’t have an account?{" "}
          <span
            style={{ color: "#387ed1", cursor: "pointer" }}
           onClick={() => window.location.href = "/signup"}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}