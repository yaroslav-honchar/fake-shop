"use client"

import React, { type JSX, useContext } from "react"
import Link from "next/link"
import css from "./navigation.module.css"
import cn from "classnames"
import { AppContext } from "@/context/app.context"

export const Navigation = (): JSX.Element => {
  const { categories, isNavigationOpen, closeNavigationHandle } = useContext(AppContext)

  const lightboxClickHandle = (event: React.MouseEvent<HTMLDivElement>) => {
    event.target === event.currentTarget
    && closeNavigationHandle
    && closeNavigationHandle()
  }

  return (
    <nav className={cn(css.nav, {
      [css._show]: isNavigationOpen,
    })}
         onClick={lightboxClickHandle}
    >
      <div className={css.nav_wrap}>
        <ul className={css.nav_list}>
          {
            categories.map((category: string): JSX.Element => (
              <li className={css.nav_item} key={category}>
                <Link
                  className={css.nav_link}
                  href={category.replace(/\s/g, "-")}
                  onClick={closeNavigationHandle}
                >
                  {category}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    </nav>
  )
}