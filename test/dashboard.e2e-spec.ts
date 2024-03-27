import { expect, test } from "@playwright/test"

test("display day orders amount metrics", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" })

  expect(page.getByText("12", { exact: true }))
  expect(page.getByText("-5% em relação a ontem", { exact: true }))
})

test("display month orders amount metrics", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" })

  expect(page.getByText("20.000", { exact: true }))
  expect(page.getByText("-5% em relação ao mês passado", { exact: true }))
})

test("display month canceled orders amount metrics", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" })

  expect(page.getByText("200", { exact: true }))
  expect(page.getByText("-4.5% em relação ao mês passado", { exact: true }))
})

test("display month revenue metrics", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" })

  expect(page.getByText("R$ 4.595,88", { exact: true }))
  expect(page.getByText("+50% em relação ao mês passado", { exact: true }))
})

// test("sign in with wrong credentials", async ({ page }) => {
//   await page.goto("/sign-in", { waitUntil: "networkidle" })

//   await page.getByLabel("Seu e-mail").fill("jane.doe@email.com")
//   await page.getByRole("button", { name: "Acessar painel" }).click()

//   const toast = page.getByText("Credenciais inválidas")

//   expect(toast).toBeVisible()
// })

// test("navigate to new restaurant page", async ({ page }) => {
//   await page.goto("/sign-in", { waitUntil: "networkidle" })

//   await page.getByRole("link", { name: "Novo estabelecimento" }).click()

//   expect(page.url()).toContain("/sign-up")
// })
