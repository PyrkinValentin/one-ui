import { Container } from "@/shared/ui/layout"
import { Breadcrumbs, Breadcrumb } from "@/shared/ui/breadcrumbs"

const Home = () => {
	return (
		<Container className="pt-12">
			<Breadcrumbs variant="bordered">
				<Breadcrumb href="/">
					Home
				</Breadcrumb>

				<Breadcrumb href="/">
					Search
				</Breadcrumb>

				<Breadcrumb>
					Route
				</Breadcrumb>
			</Breadcrumbs>
		</Container>
	)
}

export default Home