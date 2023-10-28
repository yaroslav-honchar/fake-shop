"use client"

import React, { type DetailedHTMLProps, type HTMLAttributes, type JSX } from "react"
import css from "./card-product.module.css"
import { type IProduct } from "@/interfaces"
import Image from "next/image"
import { HeartOutlined, ShareAltOutlined, ShoppingCartOutlined } from "@ant-design/icons"
import { routes } from "@/routes"

interface IProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  product: IProduct
}

export const CardProduct: React.FC<IProps> = ({ product }): JSX.Element => {
  const { title, price, category, image, id } = product

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
        <div className={css.controls}>
          <button
            type={"button"}
            aria-label={"Like"}
            className={css.btn}
          >
            <HeartOutlined className={css.icon} />
          </button>
          <button
            type={"button"}
            aria-label={"Add to cart"}
            className={css.btn}
          >
            <ShoppingCartOutlined className={css.icon} />
          </button>
          <button
            type={"button"}
            aria-label={"Add to cart"}
            className={css.btn}
          >
            <ShareAltOutlined className={css.icon} />
          </button>
        </div>
      </div>
      <div className={css.body}>
        <a
          href={routes.product + id}
          className={css.title}
        >
          {title}
        </a>
        <p className={css.price}>
          {price}
          {/*{new Intl.NumberFormat("en-IN", { style: "currency", currency: "USD" }).format(price)}*/}
        </p>
        <p className={css.category}>{category}</p>
      </div>
    </div>
  )
}
