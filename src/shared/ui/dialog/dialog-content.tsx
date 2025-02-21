"use client"

import type { MouseEvent } from "react"
import type { DialogContentProps } from "./types"

import { useTransition } from "@/shared/hooks/use-transition"

import { mergeRefs } from "@/shared/utils/merge"

import { FloatingFocusManager, FloatingOverlay } from "@floating-ui/react"
import { MdClear } from "react-icons/md"
import { Portal } from "@/shared/ui/system"

import { useDialogContext } from "./dialog"

export const DialogContent = (props: DialogContentProps) => {
	const {
		lockScroll,
		disablePortal,
		disableAnimation,
		hideCloseButton,
		closeButtonIcon,
		context,
		refs,
		classNames,
		getFloatingProps,
		slotProps = {},
	} = useDialogContext()

	const {
		ref,
		style,
		className,
		children,
		...restProps
	} = props

	const {
		backdropProps,
		focusManagerProps,
		wrapperProps,
		closeButtonProps,
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

	const handleClickClose = (ev: MouseEvent<HTMLButtonElement>) => {
		closeButtonProps?.onClick?.(ev)
		context?.onOpenChange(false, undefined, "click")
	}

	return (
		<>
			{mounted && context ? (
				<Portal disablePortal={disablePortal}>
					<FloatingOverlay
						lockScroll={lockScroll}
						{...backdropProps}
						className={classNames?.backdrop()}
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
							{...wrapperProps}
							className={classNames?.wrapper({ className: wrapperProps?.className })}
						>
							<div
								ref={mergeRefs(ref, refs?.setFloating)}
								className={classNames?.base({ className })}
								style={{
									...zoomStyle,
									...style,
								}}
								{...getFloatingProps?.(restProps)}
							>
								{!hideCloseButton ? (
									<button
										{...closeButtonProps}
										className={classNames?.closeButton({ className: closeButtonProps?.className })}
										onClick={handleClickClose}
									>
										{closeButtonIcon ?? <MdClear/>}
									</button>
								) : null}

								{children}
							</div>
						</div>
					</FloatingFocusManager>
				</Portal>
			) : null}
		</>
	)
}