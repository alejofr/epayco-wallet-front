
import React from "react"
import { useToast } from "@/hooks/use-toast"
import { FormClient } from "./FormClient"
import { clientService } from "../services/client.service"
import type { ClientForm } from "../types/client-form.type"

export const RegisterClient = () => {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = React.useState(false)

  const handleSubmit = async (values: ClientForm) => {
    setIsLoading(true)
    try {
      await clientService.registerClient(values)
      toast.success("Cliente creado exitosamente")
      return true
    } catch (error) {
      console.error(error)
      toast.error("Error al crear el cliente")
      return false
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <FormClient
      onSubmit={handleSubmit}
      isLoading={isLoading}
    />
  )
}
