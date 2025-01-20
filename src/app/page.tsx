import { Container } from "@/shared/ui/layout"
import { Tooltip } from "@/shared/ui/tooltip"
import { Button } from "@/shared/ui/button"

const Home = () => {
	return (
		<Container className="pt-12 space-y-5">
			<Tooltip content="I am a tooltip">
				<Button>Button</Button>
			</Tooltip>
		</Container>
	)
}

export default Home