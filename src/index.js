import React, { lazy, Suspense } from "react";
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
  SearchResults,
  ContinueCabBooking,
  MyTripsComponent,
  UserAccount,
  UserAccountInfo
} from "./components/Exports/exports";
import RentalSearch from "./components/Search/RentalSearch/RentalSearch";

const SearchResultComponent = lazy(() =>
  import("./components/SearchResultComponent/SearchResultComponent")
);

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <DailySearch /> },
      { path: "search/daily-search", element: <DailySearch /> },
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
    path: "/my-trips",
    element: (
      <AuthLayout authentication={true}>
        <MyTripsComponent />
      </AuthLayout>
    )
  },
  {
    path: "/user-account",
    element: (
      <AuthLayout>
        <UserAccount />
      </AuthLayout>
    ),
    children: [
      { path: "/user-account", element: <UserAccountInfo /> },
      { path: "/user-account/user-account-info", element: <UserAccountInfo /> },
      { path: "/user-account/my-trips", element: <MyTripsComponent /> },
      {
        path: "/user-account/user-account-security",
        element: <p>User Account Security</p>
      },
      {
        path: "/user-account/user-account-data-access",
        element: <p>User Account Data Access</p>
      }
    ]
  },
  {
    path: "/search-result-component",
    element: (
      <AuthLayout authentication={true}>
        <Suspense
          fallback={
            <h1 style={{ fontSize: "40px", color: "red" }}>
              Loading........... Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Neque iure non, rem ea dignissimos eum ad
              incidunt? Earum, suscipit tempora?
            </h1>
          }
        >
          <SearchResultComponent />
        </Suspense>
      </AuthLayout>
    ),
    children: [
      {
        path: "/search-result-component",
        element: <SearchResults />
      },
      {
        path: "/search-result-component/continue-booking",
        element: <ContinueCabBooking />
      }
    ]
  }
]);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
