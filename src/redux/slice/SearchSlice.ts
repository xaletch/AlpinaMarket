import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store';

export interface searchSlice {
    searchValue: string,
};

const initialState: searchSlice = {
    searchValue: '',
};

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchValue(state, action: PayloadAction<string>) {
            state.searchValue = action.payload;
        }
    },
});

export const search = (state: RootState) => state.search;
export const { setSearchValue } = searchSlice.actions;
export default searchSlice.reducer;