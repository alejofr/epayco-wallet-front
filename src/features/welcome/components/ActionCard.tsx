import { ChevronRight, type LucideIcon } from "lucide-react"
import { Link } from "react-router"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface ActionCardProps {
    icon: LucideIcon
    title: string
    description: string
    to?: string
    variant?: "primary" | "secondary"
    onClick?: () => void
}

export const ActionCard = ({
    icon: Icon,
    title,
    description,
    to,
    variant = "primary",
    onClick,
}: ActionCardProps) => {
    const colorStyles = {
        primary: {
            bg: "bg-primary/10",
            text: "text-primary",
            hoverText: "group-hover:text-primary",
            arrowText: "text-primary/30",
        },
        secondary: {
            bg: "bg-secondary/10",
            text: "text-secondary",
            hoverText: "group-hover:text-secondary",
            arrowText: "text-secondary/30",
        },
    }

    const styles = colorStyles[variant]

    const Content = () => (
        <Card className="group relative flex flex-col gap-3 p-4 transition-all active:scale-95 cursor-pointer hover:shadow-md border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 h-full">
            <div
                className={cn(
                    "w-12 h-12 rounded-lg flex items-center justify-center mb-1",
                    styles.bg,
                    styles.text
                )}
            >
                <Icon className="h-8 w-8" />
            </div>
            <div>
                <p className="text-slate-900 dark:text-white text-base font-bold leading-tight">
                    {title}
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-xs font-normal mt-1">
                    {description}
                </p>
            </div>
            <div
                className={cn(
                    "absolute top-3 right-3 transition-colors",
                    styles.arrowText,
                    styles.hoverText
                )}
            >
                <ChevronRight className="h-4 w-4" />
            </div>
        </Card>
    )

    if (to) {
        return (
            <Link to={to} className="block">
                <Content />
            </Link>
        )
    }

    return (
        <div onClick={onClick}>
            <Content />
        </div>
    )
}
