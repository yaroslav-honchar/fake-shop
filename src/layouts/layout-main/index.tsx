"use client"

import React, {
  type FunctionComponent,
  type JSX,
  type ReactNode,
} from "react"
import { Roboto } from "next/font/google"
import { Footer } from "@/layouts/layout-main/modules/footer"
import { Header } from "@/layouts/layout-main/modules/header"
import css from "@/layouts/layout-main/layout.module.css"
import cn from "classnames"
import { AppContextProvider, IAppContext } from "@/context/app.context"
import { ConfigProvider } from "antd"

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
})

const LayoutMain = ({ children }: { children: ReactNode }): JSX.Element => {
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

export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: FunctionComponent<T>) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <ConfigProvider>
        <AppContextProvider categories={props.categories} isNavigationOpen={false}>
          <LayoutMain>
            <Component {...props} />
          </LayoutMain>
        </AppContextProvider>
      </ConfigProvider>
    )
  }
}