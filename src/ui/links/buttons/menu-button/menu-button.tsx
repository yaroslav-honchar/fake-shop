import React, { type DetailedHTMLProps, type HTMLAttributes, type JSX, useContext } from "react"
import { CloseOutlined, MenuOutlined } from "@ant-design/icons"
import { AppContext } from "@/context/app.context"
import css from "./menu-button.module.css"
import cn from "classnames"

interface IMenuButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
}

export const MenuButton:
  React.FC<IMenuButtonProps> = (props): JSX.Element => {
  const { isNavigationOpen, toggleNavigationHandle } = useContext(AppContext)

  return (
    <button
      type={"button"}
      className={cn(css.button, {
        [css._active]: isNavigationOpen
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