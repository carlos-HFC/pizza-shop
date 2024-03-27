import { http, HttpResponse } from "msw"

import { GetManagedRestaurantResponse } from "../get-managed-restaurant"

export const getManagedRestaurantMock = http.get<
  never,
  never,
  GetManagedRestaurantResponse
>("/managed-restaurant", async () => {
  return HttpResponse.json({
    id: "custom-id",
    createdAt: new Date(),
    name: "Pizza Shop",
    updatedAt: null,
    description: "Custom description",
    managerId: "custom-manager-id",
  })
})
