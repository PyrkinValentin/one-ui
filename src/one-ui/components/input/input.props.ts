import type { Input } from "@base-ui/react"

export type InputProps = Omit<Input.Props, "size"> & {
	size?: "sm" | "md" | "lg"
}