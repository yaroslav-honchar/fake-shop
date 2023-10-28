import Head from "next/head"
import { type JSX } from "react"
import type { GetStaticPaths, GetStaticProps } from "next"
import type { IProduct, IStaticPropsGlobalInterface } from "@/interfaces"
import { withLayout } from "@/layouts/layout-main"
import { getStaticPropsGlobal } from "@/lib"
import { SingleProduct, WatchedProducts } from "@/modules"
import { ProductsService } from "@/services/products.service"
import { routes } from "@/routes"

function ProductPage({ product }: ProductPageProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Fake shop | Product</title>
      </Head>
      <SingleProduct product={product} />
      <WatchedProducts />
    </>
  )
}

export default withLayout(ProductPage)

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: products } = await ProductsService.getAll()

  return {
    paths: products.map((product) => routes.product + product.id.toString()),
    fallback: "blocking",
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data: product } = await ProductsService.getById(params?.id ? params?.id.toString() : "")

  if (!product) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      ...(await getStaticPropsGlobal()),
      product: product,
    },
  }
}

interface ProductPageProps extends IStaticPropsGlobalInterface {
  product: IProduct
}
