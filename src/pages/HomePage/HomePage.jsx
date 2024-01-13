import React, { useEffect, useState } from "react";
import { Container } from "../../components/Exports/exports";
import { authService } from "../../components/Exports/exports";
import { useDispatch } from "react-redux";
import { login } from "../../components/Exports/exports";
function HomePage() {
  const [user, setUser] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    authService.getCurrentUser().then((user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);
  if (!user) {
    return <h1>Please Login to Proceed</h1>;
  }
  return (
    <Container className="homePage">
      <h1>User Logged In</h1>
    </Container>
  );
}

export default HomePage;
