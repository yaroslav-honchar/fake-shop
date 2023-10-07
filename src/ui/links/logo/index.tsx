import React, { type JSX } from "react"
import Link, { LinkProps } from "next/link"
import cn from "classnames"
import css from "./logo.module.css"

interface ILogoProps extends LinkProps {
  className?: string
  props?: LinkProps
}

export const Logo: React.FC<ILogoProps> = (
  {
    href,
    className,
    props,
  },
): JSX.Element => {
  return (
    <Link
      href={href}
      className={cn(css.logo, className)}
      {...props}
    >
      <span
        className={css.logo_value_absolute}
      >
        FAKE
      </span>
      <span>
        SHOP
      </span>
    </Link>
  )
}