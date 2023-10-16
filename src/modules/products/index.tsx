"use client"

import React, {type DetailedHTMLProps, type HTMLAttributes, type JSX} from "react"
import css from "./products.module.css"
import {useSelector} from "react-redux"
import {type RootState} from "@/store/store"
import {Container, Section} from "@/components"
import {Title} from "@/ui"
import {type IProduct} from "@/interfaces"
import {CardProduct} from "@/components/cards/product"
import {Swiper, SwiperSlide} from "swiper/react"
import {Navigation} from "swiper/modules"
import "swiper/css"
import {ButtonSlider} from "@/ui"
import cn from "classnames"

interface IProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
}

export const Products: React.FC<IProps> = (): JSX.Element => {
  const products: IProduct[] = useSelector((state: RootState) => state.products.products)

  return (
      <Section className={css.products}>
        <Container>
          <div className={css.head}>
            <div className={css.top_row}>
              <div className={css.top_col}>
                <Title
                    className={css.title}
                    styleType={"section"}
                    tag={"h2"}
                >
                  Top sales
                </Title>
              </div>
              <div className={cn(css.top_col, css._col_buttons)}>
                <div className={css.top_row}>
                  <div className={css.top_col}>
                    <ButtonSlider
                        className={cn(css.products_btn, css._prev, "products_btn _prev")}
                        vector={"prev"}
                    />
                  </div>
                  <div className={css.top_col}>
                    <ButtonSlider
                        className={cn(css.products_btn, css._next, "products_btn _next")}
                        vector={"next"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={css.slider_wrapper}>
            <Swiper
                modules={[Navigation]}
                className={css.slider}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                  1200: {
                    slidesPerView: 4
                  },
                  768: {
                    slidesPerView: 3
                  },
                  576: {
                    slidesPerView: 2
                  }
                }}
                navigation={{
                  prevEl: ".products_btn._prev",
                  nextEl: ".products_btn._next",
                }}
            >
              {products.map((product: IProduct) => (
                  <SwiperSlide key={product.id}>
                    <CardProduct product={product}/>
                  </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Container>
      </Section>
  )
}
