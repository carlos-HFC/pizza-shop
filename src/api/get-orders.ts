import { api } from "@/lib/axios"

export interface GetOrdersRequest {
  // customerName: string
  // orderId: string
  // status: string
  pageIndex?: number | null
}

interface GetOrdersResponse {
  orders: {
    orderId: string
    createdAt: string
    status: "pending" | "canceled" | "processing" | "delivering" | "delivered"
    customerName: string
    total: number
  }[]
  meta: {
    pageIndex: number
    perPage: number
    totalCount: number
  }
}

export async function getOrders({ pageIndex }: GetOrdersRequest) {
  const response = await api.get<GetOrdersResponse>("/orders", {
    params: {
      pageIndex: pageIndex ?? 0,
    },
  })

  return response.data
}
