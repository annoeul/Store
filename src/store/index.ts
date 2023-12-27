import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./slice/userInfo"

export const store = configureStore({
  reducer: {
    userInfo: userReducer,
  },
})
