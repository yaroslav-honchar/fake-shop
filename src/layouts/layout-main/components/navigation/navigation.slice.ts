import { createSlice } from "@reduxjs/toolkit"
import { scrollbarLock, scrollbarUnlock } from "@/utils/scrollbar-locker.utils"

interface INavigationState {
  isNavigationOpen: boolean
}

const initialState: INavigationState = {
  isNavigationOpen: false,
}

const NavigationState = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    navigationOpen: (state) => {
      scrollbarLock()
      state.isNavigationOpen = true
    },
    navigationClose: (state) => {
      scrollbarUnlock()
      state.isNavigationOpen = false
    },
    navigationToggle: (state) => {
      if (state.isNavigationOpen) {
        scrollbarUnlock()
        state.isNavigationOpen = false
      } else {
        scrollbarLock()
        state.isNavigationOpen = true
      }
    },
  },
})

export const { navigationClose, navigationToggle, navigationOpen } = NavigationState.actions

export default NavigationState.reducer