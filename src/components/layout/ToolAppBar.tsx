import { Moon, Sun, WalletMinimal } from "lucide-react"
import { useTheme } from "@/components/theme-provider"


export const ToolAppBar = () => {
  const { setTheme, theme } = useTheme()
  return (
    <header className="sticky top-0 z-50 bg-background-light dark:bg-background-dark/80 backdrop-blur-md px-4 py-4 border-b border-slate-200 dark:border-slate-800">
      <div className="flex items-center justify-between h-full w-full max-w-5xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="bg-primary p-1.5 rounded-lg flex items-center justify-center">
            <WalletMinimal className="text-white text-[24px]" />
          </div>
          <h2 className="text-slate-900 dark:text-white text-lg font-extrabold tracking-tight">ePayco <span className="text-primary">Wallet</span></h2>
        </div>
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
        >
          <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </button>
      </div>
    </header>
  )
}
