import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from "@/store/reducers/UserSlice";
import vacanciesReducer from "@/store/reducers/VacanciesSlice";

const rootReducer = combineReducers({
    userReducer,
    vacanciesReducer,
})

 export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']