import { Container } from "@/shared/ui/layout"
import { Breadcrumbs, BreadcrumbsItem } from "@/shared/ui/breadcrumbs"
import { FaHome } from "react-icons/fa"
import { SiApplemusic } from "react-icons/si"
import { BiSolidUserRectangle } from "react-icons/bi"
import { FaMicrophone } from "react-icons/fa"

const Home = () => {
	return (
		<Container className="pt-12 space-y-5">
			<Breadcrumbs underline="hover">
				<BreadcrumbsItem
					href="/"
					startContent={<FaHome/>}
				>
					Home
				</BreadcrumbsItem>

				<BreadcrumbsItem
					current
					href="/"
					startContent={<SiApplemusic/>}
				>
					Music
				</BreadcrumbsItem>

				<BreadcrumbsItem
					href="/"
					startContent={<BiSolidUserRectangle/>}
				>
					Artists
				</BreadcrumbsItem>

				<BreadcrumbsItem
					href="/"
					startContent={<FaMicrophone/>}
				>
					Microphone
				</BreadcrumbsItem>
			</Breadcrumbs>
		</Container>
	)
}

export default Home