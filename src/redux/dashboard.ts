import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export interface DashboardState {
  selectedCategory: number;
  limit: number;
  cats: any;
  fetchCatsLoading: boolean;
}

const initialState: DashboardState = {
  selectedCategory: 1,
  limit: 10,
  cats: [],
  fetchCatsLoading: false,
};

export const dashboardSlice = createSlice({
  name: "cats",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<number>) => {
      state.selectedCategory = action.payload;
    },
    setCats: (state, action: PayloadAction<any>) => {
      state.cats = action.payload;
    },
    setCatsLoading: (state, action: PayloadAction<boolean>) => {
      state.fetchCatsLoading = action.payload;
    },

    setLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
    },
  },
});

export const { setCategory, setCats, setLimit, setCatsLoading } =
  dashboardSlice.actions;

export const getSelectCategory = (state: RootState) =>
  state.dashboard.selectedCategory;
export const getCats = (state: RootState) => state.dashboard.cats;
export const getLimit = (state: RootState) => state.dashboard.limit;
export const getCatsLoading = (state: RootState) =>
  state.dashboard.fetchCatsLoading;

export default dashboardSlice.reducer;
