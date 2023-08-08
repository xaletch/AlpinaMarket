import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import cart from './slice/cartSlice';
import product from './slice/productSlice'
import search from './slice/SearchSlice'

export const store = configureStore({
    reducer: {
        cart,
        product,
        search,
    }, 
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch