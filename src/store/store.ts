import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {userSlice} from "@/store/reducers/UserSlice";
import {eprofiAPI} from "@/services/eprofiService";

const rootReducer = combineReducers({
    userSlice,
    [eprofiAPI.reducerPath]: eprofiAPI.reducer
})

 export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware()
                .concat(eprofiAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']