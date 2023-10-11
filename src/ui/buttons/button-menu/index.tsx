"use client"

import React, { type DetailedHTMLProps, type HTMLAttributes, type JSX } from "react"
import { CloseOutlined, MenuOutlined } from "@ant-design/icons"
import css from "./button-menu.module.css"
import cn from "classnames"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/store/store"
import { navigationToggle } from "@/layouts/layout-main/components/navigation/navigation.slice"

interface IButtonMenuProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

export const ButtonMenu: React.FC<IButtonMenuProps> = (props): JSX.Element => {
  const isNavigationOpen: boolean = useSelector(
    (state: RootState) => state.navigation.isNavigationOpen,
  )
  const dispatch = useDispatch()

  const toggleNavigationHandle = () => {
    dispatch(navigationToggle())
  }

  return (
    <button
      type={"button"}
      className={cn(css.button, {
        [css._active]: isNavigationOpen,
      })}
      onClick={toggleNavigationHandle}
      aria-label={"Navigation menu toggle"}
      {...props}
    >
      <MenuOutlined className={cn(css.icon, css._menu)} />
      <CloseOutlined className={cn(css.icon, css._close)} />
    </button>
  )
}
