import {
  Banknote,
  ChevronRight,
  CreditCard,
  UserPlus,
  Wallet,
} from "lucide-react"

import { Card } from "@/components/ui/card"

export const Home = () => {
  return (
    <div className="flex flex-col h-full w-full max-w-5xl mx-auto px-4">
      {/* HeadlineText */}
      <div className="pt-10 pb-2">
        <h1 className="text-slate-900 dark:text-white text-[32px] font-extrabold leading-tight tracking-tight text-center">
          ¡Bienvenido!
        </h1>
      </div>

      {/* BodyText */}
      <div className="pb-8">
        <p className="text-slate-500 dark:text-slate-400 text-base font-medium leading-relaxed text-center">
          Tu aliado digital para pagos y cobros seguros. Gestiona tu dinero con
          total confianza.
        </p>
      </div>

      {/* Action Grid */}
      <div className="grid grid-cols-2 gap-4 pb-10">
        {/* Registrarse */}
        <Card className="group relative flex flex-col gap-3 p-4 transition-all active:scale-95 cursor-pointer hover:shadow-md border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-1">
            <UserPlus className="h-8 w-8" />
          </div>
          <div>
            <p className="text-slate-900 dark:text-white text-base font-bold leading-tight">
              Registrarse
            </p>
            <p className="text-slate-500 dark:text-slate-400 text-xs font-normal mt-1">
              Crea tu cuenta
            </p>
          </div>
          <div className="absolute top-3 right-3 text-primary/30 group-hover:text-primary transition-colors">
            <ChevronRight className="h-4 w-4" />
          </div>
        </Card>

        {/* Recargar Saldo */}
        <Card className="group relative flex flex-col gap-3 p-4 transition-all active:scale-95 cursor-pointer hover:shadow-md border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
          <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary mb-1">
            <CreditCard className="h-8 w-8" />
          </div>
          <div>
            <p className="text-slate-900 dark:text-white text-base font-bold leading-tight">
              Recargar
            </p>
            <p className="text-slate-500 dark:text-slate-400 text-xs font-normal mt-1">
              Agrega fondos
            </p>
          </div>
          <div className="absolute top-3 right-3 text-secondary/30 group-hover:text-secondary transition-colors">
            <ChevronRight className="h-4 w-4" />
          </div>
        </Card>

        {/* Consultar Saldo */}
        <Card className="group relative flex flex-col gap-3 p-4 transition-all active:scale-95 cursor-pointer hover:shadow-md border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-1">
            <Wallet className="h-8 w-8" />
          </div>
          <div>
            <p className="text-slate-900 dark:text-white text-base font-bold leading-tight">
              Consultar
            </p>
            <p className="text-slate-500 dark:text-slate-400 text-xs font-normal mt-1">
              Ver estado
            </p>
          </div>
          <div className="absolute top-3 right-3 text-primary/30 group-hover:text-primary transition-colors">
            <ChevronRight className="h-4 w-4" />
          </div>
        </Card>

        {/* Realizar Pago */}
        <Card className="group relative flex flex-col gap-3 p-4 transition-all active:scale-95 cursor-pointer hover:shadow-md border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
          <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary mb-1">
            <Banknote className="h-8 w-8" />
          </div>
          <div>
            <p className="text-slate-900 dark:text-white text-base font-bold leading-tight">
              Realizar Pago
            </p>
            <p className="text-slate-500 dark:text-slate-400 text-xs font-normal mt-1">
              Paga ahora
            </p>
          </div>
          <div className="absolute top-3 right-3 text-secondary/30 group-hover:text-secondary transition-colors">
            <ChevronRight className="h-4 w-4" />
          </div>
        </Card>
      </div>
    </div>
  )
}
