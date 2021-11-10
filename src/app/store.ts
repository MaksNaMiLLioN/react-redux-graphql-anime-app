import {
  configureStore,
  ThunkAction,
  Action,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import homePageReducer from "./containers/homePage/HomePageSlice";


const middleware = (getDefaultMiddleware: any) =>
  getDefaultMiddleware().concat();

export const store = configureStore({
  middleware,
  reducer: {
    homePage: homePageReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;