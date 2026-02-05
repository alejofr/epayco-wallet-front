import { Banknote, CreditCard, UserPlus, Wallet } from "lucide-react"
import { BottomNavItem } from "./BottomNavItem"

export const ToolBottomBar = () => {
  return (
    <nav className="ios-safe-bottom fixed bottom-0 w-full z-50 bg-background-light dark:bg-background-dark/80 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 flex justify-around items-center px-4 h-20 md:hidden">
      <BottomNavItem to="/client/new" icon={UserPlus} label="Registrarse" />
      <BottomNavItem to="/wallet/recharge" icon={CreditCard} label="Recargar" />
      <BottomNavItem to="/wallet" icon={Wallet} label="Consultar" end />
      <BottomNavItem to="/wallet/payment" icon={Banknote} label="Pagar" />
    </nav>
  )
}
