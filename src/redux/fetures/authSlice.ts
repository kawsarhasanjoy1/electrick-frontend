import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
type initialState = {
  user: any;
  token: string;
};

const initialState: initialState = {
  user: "",
  token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logOutUser: (state) => {
      (state.user = null), (state.token = "");
    },
  },
});

const persistConfig = {
    key: "auth",
    version: 1,
    storage,
  };
  export const authPersistReducer = persistReducer(persistConfig, authSlice.reducer);


export const { logOutUser, loginUser } = authSlice.actions;
export default authSlice.reducer;
