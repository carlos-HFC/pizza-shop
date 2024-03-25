import { Helmet, HelmetProvider } from "react-helmet-async"
import { RouterProvider } from "react-router-dom"
import { Toaster } from "sonner"

import { ThemeProvider } from "./components/theme/theme-provider"

import { router } from "./pages/routes"

import "./global.css"

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="@pizza-shop-theme">
        <Helmet titleTemplate="%s | pizza.shop" />
        <RouterProvider router={router} />
        <Toaster richColors />
      </ThemeProvider>
    </HelmetProvider>
  )
}
