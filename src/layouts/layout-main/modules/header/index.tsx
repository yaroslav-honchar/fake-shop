"use client"

import React, { type JSX, useEffect, useRef } from "react"
import { Navigation, Container } from "@/layouts/layout-main/components"
import { ButtonMenu, LinkButton, Logo } from "@/ui"
import css from "./header.module.css"

export const Header = (): JSX.Element => {
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--header-offset-height",
      headerRef.current?.offsetHeight + "px",
    )
  }, [])
  return (
    <header
      ref={headerRef}
      className={css.header}
    >
      <Container>
        <div className={css.header_row}>
          <div className={css.header_col}>
            <Logo
              className={css.header_logo}
              href={"/"}
            />
          </div>
          <div className={css.header_col}>
            <ButtonMenu />
            <Navigation />
          </div>
          <div className={css.header_col}>
            <LinkButton
              className={css.header_login_btn}
              href={"/"}
              styleType={"secondary"}
            >
              Login
            </LinkButton>
          </div>
        </div>
      </Container>
    </header>
  )
}
