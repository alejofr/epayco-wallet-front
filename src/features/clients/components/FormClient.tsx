
import { Badge, CreditCard, Mail, Smartphone, User } from "lucide-react"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Field, FieldLabel, FieldError } from "@/components/ui/field"
import type { ClientForm } from "@/features/clients/types/client-form.type"

const registerSchema = z.object({
  identify: z.string().min(5, "El documento debe tener al menos 5 caracteres"),
  name: z.string().min(2, "El nombre es requerido"),
  surname: z.string().min(2, "El apellido es requerido"),
  email: z.string().email("Correo electrónico inválido"),
  numberPhone: z.string().min(10, "El teléfono debe tener al menos 10 caracteres"),
})

export const FormClient = ({ onSubmit, isLoading }: { onSubmit: (values: ClientForm) => Promise<boolean | void> | void; isLoading: boolean }) => {
  const form = useForm<ClientForm>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      identify: "",
      name: "",
      surname: "",
      email: "",
      numberPhone: "",
    },
  })

  return (
    <div className="relative flex md:min-h-fit w-full flex-col max-w-3xl mx-auto overflow-x-hidden shadow-sm md:rounded-2xl md:my-8 md:border md:border-slate-200 dark:md:border-slate-800">
      {/* Hero Section */}
      <div className="px-8 pt-6 pb-2">
        <div className="w-12 h-1 bg-secondary rounded-full mb-6"></div>
        <h1 className="text-epayco-blue dark:text-white tracking-tight text-[28px] font-extrabold leading-tight text-left">
          Crear Cliente
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-relaxed pt-3">
          Ingrese sus datos para registrarse en nuestra plataforma segura de billetera digital.
        </p>
      </div>

      {/* Form Section */}
      <div className="flex flex-col gap-2 px-6 py-4 flex-1">
        <form onSubmit={form.handleSubmit(async (data) => {
          const success = await onSubmit(data)
          if (success === true) {
            form.reset()
          }
        })} className="space-y-4 flex flex-col h-full">
          <div className="space-y-4">
            <Controller
              control={form.control}
              name="identify"
              render={({ field, fieldState }) => (
                <Field className="space-y-1.5" data-invalid={fieldState.invalid}>
                  <FieldLabel className="text-epayco-blue dark:text-slate-200 text-xs font-bold uppercase tracking-wider ml-1">
                    Documento ID
                  </FieldLabel>
                  <div className="relative flex items-center">
                    <Input
                      {...field}
                      className="w-full h-14 pl-12 pr-4 rounded-xl border-slate-200 dark:border-slate-700 focus:border-epayco-blue dark:focus:border-epayco-blue focus:ring-0 bg-white dark:bg-slate-900 text-slate-900 dark:text-white dark:placeholder:text-slate-500 transition-all text-[15px]"
                      placeholder="1234567890"
                      inputMode="numeric"
                      aria-invalid={fieldState.invalid}
                    />
                    <div className="absolute left-4 text-slate-400 dark:text-slate-500 pointer-events-none">
                      <Badge className="h-5 w-5 bg-transparent text-slate-400 dark:text-slate-500 p-0 shadow-none hover:bg-transparent">
                        <CreditCard className="h-5 w-5" />
                      </Badge>
                    </div>
                  </div>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} className="text-red-500 font-bold" />
                  )}
                </Field>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <Controller
                control={form.control}
                name="name"
                render={({ field, fieldState }) => (
                  <Field className="space-y-1.5" data-invalid={fieldState.invalid}>
                    <FieldLabel className="text-epayco-blue dark:text-slate-200 text-xs font-bold uppercase tracking-wider ml-1">
                      Nombre
                    </FieldLabel>
                    <div className="relative flex items-center">
                      <Input
                        {...field}
                        className="w-full h-14 pl-12 pr-4 rounded-xl border-slate-200 dark:border-slate-700 focus:border-epayco-blue dark:focus:border-epayco-blue focus:ring-0 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all text-[15px]"
                        placeholder="John"
                        aria-invalid={fieldState.invalid}
                      />
                      <div className="absolute left-4 text-slate-400 dark:text-slate-500 pointer-events-none">
                        <User className="h-5 w-5" />
                      </div>
                    </div>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} className="text-red-500 font-bold" />
                    )}
                  </Field>
                )}
              />

              <Controller
                control={form.control}
                name="surname"
                render={({ field, fieldState }) => (
                  <Field className="space-y-1.5" data-invalid={fieldState.invalid}>
                    <FieldLabel className="text-epayco-blue dark:text-slate-200 text-xs font-bold uppercase tracking-wider ml-1">
                      Apellido
                    </FieldLabel>
                    <div className="relative flex items-center">
                      <Input
                        {...field}
                        className="w-full h-14 pl-12 pr-4 rounded-xl border-slate-200 dark:border-slate-700 focus:border-epayco-blue dark:focus:border-epayco-blue focus:ring-0 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all text-[15px]"
                        placeholder="Doe"
                        aria-invalid={fieldState.invalid}
                      />
                      <div className="absolute left-4 text-slate-400 dark:text-slate-500 pointer-events-none">
                        <User className="h-5 w-5" />
                      </div>
                    </div>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} className="text-red-500 font-bold" />
                    )}
                  </Field>
                )}
              />
            </div>

            <Controller
              control={form.control}
              name="email"
              render={({ field, fieldState }) => (
                <Field className="space-y-1.5" data-invalid={fieldState.invalid}>
                  <FieldLabel className="text-epayco-blue dark:text-slate-200 text-xs font-bold uppercase tracking-wider ml-1">
                    Email
                  </FieldLabel>
                  <div className="relative flex items-center">
                    <Input
                      {...field}
                      className="w-full h-14 pl-12 pr-4 rounded-xl border-slate-200 dark:border-slate-700 focus:border-epayco-blue dark:focus:border-epayco-blue focus:ring-0 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all text-[15px]"
                      placeholder="email@epayco.com"
                      type="email"
                      aria-invalid={fieldState.invalid}
                    />
                    <div className="absolute left-4 text-slate-400 dark:text-slate-500 pointer-events-none">
                      <Mail className="h-5 w-5" />
                    </div>
                  </div>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} className="text-red-500 font-bold" />
                  )}
                </Field>
              )}
            />

            <Controller
              control={form.control}
              name="numberPhone"
              render={({ field, fieldState }) => (
                <Field className="space-y-1.5" data-invalid={fieldState.invalid}>
                  <FieldLabel className="text-epayco-blue dark:text-slate-200 text-xs font-bold uppercase tracking-wider ml-1">
                    Nro. Telefono
                  </FieldLabel>
                  <div className="relative flex items-center">
                    <Input
                      {...field}
                      className="w-full h-14 pl-12 pr-4 rounded-xl border-slate-200 dark:border-slate-700 focus:border-epayco-blue dark:focus:border-epayco-blue focus:ring-0 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all text-[15px]"
                      placeholder="300 123 4567"
                      type="tel"
                      aria-invalid={fieldState.invalid}
                    />
                    <div className="absolute left-4 text-slate-400 dark:text-slate-500 pointer-events-none">
                      <Smartphone className="h-5 w-5" />
                    </div>
                  </div>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} className="text-red-500 font-bold" />
                  )}
                </Field>
              )}
            />
          </div>

          <div className="grow"></div>
          <div className="px-6 pt-4 pb-10 flex flex-col items-center gap-6 mt-auto">
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary dark:bg-secondary text-white font-bold py-6 rounded-xl shadow-lg shadow-epayco-blue/10 transition-all active:scale-[0.98] text-[16px] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Guardando..." : "Guardar"}
            </Button>
            <div className="mt-4 w-32 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full md:hidden"></div>
          </div>
        </form>
      </div>
    </div>
  )
}
