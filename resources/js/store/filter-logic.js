import { createSlice } from "@reduxjs/toolkit";

const initialState = { offers: [] };

const offersSlice = createSlice({
  name: "offers",
  initialState,
  reducers: {
    setAllOffers(state, action) {
      state.offers = action.payload;
      console.log(state.offers);
    },
    // filterByCity(state, action) {
    //   let arr = [state.offers];
    //   console.log(state.offers)
      
    // },
  },
});

export const offersActions = offersSlice.actions;

export default offersSlice.reducer;
