import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface IProductsState {
  categories: string[]
}

const initialState: IProductsState = {
  categories: [],
}

export const productsState = createSlice({
  name: "products",
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<string[]>) => {
      state.categories = action.payload
    },
  },
})

export const {setCategories} = productsState.actions

export default productsState.reducer