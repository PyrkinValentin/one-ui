import { Container } from "@/shared/ui/layout"
import { Breadcrumbs } from "@/shared/ui/breadcrumbs"
import { Link } from "@/shared/ui/link"

const Home = () => {
	return (
		<Container className="pt-12">
			<Breadcrumbs>
				<Link href="/">Item</Link>
			</Breadcrumbs>
		</Container>
	)
}

export default Home