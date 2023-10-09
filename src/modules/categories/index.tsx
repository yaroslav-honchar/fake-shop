import React, { type DetailedHTMLProps, type HTMLAttributes, type JSX } from "react"
import css from "./categories.module.css"
import { useSelector } from "react-redux"
import { type RootState } from "@/store/store"
import Image from "next/image"
import { Container, Section } from "@/components"
import Link from "next/link"
import { Title } from "@/ui"

interface IProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Categories: React.FC<IProps> = (): JSX.Element => {
  const categories: string[] = useSelector((state: RootState) => state.products.categories)

  return (
    <Section className={css.categories}>
      <Container>
        <Title className={css.title} styleType={"section"} tag={"h2"}>Browse The Range</Title>
        <p className={css.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <ul className={css.grid}>
          {categories.map((category) => {
            const imageName = category.replace(/\s/g, "-").toLowerCase()

            return (
              <li
                key={category}
                className={css.item}
              >
                <Link
                  className={css.link}
                  href={"/"} >
                  <Image
                    className={css.img}
                    src={`/images/categories/${imageName}.jpg`}
                    alt={category}
                    width={476}
                    height={637}
                    aria-label={category}
                  />
                  <span>{category}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </Container>
    </Section>
  )
}
