import React, { type DetailedHTMLProps, type HTMLAttributes, type JSX } from "react"
import cn from "classnames"
import css from "./container.module.css"

interface IContainerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: "fluid"
}

export const Container: React.FC<IContainerProps> = (
  {
    className,
    children,
    size,
  },
): JSX.Element => {
  return (
    <div className={cn(css.container,
      className,
      {
        [css._fluid]: size === "fluid",
      },
    )}>
      {children}
    </div>
  )
}