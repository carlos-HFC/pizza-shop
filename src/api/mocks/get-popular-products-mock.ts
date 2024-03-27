import { http, HttpResponse } from "msw"

import { GetPopularProductsResponse } from "../get-popular-products"

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>("/metrics/popular-products", async () => {
  return HttpResponse.json([
    { product: "Mussarela", amount: 5 },
    { product: "Calabresa", amount: 4 },
    { product: "Pepperoni", amount: 10 },
    { product: "Marguerita", amount: 2 },
    { product: "4 Queijos", amount: 7 },
    { product: "Frango com Catupiry", amount: 1 },
  ])
})
