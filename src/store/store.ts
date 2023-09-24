import { configureStore } from "@reduxjs/toolkit"
import productsReducer from "@/store/slices/products.slice"
import navigationReducer from "@/layouts/layout-main/components/navigation/navigation.slice"

export const store = configureStore({
  reducer: {
    products: productsReducer,
    navigation: navigationReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch