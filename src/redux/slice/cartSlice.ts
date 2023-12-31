import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store';

export type CartItem = {
    id: string;
    title: string;
    img: string;
    count: number;
    price: number;
    discount: number;
};

export interface cartState {
  totalPrice: number;
  discountPrice: number;
  items: CartItem[];
};

const price = JSON.parse(localStorage.getItem('cartPrice'));
// const discount = JSON.parse(localStorage.getItem('cartDiscount'));
const item = JSON.parse(localStorage.getItem('cart'));

const initialState: cartState = {
  totalPrice: price || 0,
  discountPrice: 0,
  items: item || [],
};  

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProducts(state, action) {
          const findItem = state.items.find((obj) => obj.id === action.payload.id);

          findItem ? findItem.count++ :state.items.push({...action.payload, count: 1,});

          state.totalPrice = state.items.reduce((sum: number, item) =>  item.price + sum, 0);
        },
        deleteProduct(state, action) {
          state.items = state.items.filter((item) => item.id !== action.payload);

          state.totalPrice = state.items.reduce((sum: number, item) => item.price * item.count + sum, 0);
        },
        minusProduct(state, action) {
          const findItem = state.items.find((item) => item.id === action.payload);
          
          state.items = state.items.filter((item) => item.count !== 0);

          if (findItem) {
            findItem.count--;
          };

          state.totalPrice = state.items.reduce((sum: number, item) => item.price * item.count + sum, 0);
        },
        plusProduct(state, action) {
          const findItem = state.items.find((item) => item.id === action.payload);

          state.items = state.items.filter((item) => item.count >= 0);

          if (findItem) {
            findItem.count++;
          };

          state.totalPrice = state.items.reduce((sum: number, item) => item.price * item.count + sum, 0);
        },
        discountTotalPrice(state, action) {
          const { discount } = action.payload;
          
          if (discount === 'KU6ym' || 'ku6ym') {
            state.discountPrice = state.totalPrice * 0.1;
          };
        }
    },
});

export const selectItemCount = (itemId: string) => (state: RootState) => {
  const item = state.cart.items.find((item) => item.id === itemId);
  return item ? item.count : 0;
};

export const selectCart = (state: RootState) => state.cart;
export const { addProducts, deleteProduct, minusProduct, plusProduct, discountTotalPrice } = cartSlice.actions;
export default cartSlice.reducer;