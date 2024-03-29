import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { auth } from "../components/Exports/exports";
export class FirebaseAuthentication {
  async createUser({ email, password }) {
    try {
      const userAccount = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userAccount) {
        // return userAccount;
        this.login({ email, password });
      }
    } catch (error) {
      throw error;
    }
  }

  async signin({ email, password }) {
    try {
      return await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      throw error;
    }
  }
  async slogOut() {
    try {
      await signOut(auth);
    } catch (error) {
      throw error;
    }
  }
  async getCurrentUser() {
    const user = await new Promise((resolve, reject) => {
      const unsubscribe = onAuthStateChanged(
        auth,
        (user) => {
          // Unsubscribe to avoid memory leaks
          unsubscribe();

          if (user) {
            resolve(user);
          } else {
            console.log("No user");
            resolve(null); // Resolve with null if there's no user
          }
        },
        (error) => {
          console.error("Error fetching user", error);
          reject(null); // Resolve with null in case of an error
        }
      );
    });

    return user;
  }
}
const authService = new FirebaseAuthentication();
export default authService;
