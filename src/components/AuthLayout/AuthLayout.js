import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function AuthLayout({ children, authentication = true }) {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);
  useEffect(() => {
    if (authentication && !authStatus) {
      navigate("/login");
    } else if (!authentication && authStatus) {
      navigate("/");
    }
    setLoading(false);
  }, [navigate, authStatus, authentication]);
  return loading ? (
    <h1>{loading}</h1>
  ) : (
    <div>
      {/*header component */}
      {children}
      {/* footer */}
    </div>
  );
}

export default AuthLayout;
