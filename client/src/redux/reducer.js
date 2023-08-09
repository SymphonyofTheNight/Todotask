import { configureStore } from '@reduxjs/toolkit'
import ThunkMiddleware from 'redux-thunk';

// rreducer
import cartReducer from '../redux/cartSlice.js';

export const store = configureStore({
    reducer: {
        cart: cartReducer
    },
    middleware: [ThunkMiddleware]
})