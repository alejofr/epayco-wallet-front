import {
  Banknote,
  CreditCard,
  UserPlus,
  Wallet,
} from "lucide-react"

import { ActionCard } from "./ActionCard"


export const Home = () => {
  return (
    <>
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
        <ActionCard
          icon={UserPlus}
          title="Registrarse"
          description="Crea tu cuenta"
          variant="primary"
          to="client/new"
        />

        <ActionCard
          icon={CreditCard}
          title="Recargar"
          description="Agrega fondos"
          variant="secondary"
        />

        <ActionCard
          icon={Wallet}
          title="Consultar"
          description="Ver estado"
          variant="primary"
        />

        <ActionCard
          icon={Banknote}
          title="Realizar Pago"
          description="Paga ahora"
          variant="secondary"
        />
      </div>
    </>
  )
}
