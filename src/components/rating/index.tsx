import React, { type DetailedHTMLProps, type HTMLAttributes, type JSX } from "react"
import css from "./rating.module.css"
import { StarFilled } from "@ant-design/icons"
import { IRating } from "@/interfaces"
import cn from "classnames"

interface IProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  rating: IRating
}

export const Rating: React.FC<IProps> = ({ rating }): JSX.Element => {
  return (
    <div className={cn(css.rating)}>
      <div className={cn(css.wrap)}>
        <ul className={cn(css.stars, css._gray)}>
          <li>
            <StarFilled />
          </li>
          <li>
            <StarFilled />
          </li>
          <li>
            <StarFilled />
          </li>
          <li>
            <StarFilled />
          </li>
          <li>
            <StarFilled />
          </li>
        </ul>
        <ul
          style={{
            width: `${(+rating.rate / 5) * 100}%`,
          }}
          className={cn(css.stars, css._filled)}
        >
          <li>
            <StarFilled />
          </li>
          <li>
            <StarFilled />
          </li>
          <li>
            <StarFilled />
          </li>
          <li>
            <StarFilled />
          </li>
          <li>
            <StarFilled />
          </li>
        </ul>
      </div>
      <div>({rating.count})</div>
    </div>
  )
}
