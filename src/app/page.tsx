import { Container } from "@/shared/ui/layout"
import { VisuallyHidden } from "@/shared/ui/system"

const Home = () => {
	return (
		<Container className="pt-12">
			<VisuallyHidden>
				<div>Hello</div>
			</VisuallyHidden>
		</Container>
	)
}

export default Home