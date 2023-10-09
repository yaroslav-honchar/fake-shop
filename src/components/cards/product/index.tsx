"use client"

import React, { type DetailedHTMLProps, type HTMLAttributes, type JSX } from "react"
import css from "./card-product.module.css"
import { type IProduct } from "@/interfaces"
import Image from "next/image"

interface IProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  product: IProduct
}

export const CardProduct: React.FC<IProps> = ({ product }): JSX.Element => {
  const { title, price, category, image } = product
  console.log(image)

  return (
    <div className={css.card}>
      <div className={css.picture}>
        <Image
          className={css.img}
          src={image}
          alt={title}
          width={319}
          height={319}
        />
      </div>
      <div className={css.body}>
        <p className={css.title}>{title}</p>
        <p className={css.price}>${price}</p>
        <p className={css.category}>{category}</p>
      </div>
    </div>
  )
}
