import { CoreService } from "@/services/core.service"
import { type IProduct } from "@/interfaces"

class Products extends CoreService {
  PRODUCTS_URL = this.API_URL + "/products/"

  async getCategories() {
    return this.http.get<string[]>(this.PRODUCTS_URL + "categories")
  }

  async getByCategory(category: string) {
    return this.http.get<IProduct[]>(this.PRODUCTS_URL + "category/" + category)
  }

  async getById(id: number | string) {
    return this.http.get<IProduct>(this.PRODUCTS_URL + id)
  }

  async getAll() {
    return this.http.get<IProduct[]>(this.PRODUCTS_URL)
  }
}

export const ProductsService = new Products()
