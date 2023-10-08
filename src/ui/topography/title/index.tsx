import React, { type DetailedHTMLProps, type HTMLAttributes, type JSX } from "react"
import css from "./title.module.css"
import cn from "classnames"

interface IProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  styleType: "box" | "block" | "section" | "main"
  styleColor?: "primary" | "secondary"
  withLine?: boolean
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span"
}

export const Title: React.FC<IProps> = ({
  children,
  className,
  tag = "h2",
  styleType,
                                          withLine = false,
                                          styleColor,
}): JSX.Element => {
  const classNames = cn(className, css.title, {
    [css._box]: styleType === "box",
    [css._block]: styleType === "block",
    [css._section]: styleType === "section",
    [css._main]: styleType === "main",
    [css._color_primary]: styleColor === "primary",
    [css._color_secondary]: styleColor === "secondary",
    [css._with_line]: withLine,
  })

  switch (tag) {
    case "h1":
      return <h1 className={classNames}>{children}</h1>
    case "h2":
      return <h2 className={classNames}>{children}</h2>
    case "h3":
      return <h3 className={classNames}>{children}</h3>
    case "h4":
      return <h4 className={classNames}>{children}</h4>
    case "h5":
      return <h5 className={classNames}>{children}</h5>
    case "h6":
      return <h6 className={classNames}>{children}</h6>
    case "span":
      return <span className={classNames}>{children}</span>
  }
}
