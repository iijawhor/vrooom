import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./store/appStore";
import {
  HomePage,
  LoginComponent,
  SignupComponent,
  AuthLayout
} from "./components/Exports/exports";
const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "/", element: <HomePage /> }]
  },
  {
    path: "/signup-page",
    element: (
      <AuthLayout authentication={false}>
        <SignupComponent />
      </AuthLayout>
    )
  },
  {
    path: "/login-page",
    element: (
      <AuthLayout authentication={false}>
        <LoginComponent />
      </AuthLayout>
    )
  }
]);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
