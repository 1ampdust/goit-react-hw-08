import { createSlice } from "@reduxjs/toolkit";

export const initialStateFilter = {
  name: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: initialStateFilter,
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export const selectNameFilter = (state) => state.filters.name;
export const filtersReducer = filtersSlice.reducer;