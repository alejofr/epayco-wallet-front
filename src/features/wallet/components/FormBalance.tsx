
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { IdCard, Smartphone } from "lucide-react"
import * as z from "zod"
import { Button } from "@/components/ui/button"


import type { InfoUserBase } from "@/features/wallet/types/wallet.type"
import { cn } from "@/lib/utils"


const balanceSchema = z.object({
    identify: z.string().min(5, "El documento debe tener al menos 5 caracteres"),
    numberPhone: z.string().min(10, "El teléfono debe tener al menos 10 caracteres"),
})

interface FormBalanceProps {
    onSubmit: (values: InfoUserBase) => Promise<boolean | void> | void
    isLoading: boolean
}

export const FormBalance = ({ onSubmit, isLoading }: FormBalanceProps) => {
    const form = useForm<InfoUserBase>({
        resolver: zodResolver(balanceSchema),
        defaultValues: {
            identify: "",
            numberPhone: "",
        },
    })

    return (
        <form
            onSubmit={form.handleSubmit(async (data) => {
                await onSubmit(data)
            })}
            className="space-y-6 flex flex-col h-full"
        >
            <Controller
                control={form.control}
                name="identify"
                render={({ field, fieldState }) => (
                    <div className="space-y-2">
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">
                            Numero de Documento
                        </label>
                        <div className="relative">
                            <IdCard className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 pointer-events-none" />
                            <input
                                {...field}
                                className={cn(
                                    "w-full pl-12 pr-4 h-14 rounded-xl border bg-white dark:bg-slate-900/50 text-base focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-400",
                                    fieldState.invalid
                                        ? "border-red-500 focus:ring-red-500"
                                        : "border-slate-200 dark:border-slate-800"
                                )}
                                placeholder="e.g. 123456789"
                                type="text"
                            />
                            {fieldState.error && (
                                <span className="text-red-500 text-xs font-bold ml-1 mt-1 block">
                                    {fieldState.error.message}
                                </span>
                            )}
                        </div>
                    </div>
                )}
            />

            {/* Phone Number Field */}
            <Controller
                control={form.control}
                name="numberPhone"
                render={({ field, fieldState }) => (
                    <div className="space-y-2">
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">
                            Numero de Celular
                        </label>
                        <div className="relative">
                            <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 pointer-events-none" />
                            <input
                                {...field}
                                className={cn(
                                    "w-full pl-12 pr-4 h-14 rounded-xl border bg-white dark:bg-slate-900/50 text-base focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-400",
                                    fieldState.invalid
                                        ? "border-red-500 focus:ring-red-500"
                                        : "border-slate-200 dark:border-slate-800"
                                )}
                                placeholder="e.g. 300 123 4567"
                                type="text"
                            />
                            {fieldState.error && (
                                <span className="text-red-500 text-xs font-bold ml-1 mt-1 block">
                                    {fieldState.error.message}
                                </span>
                            )}
                        </div>
                    </div>
                )}
            />

            <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary dark:bg-secondary text-white font-bold py-6 rounded-xl shadow-lg shadow-epayco-blue/10 transition-all active:scale-[0.98] text-[16px] disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isLoading ? "Consultando..." : "Consultar Saldo"}
            </Button>
        </form>
    )
}
