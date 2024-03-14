import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token:
    typeof window !== "undefined"
      ? localStorage.getItem("token") || null
      : null,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      localStorage.setItem("token", token); // Save token to local storage
    },
    logout: (state, action) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token"); // Remove token from local storage on logout
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
