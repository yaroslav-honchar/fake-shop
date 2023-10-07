import { ProductsService } from "@/services/products.service"

export const getStaticPropsGlobal = async () => {
  const { data: categories } = await ProductsService.getCategories()

  return {
    categories,
  }
}