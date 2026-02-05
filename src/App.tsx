import { BrowserRouter, Outlet, Route, Routes } from "react-router"
import { Toaster } from "sonner"
import { Home } from "./features/welcome/components/Home"
import { ThemeProvider } from "./components/theme-provider"
import { LayoutMain } from "./components/layout/LayoutMain"
import { RegisterClient } from "./features/clients/components/RegisterClient"
import { BalanceWallet } from "./features/wallet/components/BalanceWallet"
import { RechargeWallet } from "./features/wallet/components/RechargeWallet"
import { PaymentWallet } from "./features/wallet/components/PaymentWallet"

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<LayoutMain />}>
            <Route index element={<Home />} />
            <Route path="client/new" element={<RegisterClient />} />
            <Route path="wallet/*" element={<Outlet />}>
              <Route index element={<BalanceWallet />} />
              <Route path="recharge" element={<RechargeWallet />} />
              <Route path="payment" element={<PaymentWallet />} />
            </Route>
          </Route>
        </Routes>
        <Toaster />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
