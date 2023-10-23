"use client"

import React, { type DetailedHTMLProps, type HTMLAttributes, type JSX } from "react"
import css from "./single-product.module.css"
import { IProduct } from "@/interfaces"
import { Container, Section } from "@/components"
import Image from "next/image"
import { Rating } from "@/components/rating"
import { useRouter } from "next/router"

interface IProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  product: IProduct
}

export const SingleProduct: React.FC<IProps> = ({ product }): JSX.Element => {
  const router = useRouter()
  const { title, price, image, rating, description } = product

  console.log(router)
  // product

  return (
    <>
      {product && (
        <Section>
          <Container>
            <div className={css.wrapper}>
              <div className={css.picture}>
                <Image
                  src={image}
                  alt={title}
                  width={300}
                  height={300}
                />
              </div>
              <div className={css.descr}>
                <Rating rating={rating} />

                <h1 className={css.title}>{title}</h1>
                <h2 className={css.price}>
                  {new Intl.NumberFormat("en-IN", { style: "currency", currency: "USD" }).format(
                    price,
                  )}
                </h2>

                <div>
                  <p>{description}</p>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      )}
    </>
  )
}
