import Head from "next/head"
import { type JSX } from "react"
import { type GetStaticProps } from "next"
import { withLayout } from "@/layouts/layout-main"
import { getStaticPropsGlobal } from "@/lib"
import { type IStaticPropsGlobalInterface } from "@/interfaces"

function HomePage(): JSX.Element {
  return (
    <>
      <Head>
        <title>Fake shop | Home</title>
      </Head>
      <div></div>
    </>
  )
}

export default withLayout(HomePage)

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      ...(await getStaticPropsGlobal()),
    },
  }
}

interface HomePageProps extends IStaticPropsGlobalInterface {}
