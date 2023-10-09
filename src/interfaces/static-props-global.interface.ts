import { type IProduct } from "@/interfaces/product.interface"

export interface IStaticPropsGlobalInterface extends Record<string, unknown> {
  categories: string[]
  products: IProduct[]
}
