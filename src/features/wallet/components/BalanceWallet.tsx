import { useState } from "react"
import { useNavigate } from "react-router"
import { Eye, PlusCircle, Banknote, X, RefreshCw } from "lucide-react"
import { toast } from "sonner"
import { walletService } from "@/features/wallet/services/wallet.service"
import type { InfoUserBase } from "@/features/wallet/types/wallet.type"
import { FormBalance } from "./FormBalance"



export const BalanceWallet = () => {
  const navigate = useNavigate()
  const [balance, setBalance] = useState<number | null>(null)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)
  const [showModal, setShowModal] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleCheckBalance = async (data: InfoUserBase) => {
    setLoading(true)
    try {
      const result = await walletService.getBalance(data)
      if (result) {
        setBalance(result.amount)
        setLastUpdated(new Date())
        setShowModal(false)
        toast.success("Saldo actualizado correctamente")
      } else {
        toast.error("No se pudo obtener el saldo")
      }
    } catch (error) {
      console.error(error)
      toast.error("Error al consultar el saldo")
    } finally {
      setLoading(false)
    }
  }


  return (
    <div className="flex flex-col gap-6 px-4 md:px-0 animate-in fade-in duration-500">
      {/* Balance Card */}
      <section className="mb-2">
        <div className="relative overflow-hidden flex flex-col items-stretch justify-start rounded-xl p-6 shadow-xl bg-primary text-white h-full">
          {/* Abstract background pattern */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 bg-black/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 flex flex-col h-full justify-between">
            <div className="flex justify-between items-start">
              <p className="text-white/80 text-sm font-medium uppercase tracking-wider">Saldo Disponible</p>
              <button onClick={() => setShowModal(true)} className="hover:bg-white/10 p-1 rounded-full transition-colors relative">
                <Eye className="text-white/70 w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col gap-1 my-4">
              <p className="text-4xl font-bold leading-none tracking-tight">
                {balance !== null ? "$"+balance : "****"}
              </p>
              {lastUpdated && (
                <p className="text-white/60 text-xs mt-1 flex items-center gap-1">
                  <RefreshCw className="w-3 h-3" />
                  Actualizado: {lastUpdated.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="mb-8">
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => navigate('/wallet/recharge')}
            className="flex flex-col gap-2 items-center justify-center rounded-xl h-24 bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800 transition-all hover:border-primary/50 active:scale-95 group"
          >
            <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
              <PlusCircle className="text-primary w-6 h-6" />
            </div>
            <span className="text-sm font-bold text-slate-700 dark:text-slate-200">Recargar</span>
          </button>

          <button
            onClick={() => navigate('/wallet/payment')}
            className="flex flex-col gap-2 items-center justify-center rounded-xl h-24 bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800 transition-all hover:border-primary/50 active:scale-95 group"
          >
            <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
              <Banknote className="text-primary w-6 h-6" />
            </div>
            <span className="text-sm font-bold text-slate-700 dark:text-slate-200">Pagar</span>
          </button>
        </div>
      </section>

      {/* Modal Overlay */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white dark:bg-slate-950 rounded-2xl w-full max-w-md shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute right-4 top-4 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors z-10"
            >
              <X className="w-5 h-5 text-slate-500" />
            </button>

            <div className="px-8 pt-8 pb-4">
              <h2 className="text-xl font-bold text-epayco-blue dark:text-white mb-1">Consultar Saldo</h2>
              <p className="text-sm text-slate-500">Ingresa tus datos para ver el saldo disponible</p>
            </div>

            <div className="p-6 pt-2">
              <FormBalance
                onSubmit={handleCheckBalance}
                isLoading={loading}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
