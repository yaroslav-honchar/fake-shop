"use client"

import React, {
  type FunctionComponent,
  type JSX,
  type ReactNode,
  useEffect,
} from "react"
import { Roboto } from "next/font/google"
import { Footer } from "@/layouts/layout-main/modules/footer"
import { Header } from "@/layouts/layout-main/modules/header"
import css from "@/layouts/layout-main/layout.module.css"
import cn from "classnames"
import { ConfigProvider } from "antd"
import { Provider, useDispatch } from "react-redux"
import { store } from "@/store/store"
import { setCategories } from "@/store/slices/products.slice"

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
})

const LayoutMain = ({ children, categories }: { children?: ReactNode } & WithLayoutProps): JSX.Element => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setCategories(categories))
  }, [categories, dispatch])

  return (
    <div className={cn(css.layout, roboto.className)}>
      <Header />
      <div className={css.layout_content}>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export const withLayout = <T extends Record<string, unknown> & WithLayoutProps>(Component: FunctionComponent<T>) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Provider store={store}>
        <ConfigProvider>
          <LayoutMain {...props}>
            <Component {...props} />
          </LayoutMain>
        </ConfigProvider>
      </Provider>
    )
  }
}

interface WithLayoutProps {
  categories: string[]
}