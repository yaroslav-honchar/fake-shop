"use client"

import React, { type DetailedHTMLProps, type HTMLAttributes, type JSX } from "react"
import css from "./products.module.css"
import { useSelector } from "react-redux"
import { type RootState } from "@/store/store"
import { Container, Section, ProductsSlider } from "@/components"
import { type IProduct } from "@/interfaces"

interface IProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Products: React.FC<IProps> = (): JSX.Element => {
  const products: IProduct[] = useSelector((state: RootState) => state.products.products)

  return (
    <Section className={css.products}>
      <Container>
        <ProductsSlider
          products={products}
          sectionTitle={"Our products"}
        />
      </Container>
    </Section>
  )
}
