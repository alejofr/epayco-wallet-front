import { Banknote, CreditCard, UserPlus, Wallet } from "lucide-react"

export const ToolBottomBar = () => {
  return (
    <nav className="ios-safe-bottom absolute bottom-0 w-full bg-background-light dark:bg-background-dark/80 border-t border-slate-200 dark:border-slate-800 flex justify-around items-center px-4 h-20 z-20 md:hidden">
      {/* Registrarse */}
      <button className="flex flex-col items-center gap-1 text-secondary">
        <UserPlus className="h-6 w-6" />
        <span className="text-[10px] font-bold">Registrarse</span>
      </button>

      {/* Recargar */}
      <button className="flex flex-col items-center gap-1 text-slate-400 dark:text-[#9da6b9] hover:text-primary dark:hover:text-primary transition-colors">
        <CreditCard className="h-6 w-6" />
        <span className="text-[10px] font-bold">Recargar</span>
      </button>

      {/* Consultar */}
      <button className="flex flex-col items-center gap-1 text-slate-400 dark:text-[#9da6b9] hover:text-primary dark:hover:text-primary transition-colors">
        <Wallet className="h-6 w-6" />
        <span className="text-[10px] font-bold">Consultar</span>
      </button>

      {/* Realizar Pago */}
      <button className="flex flex-col items-center gap-1 text-slate-400 dark:text-[#9da6b9] hover:text-primary dark:hover:text-primary transition-colors">
        <Banknote className="h-6 w-6" />
        <span className="text-[10px] font-bold">Pagar</span>
      </button>
    </nav>
  )
}
