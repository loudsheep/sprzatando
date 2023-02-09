import { configureStore } from "@reduxjs/toolkit";
import filterItemsReducer from "./filter-items";
import offersReducer from "./filter-logic";

const store = configureStore({
  reducer: { filterItems: filterItemsReducer, offers: offersReducer },
});

export default store;
