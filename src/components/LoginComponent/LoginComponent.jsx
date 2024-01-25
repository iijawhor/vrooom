import React, { useEffect, useState } from "react";
import "./LoginComponent.css";
import "./LoginComponentResponsive.css";
import {
  Container,
  InputComponent,
  authService,
  login,
  DisplayMessage
} from "../Exports/exports";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signin = async (data) => {
    setErrorMessage("");
    try {
      const session = await authService.signin(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(login(userData));
          navigate("/");
        }
      }
    } catch (error) {
      setErrorMessage("Invalid email or Password Please try again...");
    }
  };

  const handleSignin = (e) => {
    e.preventDefault();
    const data = { email, password };
    signin(data);
  };
  useEffect(() => {
    const hideMessage = setTimeout(() => {
      setErrorMessage("");
    }, 5000);

    return () => clearTimeout(hideMessage);
  }, [errorMessage]);

  return (
    <Container className="signinComponentContainer">
      <div className="signinComponent">
        <div className="signinComponentHeader">
          <h1 className="signinComponentHeaderTitle">Vrooom</h1>
          <div className="signinComponentHeaderAuthentications">
            <button className="signinWithGoogleInsigninComponent">
              signin with google
            </button>
            <button className="signinWithGoogleInsigninComponent">
              signin with Facebook
            </button>
          </div>
        </div>
        <form action="" className="signinComponentForm" onSubmit={handleSignin}>
          <div className="signinComponentInputBox">
            <InputComponent
              placeholder="  Email address"
              label="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required="required"
            />
          </div>
          <div className="signinComponentInputBox">
            <InputComponent
              placeholder="Password"
              label="Set Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required="required"
            />
          </div>
          <button className="signinButtonInsigninComponent" type="submit">
            Sign In
          </button>
        </form>
        <p className="signinComponentNavigationTosigninComponent">
          <span>Don't have an account?</span>{" "}
          <button onClick={() => navigate("/signup-page")}>Sign Up</button>
        </p>
      </div>
      <DisplayMessage displayMessage={errorMessage} />
    </Container>
  );
}

export default LoginComponent;
