import { api } from "@/lib/axios"

export interface UpdateProfileRequest {
  name: string
  description: string
}

export async function updateProfile({
  description,
  name,
}: UpdateProfileRequest) {
  await api.put("/profile", {
    name,
    description,
  })
}
