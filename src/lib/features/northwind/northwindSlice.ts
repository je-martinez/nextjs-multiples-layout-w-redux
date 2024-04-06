import { createAppSlice } from "@/lib/createAppSlice";
import { Category } from "@/types/northwind.types";
import axios from "axios";

const northwindApi = axios.create({
  baseURL: "https://northwind.now.sh/api",
});

export interface NorthwindSliceState {
  loading: boolean;
  categories: Category[];
}

const initialState: NorthwindSliceState = {
  loading: false,
  categories: [],
};

export const northwindSlice = createAppSlice({
  name: "northwind",
  initialState,
  reducers: (create) => ({
    getCategories: create.asyncThunk(
      async (_: void) => {
        const { data } = await northwindApi.get<Category[]>("/categories");
        return data;
      },
      {
        pending: (state) => {
          state.loading = true;
        },
        fulfilled: (state, action) => {
          state.loading = false;
          state.categories = action.payload;
        },
        rejected: (state) => {
          state.loading = false;
        },
      }
    ),
  }),
  selectors: {
    selectCategories: (state) => state.categories,
  },
});

export const { getCategories } = northwindSlice.actions;

export const { selectCategories } = northwindSlice.selectors;
