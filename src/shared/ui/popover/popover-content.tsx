"use client"

import type { PopoverContentProps } from "./types"

import { useTransition } from "@/shared/hooks/use-transition"

import { mergeRefs } from "@/shared/utils/ref"

import { FloatingOverlay } from "@floating-ui/react"
import { Portal } from "@/shared/ui/system"

import { usePopoverContext } from "./popover"

export const PopoverContent = (props: PopoverContentProps) => {
	const {
		ref,
		style,
		className,
		children,
		...restProps
	} = props

	const {
		arrow,
		lockScroll,
		disablePortal,
		context,
		refs,
		slots,
		slotProps = {},
		getFloatingProps,
	} = usePopoverContext()

	const {
		backdropProps,
		contentProps,
		arrowProps,
	} = slotProps

	const [mounted, fadeStyle] = useTransition(context?.open, {
		initial: { opacity: 0 },
		enter: { opacity: 1 },
	})

	const [, zoomStyle] = useTransition(context?.open, {
		initial: { transform: "scale(0.97)" },
		enter: { transform: "scale(1)" },
	})
	
	return (
		<>
			{mounted ? (
				<Portal disablePortal={disablePortal}>
					<FloatingOverlay
						lockScroll={lockScroll}
						{...backdropProps}
						className={slots?.backdrop({ className: backdropProps?.className })}
						style={{
							...fadeStyle,
							...backdropProps?.style,
						}}
					>
						<div
							ref={mergeRefs(ref, refs?.setFloating)}
							className={slots?.base({ className })}
							style={{
								...context?.floatingStyles,
								...zoomStyle,
								...style,
							}}
							{...restProps}
							{...getFloatingProps?.(restProps)}
						>
							<div
								{...contentProps}
								className={slots?.content({ className: contentProps?.className })}
							>
								{children}
							</div>

							{arrow ? (
								<div
									{...arrowProps}
									ref={mergeRefs(arrowProps?.ref, refs?.setArrow)}
									className={slots?.arrow({ className: arrowProps?.className })}
									style={{
										...context?.arrowStyles,
										...arrowProps?.style,
									}}
								/>
							) : null}
						</div>
					</FloatingOverlay>
				</Portal>
			) : null}
		</>
	)
}