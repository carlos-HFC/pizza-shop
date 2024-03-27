import { http, HttpResponse } from "msw"

import { UpdateProfileRequest } from "../update-profile"

export const updateProfileMock = http.put<never, UpdateProfileRequest>(
  "/profile",
  async ({ request }) => {
    const { name } = await request.json()

    if (name === "Carlos Pizza") {
      return new HttpResponse(null, {
        status: 204,
      })
    }

    return new HttpResponse(null, { status: 400 })
  },
)
