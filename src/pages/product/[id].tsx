import Head from "next/head"
import { type JSX } from "react"
import { GetStaticPaths, type GetStaticProps } from "next"
import { withLayout } from "@/layouts/layout-main"
import { getStaticPropsGlobal } from "@/lib"
import { Products, SingleProduct } from "@/modules"
import { IProduct, IStaticPropsGlobalInterface } from "@/interfaces"
import { ProductsService } from "@/services/products.service"
import { routes } from "@/routes"

function ProductPage({ product }: ProductPageProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Fake shop | Product</title>
      </Head>
      <SingleProduct product={product} />
      <Products />
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
