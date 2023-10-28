import Head from "next/head"
import { type JSX } from "react"
import { type GetStaticProps } from "next"
import { withLayout } from "@/layouts/layout-main"
import { getStaticPropsGlobal } from "@/lib"
import { Catalog } from "@/modules"

function CatalogPage(): JSX.Element {
  return (
    <>
      <Head>
        <title>Fake shop | Catalog</title>
      </Head>
      <Catalog />
    </>
  )
}

export default withLayout(CatalogPage)

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      ...(await getStaticPropsGlobal()),
    },
  }
}
