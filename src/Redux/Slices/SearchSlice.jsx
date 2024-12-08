import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: ""
}

const SearchSlice = createSlice({
    name:"search",
    initialState,
    reducers:{
        setSearchTerm: (state,action) => {
            state.search = action.payload;
        }
    }
})

export const { setSearchTerm } = SearchSlice.actions;

export default SearchSlice.reducer;