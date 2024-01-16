import { auth } from "../../Firebase/firebase";
import authService from "../../Firebase/firebaseAuthentication";
import HomePage from "../../pages/HomePage/HomePage";
import { store } from "../../store/appStore";
import authSlice from "../../store/authSlice";
import { login } from "../../store/authSlice";
import { logout } from "../../store/authSlice";
import AuthLayout from "../AuthLayout/AuthLayout";
import Container from "../Container/Container";
import InputComponent from "../InputComponent/InputComponent";
import SignupComponent from "../SignupComponent/SignupComponent";
import LoginComponent from "../LoginComponent/LoginComponent";
import HomeBackground from "../HomeBackground/HomeBackground";
import SearchAndInfo from "../SearchAndInfo/SearchAndInfo";
import HomeComponent from "../HomeCompnent/HomeComponent";
import SearchComponent from "../SearchComponent/SearchComponent";
export {
  auth,
  authService,
  store,
  authSlice,
  login,
  logout,
  AuthLayout,
  Container,
  HomePage,
  InputComponent,
  SignupComponent,
  LoginComponent,
  HomeComponent,
  HomeBackground,
  SearchAndInfo,
  SearchComponent
};
