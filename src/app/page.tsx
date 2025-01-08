import { Container } from "@/shared/ui/layout"
import { Link } from "@/shared/ui/link"

const Home = () => {
	return (
		<Container className="pt-12">
			<Link href="/" external showAnchorIcon={false} block>
				Hello link
			</Link>
		</Container>
	)
}

export default Home