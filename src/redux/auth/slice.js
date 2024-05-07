import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { userRegister, logInUser, refreshUser, logOutUser } from "./operations";
import { INITIAL_STATE } from "../initialState";

const authSlice = createSlice({
  name: "authSlice",
  initialState: INITIAL_STATE.auth,

  extraReducers: (builder) => {
    builder
      .addCase(userRegister.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(logInUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(logOutUser.fulfilled, () => {
        return INITIAL_STATE;
      })
      .addMatcher(
        isAnyOf(
          userRegister.pending,
          logInUser.pending,
          refreshUser.pending,
          logOutUser.pending
        ),
        (state) => {
          state.isRefreshing = true;
        }
      )
      .addMatcher(
        isAnyOf(
          userRegister.rejected,
          logInUser.rejected,
          refreshUser.rejected,
          logOutUser.rejected
        ),
        (state) => {
          state.isRefreshing = false;
          state.isLoggedIn = false;
          state.token = null;
          state.user = { name: null, email: null };
        }
      );
  },
});

export const authReducer = authSlice.reducer;