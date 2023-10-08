import React, { type JSX } from "react"
import css from "./footer.module.css"
import { Container } from "@/layouts/layout-main/components"
import { Socials } from "@/components"
import { Title } from "@/ui/topography/title"
import { useSelector } from "react-redux"
import { RootState } from "@/store/store"
import Link from "next/link"
import { routes } from "@/routes"
import { Logo } from "@/ui"
import cn from "classnames"

export const Footer = (): JSX.Element => {
  const categories: string[] = useSelector((state: RootState) => state.products.categories)
  const currentYear = new Date().getFullYear()

  return (
    <footer className={css.footer}>
      <Container>
        <div className={css.footer_top}>
          <div className={css.footer_row}>
            <div className={cn(css.footer_col, css._col_descr, "me-auto")}>
              <Logo
                className={css.footer_logo}
                href={routes.home}
              />
              <div className={css.footer_descr}>
                <p>
                  This website is part of our pet project and is created solely for educational and
                  demonstration purposes. All products, prices, and other information on this
                  website are fictional and for demonstration purposes only. We are not a real
                  online store and do not sell any products or services. Please do not enter
                  personal information or make any payments for any products on this website, as it
                  is purely an educational project.
                </p>
              </div>
            </div>
            <div className={cn(css.footer_col, css._col_auto, "me-auto")}>
              <Title
                tag={"span"}
                styleType={"box"}
                styleColor={"secondary"}
                className={css.footer_links_title}
              >
                Categories
              </Title>

              <ul className={css.footer_links_list}>
                {categories.map((category: string) => (
                  <li
                    key={category}
                    className={css.footer_links_item}
                  >
                    <Link
                      href={category}
                      className={css.footer_link}
                    >
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className={cn(css.footer_col, css._col_auto)}>
              <Title
                tag={"span"}
                styleType={"box"}
                styleColor={"secondary"}
                className={css.footer_links_title}
              >
                Help
              </Title>
              <ul className={css.footer_links_list}>
                <li className={css.footer_links_item}>
                  <Link
                    href={routes.about}
                    className={css.footer_link}
                  >
                    About us
                  </Link>
                </li>
                <li className={css.footer_links_item}>
                  <Link
                    href={routes.contacts}
                    className={css.footer_link}
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={css.footer_bottom}>
          <div className={css.footer_row}>
            <div className={cn(css.footer_col, css._col_copyright)}>
              <p>{currentYear} Fake shop. All rights reserved</p>
            </div>
            <div className={cn(css.footer_col, css._col_socials, css._col_items_center)}>
              <Socials />
            </div>
            <div className={cn(css.footer_col, css._col_items_end, css._col_policy)}>
              <Link
                href={routes.privacy_policy}
                className={css.footer_link}
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
