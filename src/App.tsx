import "./global.css"

import { QueryClientProvider } from "@tanstack/react-query"
import { Helmet, HelmetProvider } from "react-helmet-async"
import { RouterProvider } from "react-router-dom"
import { Toaster } from "sonner"

import { ThemeProvider } from "./components/theme/theme-provider"
import { queryClient } from "./lib/react-query"
import { router } from "./pages/routes"

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="@pizza-shop-theme">
        <Helmet titleTemplate="%s | pizza.shop" />
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
        <Toaster richColors />
      </ThemeProvider>
    </HelmetProvider>
  )
}
