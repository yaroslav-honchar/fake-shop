"use client"

import React, {
  type DetailedHTMLProps,
  type HTMLAttributes,
  type JSX,
  useEffect,
  useState,
} from "react"
import css from "./catalog.module.css"
import { CardProduct, Container, Section } from "@/components"
import { useRouter } from "next/router"
import type { IProduct } from "@/interfaces"
import type { RootState } from "@/store/store"
import { useSelector } from "react-redux"
import { Select } from "antd"
import cn from "classnames"

interface IProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Catalog: React.FC<IProps> = (): JSX.Element => {
  const router = useRouter()
  const { query } = router
  console.log(router)

  const products: IProduct[] = useSelector((state: RootState) => state.products.products)
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([])

  useEffect(() => {
    setFilteredProducts(
      products
        .filter((product: IProduct) => {
          return product.category === query?.category
        })
        // .sort((a: IProduct, b: IProduct) => {
        //   switch (query.sort) {
        //     case "low":
        //       return -1
        //     // return +parseFloat(a.price.toString()) - +parseFloat(b.price.toString())
        //     case "high":
        //       return 1
        //     // return +parseFloat(a.price.toString()) + +parseFloat(b.price.toString())
        //     default:
        //       return -1
        //     // return +parseFloat(a.price.toString()) - +parseFloat(b.price.toString())
        //   }
        // }),
    )
  }, [products, query])

  const sortHandle = (sort: string) => {
    router.push({
      pathname: router.route,
      query: { ...query, sort },
    })
  }

  return (
    <Section className={css.catalog}>
      <Container>
        <div className={css.head}>
          <div className={cn(css.head_item, css._last)}>
            <Select
              defaultValue="Sort"
              onChange={sortHandle}
              options={[
                { value: "rating", label: "Rating" },
                { value: "low", label: "Sort from low to high price" },
                { value: "high", label: "Sort from high to low price" },
              ]}
            />
          </div>
        </div>
        <div className={css.body}>
          <div className={css.filter_container}></div>
          <div className={css.content_container}>
            <ul className={css.list}>
              {filteredProducts?.length &&
                filteredProducts.map((product: IProduct): JSX.Element => {
                  return (
                    <li key={product.id}>
                      <CardProduct product={product} />
                    </li>
                  )
                })}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  )
}
