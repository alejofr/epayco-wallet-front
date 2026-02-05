
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { DollarSign, IdCard, Smartphone } from "lucide-react"
import * as z from "zod"
import { Button } from "@/components/ui/button"


import type { RechargeWallet } from "@/features/wallet/types/wallet.type"
import { cn } from "@/lib/utils"


const rechargeSchema = z.object({
    identify: z.string().min(5, "El documento debe tener al menos 5 caracteres"),
    numberPhone: z.string().min(10, "El teléfono debe tener al menos 10 caracteres"),
    amount: z.number().min(1, "El monto mínimo es $1"),
})

interface FormTransactionProps {
    onSubmit: (values: RechargeWallet) => Promise<boolean | void> | void
    isLoading: boolean
    title: string
    description: string
}

export const FormTransaction = ({ onSubmit, isLoading, title, description }: FormTransactionProps) => {
    const form = useForm<RechargeWallet>({
        resolver: zodResolver(rechargeSchema),
        defaultValues: {
            identify: "",
            numberPhone: "",
            amount: 0,
        },
    })

    // Amount chips
    const chips = [10000, 20000, 50000, 100000]

    const handleAddAmount = (value: number) => {
        const currentAmount = Number(form.getValues("amount")) || 0
        form.setValue("amount", currentAmount + value, { shouldValidate: true })
    }

    return (
        <div className="relative flex md:min-h-fit w-full flex-col max-w-3xl mx-auto overflow-x-hidden shadow-sm md:rounded-2xl md:my-8 md:border md:border-slate-200 dark:md:border-slate-800">
            {/* Hero Section */}
            <div className="px-8 pt-6 pb-2">
                <div className="w-12 h-1 bg-secondary rounded-full mb-6"></div>
                <h1 className="text-epayco-blue dark:text-white tracking-tight text-[28px] font-extrabold leading-tight text-left">
                    {title}
                </h1>
                <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-relaxed pt-3">
                    {description}
                </p>
            </div>

            {/* Form Section */}
            <div className="flex flex-col gap-2 px-6 py-4 flex-1">
                <form
                    onSubmit={form.handleSubmit(async (data) => {
                        const success = await onSubmit(data as RechargeWallet)
                        if (success === true) {
                            form.reset({
                                identify: "",
                                numberPhone: "",
                                amount: 0, // Reset amount explicitly
                            })
                        }
                    })}
                    className="space-y-6 flex flex-col h-full"
                >
                    {/* Document Number Field */}
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

                    {/* Value Field */}
                    <Controller
                        control={form.control}
                        name="amount"
                        render={({ field, fieldState }) => (
                            <div className="space-y-2">
                                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">
                                    Monto a recargar
                                </label>
                                <div className="relative">
                                    <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-primary w-5 h-5 pointer-events-none" />
                                    <input
                                        {...field}
                                        value={field.value || ""} // Handle 0/undefined
                                        onChange={(e) => field.onChange(Number(e.target.value))}
                                        className={cn(
                                            "w-full pl-10 pr-4 h-16 rounded-xl border-2 bg-white dark:bg-slate-900/50 text-2xl font-bold focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-400",
                                            fieldState.invalid
                                                ? "border-red-500 focus:ring-red-500"
                                                : "border-primary/30"
                                        )}
                                        placeholder="0.00"
                                        type="text"
                                    />
                                    {fieldState.error && (
                                        <span className="text-red-500 text-xs font-bold ml-1 mt-1 block">
                                            {fieldState.error.message}
                                        </span>
                                    )}
                                </div>

                                {/* Quick Selection Chips */}
                                <div className="flex gap-2 overflow-x-auto pb-2 mt-3 no-scrollbar scroll-smooth">
                                    {chips.map((chipAmount) => (
                                        <button
                                            key={chipAmount}
                                            type="button"
                                            onClick={() => handleAddAmount(chipAmount)}
                                            className="whitespace-nowrap px-4 py-2 rounded-full border border-slate-200 dark:border-slate-800 text-sm font-medium hover:bg-primary hover:text-white transition-colors text-slate-600 dark:text-slate-300"
                                        >
                                            +${(chipAmount / 1000)}k
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    />

                    <div className="grow"></div>
                    <div className="pt-4 pb-10 flex flex-col items-center gap-6 mt-auto">
                        <Button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-primary dark:bg-secondary text-white font-bold py-6 rounded-xl shadow-lg shadow-epayco-blue/10 transition-all active:scale-[0.98] text-[16px] disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? "Procesando..." : "Recargar"}
                        </Button>
                        <div className="mt-4 w-32 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full md:hidden"></div>
                    </div>
                </form>
            </div>
        </div>
    )
}
