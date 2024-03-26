import { api } from "@/lib/axios"

export interface GetOrdersRequest {
  customerName?: string | null
  orderId?: string | null
  status?: string | null
  pageIndex?: number | null
}

export interface GetOrdersResponse {
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

export async function getOrders({
  pageIndex,
  customerName,
  orderId,
  status,
}: GetOrdersRequest) {
  const response = await api.get<GetOrdersResponse>("/orders", {
    params: {
      pageIndex,
      customerName,
      orderId,
      status: status === "all" ? null : status,
    },
  })

  return response.data
}
