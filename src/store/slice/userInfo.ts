import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  email: "",
  password: "",
  call: "",
  ownerName: "",
  storeName: "",
  address: "",
  crn: "",
}

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      return {
        ...state,
        ...action.payload,
      }
    },
  },
})

export const { setUserInfo } = userInfoSlice.actions
export default userInfoSlice.reducer
