import React, { useState } from "react";
import "./LoginComponent.css";
import "./LoginComponentResponsive.css";
import {
  Container,
  InputComponent,
  authService,
  login
} from "../Exports/exports";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signin = async (data) => {
    setError("");
    try {
      const session = await authService.signin(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          console.log(userData);
          dispatch(login(userData));
          navigate("/");
        }
      }
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };

  const handleSignin = (e) => {
    e.preventDefault();
    const data = { email, password };
    signin(data);
  };

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
            />
          </div>
          <div className="signinComponentInputBox">
            <InputComponent
              placeholder="Password"
              label="Set Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="signinButtonInsigninComponent" type="submit">
            Sign In
          </button>
        </form>
        <p className="signinComponentNavigatiionTosigninComponent">
          Don't have an account? <button>Sign Up</button>
        </p>
      </div>
    </Container>
  );
}

export default LoginComponent;
