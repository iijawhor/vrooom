import { auth } from "../../Firebase/firebase";
import authService from "../../Firebase/firebaseAuthentication";
import { store } from "../../store/appStore";
import { authSlice, login, logout } from "../../store/authSlice";
export { auth, authService, store, authSlice, login, logout };
