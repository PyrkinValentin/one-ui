import type {
	BreadcrumbsProps,
	BreadcrumbsListProps,
	BreadcrumbsItemProps,
	BreadcrumbsLinkProps,
	BreadcrumbsPageProps,
	BreadcrumbsSeparatorProps
} from "./breadcrumbs.props"

import { resolveClassNames } from "../../utils"

import { ChevronRight } from "lucide-react"
import { Render } from "../render"

export const BreadcrumbsRoot = (props: BreadcrumbsProps) => {
	const {
		"aria-label": ariaLabel = "Breadcrumb",
		className,
		children,
		...restProps
	} = props

	return (
		<nav
			{...restProps}
			aria-label={ariaLabel}
			data-slot="breadcrumbs"
			className={resolveClassNames(className, "breadcrumbs")}
		>
			{children}
		</nav>
	)
}

export const BreadcrumbsList = (props: BreadcrumbsListProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<ol
			{...restProps}
			data-slot="breadcrumbs-list"
			className={resolveClassNames(className, "breadcrumbs__list")}
		>
			{children}
		</ol>
	)
}

export const BreadcrumbsItem = (props: BreadcrumbsItemProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<li
			{...restProps}
			data-slot="breadcrumbs-item"
			className={resolveClassNames(className, "breadcrumbs__item")}
		>
			{children}
		</li>
	)
}

export const BreadcrumbsLink = (props: BreadcrumbsLinkProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="a"
			data-slot="breadcrumbs-link"
			className={resolveClassNames(className, "breadcrumbs__link")}
		>
			{children}
		</Render>
	)
}

export const BreadcrumbsPage = (props: BreadcrumbsPageProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<span
			{...restProps}
			role="link"
			aria-disabled="true"
			aria-current="page"
			data-slot="breadcrumbs-page"
			className={resolveClassNames(className, "breadcrumbs__page")}
		>
			{children}
		</span>
	)
}

export const BreadcrumbsSeparator = (props: BreadcrumbsSeparatorProps) => {
	const {
		className,
		children = <ChevronRight/>,
		...restProps
	} = props

	return (
		<li
			{...restProps}
			role="presentation"
			aria-hidden="true"
			data-slot="breadcrumbs-separator"
			className={resolveClassNames(className, "breadcrumbs__separator")}
		>
			{children}
		</li>
	)
}