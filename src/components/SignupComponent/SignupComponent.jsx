import React, { useState } from "react";
import "./SignupComponent.css";
import "./SignupComponentResponsive.css";
import {
  Container,
  InputComponent,
  authService,
  login,
  DisplayMessage
} from "../Exports/exports";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
function SignupComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [signupSuccessful, setSignupSuccessfull] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signup = async (data) => {
    setError("");
    try {
      const userData = await authService.createUser(data);
      if (userData) {
        setSignupSuccessfull("Account is created syccsesfully!");
        dispatch(login(userData));
        navigate("/login");
      }
    } catch (error) {
      setError("Please enter valid credentials...");
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const data = { email, password };
    signup(data);
    console.log(email);
    setEmail("");
    setPassword("");
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
          <p className="signupComponentNavigatiionToLoginComponent">
            Already have an account?{" "}
            <button
              className="signupComponentNavigatiionToLoginComponentSigninButton"
              onClick={() => navigate("/login-page")}
            >
              Sign In
            </button>
          </p>
        </div>
        <form action="" className="signupComponentForm" onSubmit={handleSignup}>
          <div className="signupComponentInputBox">
            <InputComponent
              placeholder="Full name"
              label="Your Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required="required"
            />
          </div>
          <div className="signupComponentInputBox">
            <InputComponent
              placeholder="  Email address"
              label="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required="required"
            />
          </div>
          <div className="signupComponentInputBox">
            <InputComponent
              placeholder="Password"
              label="Set Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required="required"
            />
          </div>
          <button className="signupButtonInSignupComponent" type="submit">
            Signup
          </button>
        </form>
      </div>
      {error && <DisplayMessage displayMessage={error} />}
    </Container>
  );
}

export default SignupComponent;
