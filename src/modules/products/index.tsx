import React, { type DetailedHTMLProps, type HTMLAttributes, type JSX } from "react"
import css from "./products.module.css"
import { useSelector } from "react-redux"
import { type RootState } from "@/store/store"
import { Container, Section } from "@/components"
import { Title } from "@/ui"
import { type IProduct } from "@/interfaces"
import { CardProduct } from "@/components/cards/product"

interface IProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Products: React.FC<IProps> = (): JSX.Element => {
  const products: IProduct[] = useSelector((state: RootState) => state.products.products)

  return (
    <Section className={css.products}>
      <Container>
        <Title
          className={css.title}
          styleType={"section"}
          tag={"h2"}
        >
          Our Products
        </Title>
        <ul className={css.row}>
          {products.map((product: IProduct) => (
            <li
              key={product.id}
              className={css.col}
            >
              <CardProduct product={product} />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
