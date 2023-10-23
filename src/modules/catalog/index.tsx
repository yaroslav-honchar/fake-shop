import React, { type DetailedHTMLProps, type HTMLAttributes, type JSX } from "react"
// import css from "./catalog.module.css"
import { Section } from "@/components"

interface IProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Catalog: React.FC<IProps> = (): JSX.Element => {
  return <Section></Section>
}
