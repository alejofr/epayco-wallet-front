import { type LucideIcon } from "lucide-react"
import { NavLink } from "react-router"
import { cn } from "@/lib/utils"

interface BottomNavItemProps {
    to: string
    icon: LucideIcon
    label: string
    end?: boolean
}

export const BottomNavItem = ({ to, icon: Icon, label, end }: BottomNavItemProps) => {
    return (
        <NavLink
            to={to}
            end={end}
            className={({ isActive }) =>
                cn(
                    "flex flex-col items-center gap-1 transition-colors",
                    isActive
                        ? "text-secondary"
                        : "text-slate-400 dark:text-[#9da6b9] hover:text-primary dark:hover:text-primary"
                )
            }
        >
            <Icon className="h-6 w-6" />
            <span className="text-[10px] font-bold">{label}</span>
        </NavLink>
    )
}
