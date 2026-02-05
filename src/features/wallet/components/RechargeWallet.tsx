import React from "react"
import { useToast } from "@/hooks/use-toast"
import { walletService } from "../services/wallet.service"
import { FormRecharge } from "./FormRecharge"
import type { RechargeWallet as RechargeWalletType } from "../types/wallet.type"

export const RechargeWallet = () => {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = React.useState(false)

  const handleSubmit = async (values: RechargeWalletType) => {
    setIsLoading(true)
    try {
      await walletService.rechargeWallet(values)
      toast.success("Recarga exitosa")
      return true
    } catch (error) {
      console.error(error)
      toast.error("Error al realizar la recarga")
      return false
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <FormRecharge
      onSubmit={handleSubmit}
      isLoading={isLoading}
    />
  )
}
