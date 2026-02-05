import { BrowserRouter, Route, Routes } from "react-router"
import { Toaster } from "sonner"
import { Home } from "./features/welcome/components/Home"
import { ThemeProvider } from "./components/theme-provider"
import { LayoutMain } from "./components/layout/LayoutMain"
import { RegisterClient } from "./features/clients/components/RegisterClient"

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<LayoutMain />}>
            <Route index element={<Home />} />
            <Route path="client/new" element={<RegisterClient />} />
          </Route>
        </Routes>
        <Toaster />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
