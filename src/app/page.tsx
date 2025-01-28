import { Container } from "@/shared/ui/layout"
import { Input } from "@/shared/ui/input"
import { FaHeartBroken } from "react-icons/fa"

const Home = () => {
	return (
		<Container className="pt-12">
			<Input
				label="Number of phone"
				clearable
				placeholder="Number of phone"
				startContent={<FaHeartBroken/>}
				description="If you pass the isClearable property to the input, it will have a clear button at the end of the input, it will be visible when the input has a value."
			/>
		</Container>
	)
}

export default Home