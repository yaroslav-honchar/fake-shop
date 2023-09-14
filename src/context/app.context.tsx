"use client"

import React, { createContext, type JSX, type ReactNode, useState } from "react"

export interface IAppContext {
  categories: string[]
  isNavigationOpen: boolean
  openNavigationHandle?: () => void
  closeNavigationHandle?: () => void
  toggleNavigationHandle?: () => void
}

export const AppContext = createContext<IAppContext>({
  categories: [],
  isNavigationOpen: false,
  openNavigationHandle: () => {
  },
  closeNavigationHandle: () => {
  },
  toggleNavigationHandle: () => {
  },
})

export const AppContextProvider = ({ children, categories }: IAppContext & { children: ReactNode }): JSX.Element => {
  const [categoriesState] = useState<string[]>(categories)
  const [isNavigationOpen, setIsNavigationOpen] = useState(false)

  const closeNavigationHandle = (): void => {
    setIsNavigationOpen(false)
  }

  const openNavigationHandle = (): void => {
    setIsNavigationOpen(false)
  }

  const toggleNavigationHandle = (): void => {
    setIsNavigationOpen(prev => !prev)
  }

  return (
    <AppContext.Provider value={{
      categories: categoriesState,
      isNavigationOpen,
      openNavigationHandle,
      closeNavigationHandle,
      toggleNavigationHandle,
    }}>
      {children}
    </AppContext.Provider>
  )
}