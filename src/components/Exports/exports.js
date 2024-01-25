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
import SearchNavigationRoute from "../Search/SearchNavigationRoute/SearchNavigationRoute";
import carBookings from "../Data/Data";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import SearchForm from "../Search/SearchForm/SearchForm";
import SearchCompoenent from "../SearchComponent/SearchCompoenent";
import DailySearch from "../Search/DailySearch/DailySearch";
import RentalSearch from "../Search/RentalSearch/RentalSearch";
import OutstationSearch from "../Search/OutstationSearch/OutstationSearch";
import GlobalConnectCities from "../GlobaConnect Cities/GlobalConnectCities";
import Card from "../Card/Card";
import UseDebounce from "../Debounce/UseDebounce";
import searchSlice from "../../store/searchSlice";
import SearchResultPage from "../../pages/SearchResultPage/SearchResultPage";
import SearchResultComponent from "../SearchResultComponent/SearchResultComponent";
import FeaturesDisplay from "../FeaturesDisplay/FeaturesDisplay";
import FeatureDisplayCard from "../FeaturesDisplay/FeatureDisplayCard/FeatureDisplayCard";
import AskedQuestion from "../AskedQuestion/AskedQuestion";
import QuestionComponent from "../AskedQuestion/QuestionComponent/QuestionComponent";
import FooterComponent from "../FooterComponent/FooterComponent";
import { footerData } from "../Data/Data";
import FooterItems from "../FooterComponent/FooterItem/FooterItems";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import XIcon from "@mui/icons-material/X";
// import TwitterIcon from "@mui/icons-matersial/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HowItWorks from "../HowItWorks/HowItWorks";
import HowItWorksCard from "../HowItWorks/HowItWorksCard/HowItWorksCard";
import UserFlowPanel from "../UserFlowPanel/UserFlowPanel";
import DisplayMessage from "../DisplayMessage/DisplayMessage";
export {
  AddIcon,
  RemoveIcon,
  XIcon,
  // TwitterIcon,
  LinkedInIcon,
  InstagramIcon,
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
  carBookings,
  SearchNavigationRoute,
  LocationSearchingIcon,
  SearchForm,
  SearchCompoenent,
  DailySearch,
  RentalSearch,
  OutstationSearch,
  GlobalConnectCities,
  Card,
  UseDebounce,
  searchSlice,
  SearchResultPage,
  SearchResultComponent,
  FeaturesDisplay,
  FeatureDisplayCard,
  AskedQuestion,
  QuestionComponent,
  FooterComponent,
  footerData,
  FooterItems,
  HowItWorks,
  HowItWorksCard,
  UserFlowPanel,
  DisplayMessage
};
