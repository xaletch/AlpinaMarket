import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store';

import axios from 'axios';

export type searchProductParams = {
  search: string;
};
  
export const fetchProducts = createAsyncThunk(
  'product/fetchProductsStatus',
  async (params: searchProductParams) => {
    const { search } = params;
    // const { data } = await axios.get(`https://64a97f128b9afaf4844ac01b.mockapi.io/Products?&${search}`);
    const { data } = await axios.get(`http://localhost:5000/products?search=${search}`);
    // const { data } = await axios.get('http://localhost:5000/products?search=' + search);
    return data;
  }
);
  
type productItem = {
  id: string;
  title: string;
  img: string;
  count: number;
  price: number;
  discount: number;
};
  
export interface ProductSliceState {
  item: productItem[];
}
  
const initialState: ProductSliceState = {
  item: [],
};
  
export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.item = action.payload;
    });
  },
});
  
export const selectProductData = (state: RootState) => state.product;
export const { } = productSlice.actions;
export default productSlice.reducer;