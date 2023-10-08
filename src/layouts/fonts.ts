import { Roboto, Poppins } from "next/font/google"

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
})

const poppins = Poppins({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
})

export { roboto, poppins }
