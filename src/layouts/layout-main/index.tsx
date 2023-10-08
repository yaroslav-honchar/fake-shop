"use client"

import React, { type FunctionComponent, type JSX, type ReactNode, useEffect } from "react"
import cn from "classnames"
import { ConfigProvider } from "antd"
import { Provider, useDispatch } from "react-redux"
import { poppins, roboto } from "@/layouts/fonts"
import { type IStaticPropsGlobalInterface } from "@/interfaces"
import { store } from "@/store/store"
import { setCategories } from "@/store/slices"
import { Header, Footer } from "@/layouts/layout-main/modules"
import css from "@/layouts/layout-main/layout.module.css"
import Head from "next/head"

const LayoutMain = ({
  children,
  categories,
}: { children?: ReactNode } & WithLayoutProps): JSX.Element => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setCategories(categories))
  }, [categories, dispatch])

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <div className={cn(css.layout, roboto.className, poppins.className)}>
        <Header />
        <div className={css.layout_content}>{children}</div>
        <Footer />
      </div>
    </>
  )
}

export const withLayout = <T extends WithLayoutProps>(Component: FunctionComponent<T>) => {
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

interface WithLayoutProps extends IStaticPropsGlobalInterface {}
