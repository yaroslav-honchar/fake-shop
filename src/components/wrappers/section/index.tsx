import React, { type DetailedHTMLProps, type HTMLAttributes, type JSX } from "react"
import css from "./wrapper-section.module.css"
import cn from "classnames"

interface IProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Section: React.FC<IProps> = ({children, className}): JSX.Element => {
  return <section className={cn(css.section, className)}>{children}</section>
}
