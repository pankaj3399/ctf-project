import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from '../features/api/apiSlice'
import authSliceRed from '../features/auth/authSlice.js'
import categoriesSliceReducer from '../features/category/categoriesSlice.js'
import challengesSliceReducer from '../features/challenges/challengesSlice.js'
export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authSliceRed,
        categories: categoriesSliceReducer,
        challenges: challengesSliceReducer
    },
    devTools: import.meta.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(apiSlice.middleware)
})