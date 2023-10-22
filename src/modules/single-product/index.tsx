import React, { type DetailedHTMLProps, type HTMLAttributes, type JSX } from "react"
import css from "./single-product.module.css"
import { IProduct } from "@/interfaces"
import { Container } from "@/components"
import Image from "next/image"
import { Rating } from "@/components/rating"

interface IProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  product: IProduct
}

export const SingleProduct: React.FC<IProps> = ({ product }): JSX.Element => {
  const { title, price, image, rating, description } = product

  return (
    <>
      {product && (
        <section className={css.section}>
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
                <h1 className={css.title}>{title}</h1>
                <h2 className={css.price}>{price}$</h2>

                <Rating rating={rating} />
                <div>
                  <p>{description}</p>
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}
    </>
  )
}
