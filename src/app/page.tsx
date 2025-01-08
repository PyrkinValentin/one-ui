import { Container } from "@/shared/ui/layout"
import { Button, ButtonGroup } from "@/shared/ui/button"
import { FaHeartBroken } from "react-icons/fa"

const Home = () => {
	return (
		<Container>
			<ButtonGroup color="primary" variant="faded">
				<Button startContent={<FaHeartBroken/>}>Button 1</Button>
				<Button>Button 2</Button>
				<Button>Button 3</Button>
			</ButtonGroup>

			<ButtonGroup color="primary" variant="bordered">
				<Button>Button 1</Button>
				<Button>Button 2</Button>
				<Button>Button 3</Button>
			</ButtonGroup>
		</Container>
	)
}

export default Home