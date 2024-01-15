import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: null,
  status: false
};

const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload.userData;
    },
    logout: (state, action) => {
      state.status = false;
      state.userData = null;
    }
  }
});
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
