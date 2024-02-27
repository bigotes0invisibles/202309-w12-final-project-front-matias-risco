import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from "@reduxjs/toolkit";
import gameReducer from "./feature/games/gamesSlice";
import uiReducer from "./feature/ui/uiSlice";
import userReducer from "./feature/user/userSlice";

export const rootReducer = combineReducers({
  gameState: gameReducer,
  uiState: uiReducer,
  userState: userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
