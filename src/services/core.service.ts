import axios from "axios"

export class CoreService {
  API_URL = process.env.NEXT_PUBLIC_DOMAIN
  http = axios.create({
    baseURL: this.API_URL,
    timeout: 1000
  })
}