"use client"

import React, { type DetailedHTMLProps, type HTMLAttributes, type JSX } from "react"
import { useSelector } from "react-redux"
import { type RootState } from "@/store/store"
import { Container, Section, ProductsSlider } from "@/components"
import { type IProduct } from "@/interfaces"

interface IProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const WatchedProducts: React.FC<IProps> = (): JSX.Element => {
  const products: IProduct[] = useSelector((state: RootState) => state.products.watched)

  return (
    <Section>
      <Container>
        <ProductsSlider
          products={products}
          sectionTitle={"Watched products"}
        />
      </Container>
    </Section>
  )
}
