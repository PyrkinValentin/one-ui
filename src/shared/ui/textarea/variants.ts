import type { VariantProps } from "@/core/theme"

import { tv } from "@/core/theme"

export type TextareaVariantsProps = VariantProps<typeof textareaVariants>

export const textareaVariants = tv({
	slots: {
		base: "group flex flex-col",
		wrapper: "w-fit inline-flex flex-col",
		label: "subpixel-antialiased",
		textareaWrapper: "relative py-2 inline-flex gap-1.5 shadow-sm cursor-text",
		textarea: [
			"flex-1 font-normal bg-transparent outline-none placeholder:text-default-500 bg-clip-text",
			"file:cursor-pointer file:bg-transparent file:border-0 autofill:bg-transparent",
		],
		clearButton: [
			"absolute top-3 right-3 -m-2 p-2 appearance-none select-none rounded-full opacity-disabled hover:opacity-100",
			"active:opacity-disabled outline-none focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-focus",
			"focus-visible:-outline-offset-[0.5rem]",
		],
		invalidMessage: "pt-1 flex flex-col gap-1.5 text-xs text-danger",
		description: "pt-1 text-xs text-default-400",
	},
	variants: {
		variant: {
			flat: {
				label: "pb-2",
			},
			faded: {
				label: "pb-2",
				textareaWrapper: "bg-default-100 border-2 border-default-200",
			},
			bordered: {
				label: "pb-2",
				textareaWrapper: "border-2 border-default-200 hover:border-default-400",
			},
			underlined: {
				textareaWrapper: [
					"box-border relative !px-0 !rounded-none border-b-2 border-default-200 hover:border-default-300",
					"after:content-[''] after:origin-center after:absolute after:left-1/2 after:-bottom-[2px]",
					"after:-translate-x-1/2 after:w-0 after:h-[2px] has-[:focus-visible]:after:w-full",
					"shadow-[0_1px_0px_0_rgba(0,0,0,0.05)]",
				],
				clearButton: "right-0",
			},
		},
		size: {
			sm: {
				label: "text-xs",
				textareaWrapper: "min-h-12 px-2 rounded-small text-sm",
				textarea: "min-h-12 text-sm",
			},
			md: {
				label: "text-sm",
				textareaWrapper: "min-h-14 px-3 rounded-medium text-md",
				textarea: "min-h-14 text-sm",
			},
			lg: {
				label: "text-md",
				textareaWrapper: "min-h-16 px-3 rounded-large text-lg",
				textarea: "min-h-16 text-md",
			},
		},
		color: {
			default: "",
			primary: "",
			secondary: "",
			success: "",
			warning: "",
			danger: "",
		},
		rounded: {
			none: {
				textareaWrapper: "rounded-none",
			},
			sm: {
				textareaWrapper: "rounded-small",
			},
			md: {
				textareaWrapper: "rounded-medium",
			},
			lg: {
				textareaWrapper: "rounded-large",
			},
			full: {
				textareaWrapper: "rounded-full",
			},
		},
		fullWidth: {
			true: {
				wrapper: "w-full",
			},
		},
		clearable: {
			true: "",
		},
		required: {
			true: {
				label: "after:content-['*'] after:text-danger after:ms-0.5",
			},
		},
		readOnly: {
			true: {
				label: "pointer-events-none",
				textareaWrapper: "pointer-events-none",
			},
		},
		invalid: {
			true: {
				label: "!text-danger",
				textarea: "!text-danger",
			},
		},
		disabled: {
			true: {
				textareaWrapper: "opacity-disabled pointer-events-none",
			},
		},
		disableAnimation: {
			true: {
				label: "transition-none",
				textareaWrapper: "transition-none",
				textarea: "transition-none",
				clearButton: "transition-none",
			},
			false: {
				label: "transition-colors motion-reduce:transition-none",
				textarea: "transition-colors motion-reduce:transition-none",
				clearButton: "transition-opacity motion-reduce:transition-none",
			},
		},
	},
	defaultVariants: {
		variant: "flat",
		size: "md",
		color: "default",
		fullWidth: true,
	},
	compoundVariants: [
		// flat & color
		{
			variant: "flat",
			color: "default",
			className: {
				textareaWrapper: "bg-default-100 hover:bg-default-200 group-has-[:focus-visible]:bg-default-100",
			},
		},
		{
			variant: "flat",
			color: "primary",
			className: {
				label: "text-primary",
				textareaWrapper: "bg-primary-100 text-primary hover:bg-primary-50 group-has-[:focus-visible]:bg-primary-50",
				textarea: "placeholder:text-primary",
			},
		},
		{
			variant: "flat",
			color: "secondary",
			className: {
				label: "text-secondary",
				textareaWrapper: [
					"bg-secondary-100 text-secondary hover:bg-secondary-50",
					"group-has-[:focus-visible]:bg-secondary-50"
				],
				textarea: "placeholder:text-secondary",
			},
		},
		{
			variant: "flat",
			color: "success",
			className: {
				label: "text-success-600 dark:text-success",
				textareaWrapper: [
					"bg-success-100 text-success-600 dark:text-success hover:bg-success-50",
					"group-has-[:focus-visible]:bg-success-50",
				],
				textarea: "placeholder:text-success-600 dark:placeholder:text-success",
			},
		},
		{
			variant: "flat",
			color: "warning",
			className: {
				label: "text-warning-600 dark:text-warning",
				textareaWrapper: [
					"bg-warning-100 text-warning-600 dark:text-warning hover:bg-warning-50",
					"group-has-[:focus-visible]:bg-warning-50",
				],
				textarea: "placeholder:text-warning-600 dark:placeholder:text-warning",
			},
		},
		{
			variant: "flat",
			color: "danger",
			className: {
				label: "text-danger dark:text-danger-500",
				textareaWrapper: [
					"bg-danger-100 text-danger dark:text-danger-500 hover:bg-danger-50",
					"group-has-[:focus-visible]:bg-danger-50",
				],
				textarea: "placeholder:text-danger dark:placeholder:text-danger-500",
			},
		},
		// faded & color
		{
			variant: "faded",
			color: "default",
			className: {
				textareaWrapper: "hover:border-default-400 focus-within:border-default-400",
			},
		},
		{
			variant: "faded",
			color: "primary",
			className: {
				label: "text-primary",
				textareaWrapper: "hover:border-primary focus-within:border-primary",
			},
		},
		{
			variant: "faded",
			color: "secondary",
			className: {
				label: "text-secondary",
				textareaWrapper: "hover:border-secondary focus-within:border-secondary",
			},
		},
		{
			variant: "faded",
			color: "success",
			className: {
				label: "text-success",
				textareaWrapper: "hover:border-success focus-within:border-success",
			},
		},
		{
			variant: "faded",
			color: "warning",
			className: {
				label: "text-warning",
				textareaWrapper: "hover:border-warning focus-within:border-warning",
			},
		},
		{
			variant: "faded",
			color: "danger",
			className: {
				label: "text-danger",
				textareaWrapper: "hover:border-danger focus-within:border-danger",
			},
		},
		// underlined & color
		{
			variant: "underlined",
			color: "default",
			className: {
				textareaWrapper: "after:bg-default-foreground",
			},
		},
		{
			variant: "underlined",
			color: "primary",
			className: {
				label: "text-primary",
				textareaWrapper: "after:bg-primary",
			},
		},
		{
			variant: "underlined",
			color: "secondary",
			className: {
				label: "text-secondary",
				textareaWrapper: "after:bg-secondary",
			},
		},
		{
			variant: "underlined",
			color: "success",
			className: {
				label: "text-success",
				textareaWrapper: "after:bg-success",
			},
		},
		{
			variant: "underlined",
			color: "warning",
			className: {
				label: "text-warning",
				textareaWrapper: "after:bg-warning",
			},
		},
		{
			variant: "underlined",
			color: "danger",
			className: {
				label: "text-danger",
				textareaWrapper: "after:bg-danger",
			},
		},
		// bordered & color
		{
			variant: "bordered",
			color: "default",
			className: {
				textareaWrapper: "group-has-[:focus-visible]:border-default-foreground",
			},
		},
		{
			variant: "bordered",
			color: "primary",
			className: {
				label: "text-primary",
				textareaWrapper: "group-has-[:focus-visible]:border-primary",
			},
		},
		{
			variant: "bordered",
			color: "secondary",
			className: {
				label: "text-secondary",
				textareaWrapper: "group-has-[:focus-visible]:border-secondary",
			},
		},
		{
			variant: "bordered",
			color: "success",
			className: {
				label: "text-success",
				textareaWrapper: "group-has-[:focus-visible]:border-success",
			},
		},
		{
			variant: "bordered",
			color: "warning",
			className: {
				label: "text-warning",
				textareaWrapper: "group-has-[:focus-visible]:border-warning",
			},
		},
		{
			variant: "bordered",
			color: "danger",
			className: {
				label: "text-danger",
				textareaWrapper: "group-has-[:focus-visible]:border-danger",
			},
		},
		// !disableAnimation & variant
		{
			disableAnimation: false,
			variant: "flat",
			className: {
				textareaWrapper: "transition-[background] motion-reduce:transition-none",
			},
		},
		{
			disableAnimation: false,
			variant: ["faded", "bordered"],
			className: {
				textareaWrapper: "transition-colors motion-reduce:transition-none",
			},
		},
		{
			disableAnimation: false,
			variant: "underlined",
			className: {
				textareaWrapper: "after:transition-[width] motion-reduce:after:transition-none",
			},
		},
		// invalid & variant
		{
			invalid: true,
			variant: "flat",
			className: {
				textareaWrapper: "bg-danger-50 hover:bg-danger-100 group-has-[:focus-visible]:bg-danger-50",
			},
		},
		{
			invalid: true,
			variant: "bordered",
			className: {
				textareaWrapper: "border-danger hover:border-danger group-has-[:focus-visible]:border-danger",
			},
		},
		{
			invalid: true,
			variant: "underlined",
			className: {
				textareaWrapper: "after:bg-danger",
			},
		},
	],
})