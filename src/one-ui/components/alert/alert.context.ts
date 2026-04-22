import { createContext, use } from "react"

export type AlertContextValue = {
	status: "default" | "primary" | "success" | "warning" | "danger"
}

export const AlertContext = createContext<AlertContextValue>({
	status: "default",
})

export const useAlertContext = () => use(AlertContext)