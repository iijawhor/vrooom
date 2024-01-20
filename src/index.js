import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./store/appStore";
import {
  LoginComponent,
  SignupComponent,
  AuthLayout,
  DailySearch,
  OutstationSearch,
  SearchResultPage
} from "./components/Exports/exports";
import RentalSearch from "./components/Search/RentalSearch/RentalSearch";
const root = ReactDOM.createRoot(document.getElementById("root"));
const createDailySearchElement = () => <DailySearch />;
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: createDailySearchElement() },
      { path: "search/daily-search", element: createDailySearchElement() },
      { path: "search/rental-search", element: <RentalSearch /> },
      { path: "search/outstation-search", element: <OutstationSearch /> }
    ]
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
  },
  {
    path: "/search-page",
    element: (
      <AuthLayout authentication={true}>
        <SearchResultPage />
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
