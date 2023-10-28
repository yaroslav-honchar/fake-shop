"use client"

import React, { type DetailedHTMLProps, type HTMLAttributes, type JSX } from "react"
import css from "./products-slider.module.css"
import cn from "classnames"
import { CardProduct } from "@/components"
import { ButtonSlider, Title } from "@/ui"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import type { IProduct } from "@/interfaces"

interface IProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  products: IProduct[]
  sectionTitle: string
}

export const ProductsSlider: React.FC<IProps> = ({ products, sectionTitle }): JSX.Element => {
  return (
    <>
      <div className={css.head}>
        <div className={css.head_row}>
          <div className={cn(css.head_col, css._col_title)}>
            <Title
              className={css.title}
              styleType={"section"}
              tag={"h2"}
            >
              {sectionTitle}
            </Title>
          </div>
          <div className={cn(css.head_col, css._col_btns)}>
            <ButtonSlider
              className={"products-prev"}
              vector={"prev"}
            />
            <ButtonSlider
              className={"products-next"}
              vector={"next"}
            />
          </div>
        </div>
      </div>
      <div className={css.slider_wrapper}>
        <Swiper
          modules={[Navigation]}
          className={css.slider}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            prevEl: ".products-prev",
            nextEl: ".products-next",
          }}
          breakpoints={{
            576: {
              slidesPerView: 2,
            },
            820: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
        >
          {products.map((product: IProduct) => (
            <SwiperSlide key={product.id}>
              <CardProduct product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}
