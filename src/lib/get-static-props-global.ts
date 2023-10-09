import { ProductsService } from "@/services/products.service"

export const getStaticPropsGlobal = async () => {
  const { data: categories } = await ProductsService.getCategories()

  /*
   * I could do not do this, but the API has only 20 product items
   * So I guess it better than always send a requests
   * */
  const { data: products } = await ProductsService.getAll()

  return {
    categories,
    products,
  }
}
