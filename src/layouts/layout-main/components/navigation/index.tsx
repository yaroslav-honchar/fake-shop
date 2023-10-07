"use client"

import React, { type JSX } from "react"
import Link from "next/link"
import cn from "classnames"
import { useDispatch, useSelector } from "react-redux"
import { type RootState } from "@/store/store"
import { navigationClose } from "@/layouts/layout-main/components/navigation/navigation.slice"
import css from "./navigation.module.css"

export const Navigation = (): JSX.Element => {
  const categories: string[] = useSelector((state: RootState) => state.products.categories)
  const isNavigationOpen: boolean = useSelector(
    (state: RootState) => state.navigation.isNavigationOpen,
  )
  const dispatch = useDispatch()

  const closeNavigationHandle = () => {
    dispatch(navigationClose())
  }

  const lightboxClickHandle = (event: React.MouseEvent<HTMLDivElement>) => {
    event.target === event.currentTarget && closeNavigationHandle()
  }

  return (
    <nav
      className={cn(css.nav, {
        [css._show]: isNavigationOpen,
      })}
      onClick={lightboxClickHandle}
    >
      <div className={css.nav_wrap}>
        <ul className={css.nav_list}>
          {categories.map(
            (category: string): JSX.Element => (
              <li
                className={css.nav_item}
                key={category}
              >
                <Link
                  className={css.nav_link}
                  href={category.replace(/\s/g, "-")}
                  onClick={closeNavigationHandle}
                >
                  {category}
                </Link>
              </li>
            ),
          )}
        </ul>
      </div>
    </nav>
  )
}
