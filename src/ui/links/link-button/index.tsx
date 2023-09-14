import React, { type JSX, type ReactNode } from "react"
import Link, { LinkProps } from "next/link"
import cn from "classnames"
import css from "@/ui/button.module.css"

interface ILinkButtonProps extends LinkProps {
  styleType?: "primary" | "secondary" | "ghost"
  children: ReactNode
  className?: string
}

export const LinkButton: React.FC<ILinkButtonProps> = (
  {
    href,
    className,
    children,
    styleType = "primary",
  },
): JSX.Element => {
  return (
    <Link
      href={href}
      className={cn(css.btn, className, {
        [css.primary]: styleType === "primary",
        [css.secondary]: styleType === "secondary",
        [css.ghost]: styleType === "ghost",
      })}
    >
      {children}
    </Link>
  )
}