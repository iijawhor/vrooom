import React, { useEffect, useState } from "react";
import "./HomePage.css";
import {
  Container,
  HomeComponent,
  authService,
  HeaderComponent
} from "../../components/Exports/exports";

function HomePage() {
  const [user, setUser] = useState();
  useEffect(() => {
    authService.getCurrentUser().then((user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);
  if (!user) {
    return (
      <div>
        <h1>Please Login to Proceed</h1>
      </div>
    );
  }
  return (
    <Container className="homePage">
      <HeaderComponent />
      <HomeComponent />
    </Container>
  );
}

export default HomePage;
