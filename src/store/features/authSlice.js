import { createSlice } from "@reduxjs/toolkit";

const savedToken = localStorage.getItem("contentum_token");

const initialState = {
  status: savedToken ? "authenticated" : "guest",
  token: savedToken || null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.token = action.payload.token;
      state.status = "authenticated";
      localStorage.setItem("contentum_token", action.payload.token);
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.token = null;
      state.status = "guest";
      state.user = null;
      localStorage.removeItem("contentum_token");
    },
    setStatus: (state, action) => {
      state.status = action.payload; // 'unknown' | 'guest' | 'authenticated'
    },
  },
});

export const { setCredentials, logout, setUser, setStatus } = authSlice.actions;
export default authSlice.reducer;
