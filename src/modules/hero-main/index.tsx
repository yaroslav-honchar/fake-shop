import React, { type JSX } from "react"
import { Container } from "@/layouts/layout-main/components"
import css from "./hero.module.css"
import { LinkButton, Title } from "@/ui"

export const HeroMain = (): JSX.Element => {
  return (
    <section className={css.hero}>
      <div className={css.hero_bg}>
        <video
          className={css.hero_bg_video}
          width={1800}
          height={812}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={"/videos/berska_video.mp4"} />
        </video>
      </div>
      <Container className={css.hero_container}>
        <div className={css.hero_content_box}>
          <Title
            styleType={"block"}
            styleColor={"secondary"}
            tag={"span"}
            withLine={true}
          >
            New Arrival
          </Title>
          <Title
            styleType={"main"}
            tag={"h1"}
          >
            Discover Our <br /> New Collection
          </Title>
          <p>
            Welcome to our fashionable world! Explore an exquisite selection of clothing that knows
            no bounds and transcends styles and trends. In our store, you'll find everything from
            elegant dresses to sporty outfits. You're not just buying clothes – you're choosing a
            lifestyle. Choose us for your brightest moments in fashion!
          </p>

          <LinkButton href={"/"}>Catalog</LinkButton>

          <div className={css.hero_thanks_box}>
            <p>
              Video from website{" "}
              <a
                href="https://www.bershka.com/"
                target={"_blank"}
              >
                BERSHKA
              </a>{" "}
              shop
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
