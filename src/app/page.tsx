import { Container } from "@/shared/ui/layout"
import { Button } from "@/shared/ui/button"
import { Badge } from "@/shared/ui/badge"

const Home = () => {
	return (
		<Container className="pt-12">
			<Badge content={5} variant="faded" color="primary">
				<Button>Button</Button>
			</Badge>
		</Container>
	)
}

export default Home