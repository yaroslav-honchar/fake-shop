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
import "swiper/css"
// import { CaretDownOutlined } from "@ant-design/icons"

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

        <div
            className={css.slider_wrapper}
        >
        <Swiper
            className={css.slider}
          spaceBetween={30}
          slidesPerView={4}
        >
          {products.map((product: IProduct) => (
            <SwiperSlide key={product.id}>
              <CardProduct product={product} />
            </SwiperSlide>
          ))}
        </Swiper>

          {/*<button>*/}
          {/*  <CaretDownOutlined />*/}
          {/*</button>*/}
        </div>
      </Container>
    </Section>
  )
}
