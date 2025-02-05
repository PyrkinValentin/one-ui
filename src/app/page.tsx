import { Container } from "@/shared/ui/layout"
import { Pagination } from "@/shared/ui/pagination"

const Home = () => {
	return (
		<Container className="pt-12">
			<Pagination showControls/>
		</Container>
	)
}

export default Home