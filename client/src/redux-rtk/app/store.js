import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from '../features/api/apiSlice'
import authSliceRed from '../features/auth/authSlice'
import categoriesSliceReducer from '../features/chat/categoriesSlice'

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authSliceRed,
        categories: categoriesSliceReducer
    },
    devTools: import.meta.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(apiSlice.middleware)
})