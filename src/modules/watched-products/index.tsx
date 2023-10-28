"use client"

import React, { type DetailedHTMLProps, type HTMLAttributes, type JSX } from "react"
import css from "./products.module.css"
import { useSelector } from "react-redux"
import { type RootState } from "@/store/store"
import { Container, Section } from "@/components"
import { Title } from "@/ui"
import { type IProduct } from "@/interfaces"
import { CardProduct } from "@/components/cards/product"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import { ButtonSlider } from "@/ui"
import cn from "classnames"

interface IProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const WatchedProducts: React.FC<IProps> = (): JSX.Element => {
  const products: IProduct[] = useSelector((state: RootState) => state.products.watched)

  return (
    <Section className={css.products}>
      <Container>
        <div className={css.head}>
          <div className={css.head_row}>
            <div className={cn(css.head_col, css._col_title)}>
              <Title
                className={css.title}
                styleType={"section"}
                tag={"h2"}
              >
                Watched products
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
                slidesPerView: 2
              },
              820: {
                slidesPerView: 3
              },
              1200: {
                slidesPerView: 4
              }
            }}
          >
            {products.map((product: IProduct) => (
              <SwiperSlide key={product.id}>
                <CardProduct product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </Section>
  )
}
