import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { type IProduct } from "@/interfaces"

interface IProductsState {
  categories: string[]
  products: IProduct[]
}

const initialState: IProductsState = {
  categories: [],
  products: [],
}

export const productsState = createSlice({
  name: "products",
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<string[]>) => {
      state.categories = action.payload
    },
    setProducts: (state, action: PayloadAction<IProduct[]>) => {
      state.products = action.payload
    },
  },
})

export const {setCategories, setProducts} = productsState.actions

export default productsState.reducer