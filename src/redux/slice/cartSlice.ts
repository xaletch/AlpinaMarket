import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store';

export type CartItem = {
    id: string;
    title: string;
    img: string;
    count: number;
    price: number;
};

export interface cartState {
  items: CartItem[]
}

const initialState: cartState = {
  items: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProducts(state, action) {
            const findItem = state.items.find((obj) => obj.id === action.payload.id);

            findItem ? findItem.count++ :state.items.push({...action.payload, count: 1,});
        }
    }
})

export const selectCart = (state: RootState) => state.cart;
export const { addProducts } = cartSlice.actions
export default cartSlice.reducer