import Head from "next/head"
import { type JSX } from "react"
import { GetStaticProps } from "next"
import axios from "axios"
import { withLayout } from "@/layouts/layout-main"

function HomePage(): JSX.Element {
  return (
    <>
      <Head>
        <title>Fake shop | Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
      </div>
    </>
  )
}

export default withLayout(HomePage)

export const getStaticProps: GetStaticProps = async () => {
  const { data: categories } = await axios.get(process.env.NEXT_PUBLIC_DOMAIN + "/products/categories")

  return {
    props: {
      categories,
    },
  }
}

interface HomePageProps extends Record<string, unknown> {
  categories: string[]
}