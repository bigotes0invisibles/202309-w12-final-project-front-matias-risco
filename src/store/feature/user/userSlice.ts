import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserStateStructure } from "./types";

export const initialUserState: UserStateStructure = {
  name: "",
  token: "",
};

const userSlice = createSlice({
  name: "userState",
  initialState: initialUserState,
  reducers: {
    loadUser: (
      currentState: UserStateStructure,
      action: PayloadAction<UserStateStructure>,
    ) => ({
      ...currentState,
      ...action.payload,
    }),
  },
});

export default userSlice.reducer;
export const { loadUser: loadUserActionCreator } = userSlice.actions;
