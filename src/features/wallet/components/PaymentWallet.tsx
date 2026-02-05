import { useState, useRef, useEffect } from "react"
import { useNavigate } from "react-router"
import { toast } from "sonner"
import { Lock } from "lucide-react"
import type { PaymentWalletForm, PaymentWalletResApi } from "@/features/wallet/types/wallet.type"
import { walletService } from "@/features/wallet/services/wallet.service"
import { FormTransaction } from "./FormTransaction"
import { Button } from "@/components/ui/button"


export const PaymentWallet = () => {
  const navigate = useNavigate()
  const [step, setStep] = useState<'form' | 'verification'>('form')
  const [isLoading, setIsLoading] = useState(false)
  const [sessionData, setSessionData] = useState<PaymentWalletResApi | null>(null)
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""))
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  useEffect(() => {
    if (step === 'verification' && inputRefs.current[0]) {
      inputRefs.current[0].focus()
    }
  }, [step])

  const handlePaymentSubmit = async (values: PaymentWalletForm) => {
    setIsLoading(true)
    try {
      const resp = await walletService.payWallet(values)

      if (resp && resp?.sessionId) {
        setSessionData(resp)
        setStep('verification')
        toast.success("Código de verificación enviado")
      } else {
        toast.error(resp?.message || "Error al iniciar el pago")
      }
    } catch (error) {
      console.error(error)
      toast.error("Ocurrió un error al procesar el pago")
    } finally {
      setIsLoading(false)
    }
  }

  const handleOtpChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return false

    const newOtp = [...otp]
    newOtp[index] = element.value
    setOtp(newOtp)

    // Move to next input if value is entered
    if (element.value !== "" && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handleConfirmPayment = async () => {
    if (!sessionData?.sessionId) return

    const token = otp.join("")
    if (token.length !== 6) {
      toast.error("Ingresa el código completo")
      return
    }

    setIsLoading(true)
    try {
      const resp = await walletService.confirmPayment({
        sessionId: sessionData.sessionId,
        token: token
      })

      if (resp.ok) {
        toast.success("Pago realizado con éxito")
        navigate("/wallet")
      } else {
        toast.error(resp.message || "Código inválido o expirado")
      }
    } catch (error) {
      console.error(error)
      toast.error("Error al confirmar el pago")
    } finally {
      setIsLoading(false)
    }
  }

  if (step === 'form') {
    return (
      <FormTransaction
        title="Pagar"
        description="Ingresa los datos para realizar el pago."
        onSubmit={handlePaymentSubmit}
        isLoading={isLoading}
      />
    )
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-125 w-full max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="w-full relative flex flex-col items-center">
        <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] text-center w-full mb-8">
          Confirmar Pago
        </h2>

        <div className="flex-1 flex flex-col px-4 pt-2 w-full max-w-lg">
          {/* HeadlineText */}
          <h3 className="text-slate-900 dark:text-white tracking-tight text-2xl font-bold leading-tight text-center pb-2">
            Verificación Requerida
          </h3>

          {/* BodyText */}
          <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-normal pb-8 px-2 text-center">
            Por favor ingresa el código de 6 dígitos enviado a
            <span className="font-semibold text-slate-800 dark:text-slate-200 block mt-1">{sessionData?.emailStr}</span>
          </p>

          {/* Stats / Session ID Section */}
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            <div className="flex min-w-50 flex-col gap-2 rounded-xl p-5 border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-white/5 text-center">
              <p className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase tracking-wider">
                ID de Sesión
              </p>
              <p className="text-slate-900 dark:text-white tracking-tight text-xl font-bold leading-tight break-all">
                {sessionData?.sessionId}
              </p>
            </div>
          </div>

          {/* ConfirmationCode */}
          <div className="flex justify-center py-4">
            <div className="flex gap-2 sm:gap-4">
              {otp.map((data, index) => (
                <input
                  key={index}
                  ref={(el) => { inputRefs.current[index] = el }}
                  className="flex h-14 w-11 sm:w-12 text-center bg-transparent border-0 border-b-2 border-slate-300 dark:border-slate-700 focus:border-primary dark:focus:border-primary text-xl font-bold focus:ring-0 text-slate-900 dark:text-white outline-none transition-colors p-0"
                  type="text"
                  name="otp"
                  maxLength={1}
                  value={data}
                  onChange={(e) => handleOtpChange(e.target, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  onFocus={(e) => e.target.select()}
                  inputMode="numeric"
                  placeholder="•"
                  disabled={isLoading}
                />
              ))}
            </div>
          </div>

          <div className="mt-auto pb-10 pt-10">
            {/* Action Button */}
            <Button
              size='lg'
              onClick={handleConfirmPayment}
              disabled={isLoading}
              className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/20 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Confirmando..." : "Confirmar Pago"}
            </Button>

            <p className="text-center text-slate-400 dark:text-slate-500 text-xs mt-4 flex items-center justify-center gap-1">
              <Lock className="w-3 h-3" />
              Transacción segura por ePayco
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
