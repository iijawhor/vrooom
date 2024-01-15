import React, { useEffect, useState } from "react";
import { Container } from "../../components/Exports/exports";
import { authService } from "../../components/Exports/exports";
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
    return <h1>Please Login to Proceed</h1>;
  }
  return (
    <Container className="homePage">
      <h1>User Logged In</h1>
      {user.email}
    </Container>
  );
}

export default HomePage;
