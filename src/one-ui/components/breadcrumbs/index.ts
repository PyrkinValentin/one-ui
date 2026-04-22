export type * from "./breadcrumbs.props"

import { composeComponent } from "../../utils"

import {
	BreadcrumbsRoot,
	BreadcrumbsList,
	BreadcrumbsItem,
	BreadcrumbsLink,
	BreadcrumbsPage,
	BreadcrumbsSeparator
} from "./breadcrumbs"

type BreadcrumbsSlots = {
	List: typeof BreadcrumbsList
	Item: typeof BreadcrumbsItem
	Link: typeof BreadcrumbsLink
	Page: typeof BreadcrumbsPage
	Separator: typeof BreadcrumbsSeparator
}

export const Breadcrumbs = composeComponent<typeof BreadcrumbsRoot, BreadcrumbsSlots>(BreadcrumbsRoot, {
	List: BreadcrumbsList,
	Item: BreadcrumbsItem,
	Link: BreadcrumbsLink,
	Page: BreadcrumbsPage,
	Separator: BreadcrumbsSeparator,
})