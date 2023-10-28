import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { type IProduct } from "@/interfaces"

interface IProductsState {
  categories: string[]
  products: IProduct[]
  watched: IProduct[]
}

const initialState: IProductsState = {
  categories: [],
  products: [],
  watched: [],
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
    setWatched: (state, action: PayloadAction<IProduct>) => {
      let newWatched = state.watched
      const localStorageProducts = localStorage.getItem("watched_products")

      if (localStorageProducts) {
        newWatched = [...newWatched, ...JSON.parse(localStorageProducts)]
      }

      newWatched.push(action.payload)

      const filterHolder: { [key: string]: boolean } = {}

      newWatched = newWatched.filter((product) => {
        const productId = product.id.toString()

        if (!filterHolder[productId]) {
          filterHolder[productId] = true

          return true
        } else {
          return false
        }
      })

      state.watched = newWatched
      localStorage.setItem("watched_products", JSON.stringify(newWatched))
    },
  },
})

export const { setCategories, setProducts, setWatched } = productsState.actions

export default productsState.reducer
