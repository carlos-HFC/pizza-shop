import { http, HttpResponse } from "msw"

import {
  GetOrderDetailsRequest,
  GetOrderDetailsResponse,
} from "../get-order-details"

export const getOrderDetailsMock = http.get<
  GetOrderDetailsRequest,
  never,
  GetOrderDetailsResponse
>("/orders/:orderId", async ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: "John Doe",
      email: "john.doe@email.com",
      phone: "1112345678",
    },
    status: "pending",
    createdAt: new Date().toISOString(),
    totalInCents: 2400 + 2800 * 2,
    orderItems: [
      {
        id: "item-1",
        priceInCents: 2400,
        product: { name: "Pizza Mussarela" },
        quantity: 1,
      },
      {
        id: "item-2",
        priceInCents: 2800,
        product: { name: "Pizza Pepperoni" },
        quantity: 2,
      },
    ],
  })
})
