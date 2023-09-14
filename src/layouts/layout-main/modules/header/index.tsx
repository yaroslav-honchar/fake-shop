"use client"

import React, { type JSX } from "react"
import { Logo } from "@/ui/links/logo/logo"
import { Container } from "@/layouts/layout-main/components/container"
import css from "./header.module.css"
import { Navigation } from "@/layouts/layout-main/components/navigation"
import { LinkButton } from "@/ui/links/link-button"
import { MenuButton } from "@/ui/links/buttons/menu-button/menu-button"

export const Header = (): JSX.Element => {

  return (
    <header className={css.header}>
      <Container>
        <div className={css.header_row}>
          <div className={css.header_col}>
            <Logo className={css.header_logo} href={"/"} />
          </div>
          <div className={css.header_col}>
            <MenuButton />
            <Navigation />
          </div>
          <div className={css.header_col}>
            <LinkButton
              className={css.header_login_btn}
              href={"/"} styleType={"secondary"}>Login</LinkButton>
          </div>
        </div>
      </Container>
    </header>
  )
}