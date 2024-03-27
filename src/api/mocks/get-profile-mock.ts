import { http, HttpResponse } from "msw"

import { GetProfileResponse } from "../get-profile"

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  "/me",
  async () => {
    return HttpResponse.json({
      id: "custom-id",
      createdAt: new Date(),
      email: "john.doe@email.com",
      name: "John Doe",
      phone: "1111111111",
      role: "manager",
      updatedAt: null,
    })
  },
)
