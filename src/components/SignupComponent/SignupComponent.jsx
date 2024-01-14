import React, { useState } from "react";
import "./SignupComponent.css";
import "./SignupComponentResponsive.css";
import {
  Container,
  InputComponent,
  authService,
  login
} from "../Exports/exports";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
function SignupComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signup = async (data) => {
    setError("");
    try {
      const userData = await authService.createUser(data);
      if (userData) {
        dispatch(login(userData));
        navigate("/login");
      }
    } catch (error) {
      setError(error);
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const data = { email, password };
    signup(data);
    console.log(email);
    setEmail("");
    setPassword("");
    console.log(login);
  };

  return (
    <Container className="signupComponentContainer">
      <div className="signupComponent">
        <div className="signupComponentHeader">
          <h1 className="signupComponentHeaderTitle">Vrooom</h1>
          <div className="signupComponentHeaderAuthentications">
            <button className="signupWithGoogleInSignupComponent">
              Signup with google
            </button>
            <button className="signupWithGoogleInSignupComponent">
              Signup with Facebook
            </button>
          </div>
        </div>
        <form action="" className="signupComponentForm" onSubmit={handleSignup}>
          <div className="signupComponentInputBox">
            <InputComponent
              placeholder="Full name"
              label="Your Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="signupComponentInputBox">
            <InputComponent
              placeholder="  Email address"
              label="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="signupComponentInputBox">
            <InputComponent
              placeholder="Password"
              label="Set Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="signupButtonInSignupComponent" type="submit">
            Signup
          </button>
        </form>
        <p className="signupComponentNavigatiionToLoginComponent">
          Already have an account? <button>Sign In</button>
        </p>
      </div>
    </Container>
  );
}

export default SignupComponent;
