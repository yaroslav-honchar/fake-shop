import { createContext, type JSX, ReactNode, useState } from "react"

export interface ICategoriesContext {
  categories: string[]
}

export const CategoriesContext = createContext<ICategoriesContext>({
  categories: [],
})

export const CategoriesContextProvider = ({ children, categories }: ICategoriesContext & {
  children: ReactNode
}): JSX.Element => {
  const [categoriesState] = useState(categories)

  return (
    <CategoriesContext.Provider value={{ categories: categoriesState }}>
      {children}
    </CategoriesContext.Provider>
  )
}