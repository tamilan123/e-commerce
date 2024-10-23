import { createSlice } from "@reduxjs/toolkit";

// initialize userToken from local storage
const userToken = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : null;

const initialState = {
  loading: false,
  userInfo: null,
  userToken: userToken,
  error: null,
  success: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoginRequest: (state, { payload }) => {
      state.loading = true;
    },
    setUserDetails: (state, { payload }) => {
      const { userInfo, userToken, success } = payload;
      state.loading = false;
      state.userInfo = userInfo;
      state.userToken = userToken;
      state.success = success;
    },
    errorToLogin: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    userLogout: (state, { payload }) => {
      return initialState;
    }
  }
})
const { reducer, actions } = authSlice;

export const {
  setLoginRequest,
  setUserDetails,
  errorToLogin,
  userLogout
} = actions;

export default reducer;
