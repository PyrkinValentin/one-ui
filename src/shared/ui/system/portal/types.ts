import type { Key, ReactNode, RefObject } from "react"

export type PortalProps = {
	disablePortal?: boolean
	children?: ReactNode
	container?: Element | RefObject<HTMLElement | null>
	key?: Key | null
}