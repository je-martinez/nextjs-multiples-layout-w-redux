import { createAppSlice } from "@/lib/createAppSlice";
import type { AppThunk } from "@/lib/store";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface LayoutSliceState {
  headerText: string;
  footerText: string;
}

const initialState: LayoutSliceState = {
  headerText: "Getting Started",
  footerText: "",
};

export const layoutSlice = createAppSlice({
  name: "layout",
  initialState,
  reducers: (create) => ({
    changeHeaderText: create.reducer((state, action: PayloadAction<string>) => {
      state.headerText = action.payload;
    }),
    changeFooterText: create.reducer((state, action: PayloadAction<string>) => {
      state.footerText = action.payload;
    }),
    clear: create.reducer((state) => {
      state = { ...initialState };
    }),
  }),
  selectors: {
    selectHeaderText: (counter) => counter.headerText,
    selectFooter: (counter) => counter.footerText,
  },
});

export const { changeHeaderText, changeFooterText } = layoutSlice.actions;

export const { selectHeaderText, selectFooter } = layoutSlice.selectors;
