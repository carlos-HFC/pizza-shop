import { Helmet, HelmetProvider } from "react-helmet-async"
import { RouterProvider } from "react-router-dom"
import { Toaster } from "sonner"

import { router } from "./pages/routes"

import "./global.css"

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.shop" />
      <RouterProvider router={router} />
      <Toaster richColors />
    </HelmetProvider>
  )
}
