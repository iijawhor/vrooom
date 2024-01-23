import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pickupLocation: "",
  dropLocation: "",
  searchResult: []
};
export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    pickupLocation: (state, action) => {
      state.pickupLocation = action.payload;
    },
    dropLocation: (state, action) => {
      state.dropLocation = action.payload;
    },
    searchData: (state, action) => {
      state.searchResult = action.payload;
    },
    searchStartDate: (state, action) => {
      state.startDate = action.payload;
    },
    searchEndDate: (state, action) => {
      state.endDate = action.payload;
    }
  },
  prepareAction: (payload) => ({ payload })
});
export const { pickupLocation, dropLocation, searchData } = searchSlice.actions;
export default searchSlice.reducer;
