import { Breadcrumbs } from "@/one-ui/components"
import Link from "next/link"

export default function Home() {
	return (
		<div className="mt-20 mx-auto w-full sm:w-xl p-20 flex flex-col gap-4">
			<Breadcrumbs>
				<Breadcrumbs.List>
					<Breadcrumbs.Item>
						<Breadcrumbs.Link render={<Link href="/"/>}>
							Home
						</Breadcrumbs.Link>
					</Breadcrumbs.Item>

					<Breadcrumbs.Separator/>

					<Breadcrumbs.Item>
						<Breadcrumbs.Link render={<Link href="/"/>}>
							List
						</Breadcrumbs.Link>
					</Breadcrumbs.Item>

					<Breadcrumbs.Separator/>

					<Breadcrumbs.Item>
						<Breadcrumbs.Page>
							Product
						</Breadcrumbs.Page>
					</Breadcrumbs.Item>
				</Breadcrumbs.List>
			</Breadcrumbs>
		</div>
	)
}