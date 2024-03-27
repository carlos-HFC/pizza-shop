import { expect, test } from "@playwright/test"

test("update profile successfully", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" })

  await page.getByRole("button", { name: "Pizza Shop" }).click()
  await page.getByRole("menuitem", { name: "Perfil da loja" }).click()

  await page.getByLabel("Nome").fill("Carlos Pizza")
  await page.getByLabel("Descrição").fill("Custom description")
  await page.getByRole("button", { name: "Salvar" }).click()

  await page.waitForLoadState("networkidle")

  const toast = page.getByText("Perfil atualizado com sucesso")

  expect(toast).toBeVisible()

  await page.getByRole("button", { name: "Close" }).click()

  expect(page.getByRole("button", { name: "Carlos Pizza" })).toBeVisible()
})

test("update profile with wrong", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" })

  await page.getByRole("button", { name: "Pizza Shop" }).click()
  await page.getByRole("menuitem", { name: "Perfil da loja" }).click()

  await page.getByLabel("Nome").fill("Custom Pizza")
  await page.getByLabel("Descrição").fill("Custom description")
  await page.getByRole("button", { name: "Salvar" }).click()

  await page.waitForLoadState("networkidle")

  const toast = page.getByText("Falha ao atualizar o perfil, tente novamente")

  expect(toast).toBeVisible()
})
