import { Container } from "@/shared/ui/layout"
import { Breadcrumbs, BreadcrumbsItem } from "@/shared/ui/breadcrumbs"
import { FaHome } from "react-icons/fa"
import { SiApplemusic } from "react-icons/si"
import { BiSolidUserRectangle } from "react-icons/bi"
import { FaMicrophone } from "react-icons/fa"

const Home = () => {
	return (
		<Container className="pt-12 space-y-5">
			<Breadcrumbs variant="solid">
				<BreadcrumbsItem href="/" startContent={<FaHome/>}>
					Home
				</BreadcrumbsItem>

				<BreadcrumbsItem startContent={<SiApplemusic/>}>
					Music
				</BreadcrumbsItem>

				<BreadcrumbsItem startContent={<BiSolidUserRectangle/>}>
					Artists
				</BreadcrumbsItem>

				<BreadcrumbsItem startContent={<FaMicrophone/>}>
					Microphone
				</BreadcrumbsItem>
			</Breadcrumbs>
		</Container>
	)
}

export default Home