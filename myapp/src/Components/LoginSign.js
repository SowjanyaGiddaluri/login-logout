import React, { useState } from "react";
import "../Components/LoginSign.css";

const LoginSign = () => {
  const [action, setAction] = useState("Sign Up");
  const [isLogged, setIsLogged] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleSubmit = () => {
    setIsLogged(true);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  return (
    <div className="container">
      {!isLogged ? (
        <>
          <div className="header">
            <h1>{action === "Sign Up" ? "Create an Account" : "Welcome Back!"}</h1>
          </div>
          <div className="inputs">
            {action === "Sign Up" && (
              <div className="input">
                <label htmlFor="name">Name: </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
            )}
            <div className="input">
              <label htmlFor="email">Email: </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="input">
              <label htmlFor="password">Password: </label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="forgot-password">
            Lost Password? <span>Click here!</span>
          </div>
          <div className="submit-container">
            <button
              className={action === "Sign Up" ? "submit" : "submit gray"}
              onClick={() => setAction("Sign Up")}
            >
              Sign Up
            </button>
            <button
              className={action === "Login" ? "submit" : "submit gray"}
              onClick={() => setAction("Login")}
            >
              Login
            </button>
            <button className="submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </>
      ) : (
        <div className="content">
          <h2>Welcome, {formData.name || "User"}!</h2>
          <p>Email: {formData.email}</p>
          <button onClick={() => setIsLogged(false)}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default LoginSign;
