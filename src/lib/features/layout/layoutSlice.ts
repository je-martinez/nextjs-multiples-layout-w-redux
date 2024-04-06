import { createAppSlice } from "@/lib/createAppSlice";

export interface LayoutSliceState {}

const initialState: LayoutSliceState = {};

export const layoutSlice = createAppSlice({
  name: "layout",
  initialState,
  reducers: (create) => ({
    clear: create.reducer((state) => {
      state = { ...initialState };
    }),
  }),
  selectors: {},
});

export const {} = layoutSlice.actions;

export const {} = layoutSlice.selectors;
