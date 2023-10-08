import React, { type JSX } from "react"
import css from "./socials.module.css"
import { GithubOutlined } from "@ant-design/icons"

export const Socials = (): JSX.Element => {
  return (
    <div className={css.socials}>
      <ul className={css.socials_list}>
        <li className={css.socials_item}>
          <a
            className={css.socials_link}
            href="https://github.com/yaroslav-honchar"
            target={"_blank"}
            aria-label={"Github account"}
          >
            <GithubOutlined className={css.socials_link_icon} />
          </a>
        </li>
      </ul>
    </div>
  )
}
