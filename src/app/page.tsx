import { Container } from "@/shared/ui/layout"
import { Image } from "@/shared/ui/image"

const Home = () => {
	return (
		<Container className="pt-12">
			<Image
				className="w-7 h-7"
				src="https://nextui.org/images/album-cover.png"
				alt="Landscape picture"
			/>
		</Container>
	)
}

export default Home