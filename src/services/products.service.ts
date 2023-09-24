import { CoreService } from "@/services/core.service"

class Products extends CoreService {
  PRODUCTS_URL: string = "/products/"

  async getCategories() {
    return this.http.get<string[]>(this.PRODUCTS_URL + "categories")
  }

  async getByCategory() {
  }

  async getById() {
  }

  async getAll() {
  }
}

export const ProductsService = new Products()