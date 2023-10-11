import React, { type DetailedHTMLProps, type HTMLAttributes, type JSX } from "react"
import css from "./button-slider.module.css"
import { CaretDownOutlined } from "@ant-design/icons"
import cn from "classnames"

interface IProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  vector: "prev" | "next"
}

export const ButtonSlider: React.FC<IProps> = ({ vector, className }): JSX.Element => {
  return (
    <button
      className={cn(css.btn, className, {
        [css._prev]: vector === "prev",
        [css._next]: vector === "next",
      })}
      type={"button"}
      aria-label={`Change to ${vector} slide`}
    >
      <CaretDownOutlined className={css.icon} />
    </button>
  )
}
