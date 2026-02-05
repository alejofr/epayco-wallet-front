import { ArrowLeft, Banknote, CreditCard, Menu, Moon, Sun, UserPlus, Wallet, WalletMinimal } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { useLocation, useNavigate } from "react-router"
import { useTheme } from "@/components/theme-provider"

const pageTitles: Record<string, string> = {
  "/client/new": "Registrar Cliente",
}


export const ToolAppBar = () => {
  const { setTheme, theme } = useTheme()
  const location = useLocation()
  const navigate = useNavigate()

  const isHome = location.pathname === "/"
  const title = pageTitles[location.pathname] || "Detalle"

  return (
    <header className="sticky top-0 z-50 bg-background-light dark:bg-background-dark/80 backdrop-blur-md px-4 py-4 border-b border-slate-200 dark:border-slate-800">
      <div className="flex items-center justify-between h-full w-full max-w-5xl mx-auto gap-4">
        <div
          className={`flex items-center gap-2 transition-all duration-300 ease-in-out overflow-hidden ${!isHome ? "max-w-75 opacity-100 translate-x-0" : "max-w-0 opacity-0 -translate-x-5"
            }`}
        >
          <button
            onClick={() => navigate(-1)}
            disabled={isHome}
            className="p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors disabled:pointer-events-none"
          >
            <ArrowLeft className="h-6 w-6 text-slate-900 dark:text-white" />
          </button>
          <h2 className="text-slate-900 dark:text-white text-lg font-bold tracking-tight whitespace-nowrap">
            {title}
          </h2>
        </div>
        <div className={`flex items-center gap-2 translate-0.5 ${isHome && 'flex-1'}`}>
          <div className="bg-primary p-1.5 rounded-lg flex items-center justify-center">
            <WalletMinimal className="text-white text-[24px]" />
          </div>
          <h2 className="text-slate-900 dark:text-white text-lg font-extrabold tracking-tight">
            ePayco <span className="text-primary">Wallet</span>
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 w-10 h-10"
          >
            <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          <Menubar className="border-none bg-transparent p-0 hidden md:flex">
            <MenubarMenu>
              <MenubarTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 data-[state=open]:bg-slate-200 dark:data-[state=open]:bg-slate-700 w-10 h-10"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </MenubarTrigger>
              <MenubarContent align="end">
                <MenubarItem onClick={() => navigate("/client/new")}>
                  <UserPlus className="mr-2 h-4 w-4" />
                  <span>Registrarse</span>
                </MenubarItem>
                <MenubarItem>
                  <CreditCard className="mr-2 h-4 w-4" />
                  <span>Recargar</span>
                </MenubarItem>
                <MenubarItem>
                  <Wallet className="mr-2 h-4 w-4" />
                  <span>Consultar</span>
                </MenubarItem>
                <MenubarItem>
                  <Banknote className="mr-2 h-4 w-4" />
                  <span>Realizar Pago</span>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      </div>
    </header>
  )
}
