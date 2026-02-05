import { BrowserRouter, Route, Routes } from "react-router"
import { Home } from "./features/welcome/components/Home"
import { ThemeProvider } from "./components/theme-provider"
import { LayoutMain } from "./components/layout/LayoutMain"

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<LayoutMain />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
