"use client"

import type { PopoverContentProps } from "./types"

import { useTransition } from "@/shared/hooks/use-transition"

import { mergeRefs } from "@/shared/utils/merge"

import { FloatingOverlay, FloatingFocusManager } from "@floating-ui/react"
import { Portal } from "@/shared/ui/system"

import { usePopoverContext } from "./popover"

export const PopoverContent = (props: PopoverContentProps) => {
	const {
		arrow,
		lockScroll,
		disablePortal,
		disableAnimation,
		context,
		refs,
		classNames,
		getFloatingProps,
		slotProps = {},
	} = usePopoverContext()

	const {
		ref,
		style,
		className,
		children,
		...restProps
	} = props

	const {
		backdropProps,
		contentProps,
		arrowProps,
		focusManagerProps,
	} = slotProps

	const [mounted, fadeStyle] = useTransition(context?.open, {
		enabled: !disableAnimation,
		initial: { opacity: 0 },
		enter: { opacity: 1 },
	})

	const [, zoomStyle] = useTransition(context?.open, {
		enabled: !disableAnimation,
		initial: { opacity: 0, transform: "scale(0.97)" },
		enter: { opacity: 1, transform: "scale(1)" },
	})

	return (
		<>
			{mounted && context ? (
				<Portal disablePortal={disablePortal}>
					<FloatingOverlay
						lockScroll={lockScroll}
						{...backdropProps}
						className={classNames?.backdrop({ className: backdropProps?.className })}
						style={{
							...fadeStyle,
							...backdropProps?.style,
						}}
					/>

					<FloatingFocusManager
						context={context}
						{...focusManagerProps}
					>
						<div
							ref={mergeRefs(ref, refs?.setFloating)}
							className={classNames?.base({ className })}
							style={{
								...context.floatingStyles,
								...zoomStyle,
								...style,
							}}
							{...getFloatingProps?.(restProps)}
						>
							<div
								{...contentProps}
								className={classNames?.content({ className: contentProps?.className })}
							>
								{children}
							</div>

							{arrow ? (
								<div
									{...arrowProps}
									ref={mergeRefs(arrowProps?.ref, refs?.setArrow)}
									className={classNames?.arrow({ className: arrowProps?.className })}
									style={{
										...context.arrowStyles,
										...arrowProps?.style,
									}}
								/>
							) : null}
						</div>
					</FloatingFocusManager>
				</Portal>
			) : null}
		</>
	)
}