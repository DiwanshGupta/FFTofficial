import { createSlice } from "@reduxjs/toolkit";
import { encryptData } from "../utils/encryptio";

const initialState = {
  token:
    typeof window !== "undefined"
      ? localStorage.getItem("token") || null
      : null,
  user:
    typeof window !== "undefined"
      ? localStorage.getItem("Lsjdok[]dds") || null
      : null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { user, token } = action.payload;
      state.user = encryptData(user);
      state.token = token;
      localStorage.setItem("token", token);
      localStorage.setItem("Lsjdok[]dds", encryptData(JSON.stringify(user)));
    },
    logout: (state, action) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
      localStorage.removeItem("Lsjdok[]dds");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
