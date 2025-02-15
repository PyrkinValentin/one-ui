"use client"

import Link from "next/link"
import { Container } from "@/shared/ui/layout"
import { Pagination, PaginationItem } from "@/shared/ui/pagination_2"

const Home = () => {
	return (
		<Container className="pt-12 space-y-5">
			<Pagination
				showControls
				renderItem={(page) => (
					<PaginationItem
						as={Link}
						href={`/?page=${page}`}
					/>
				)}
			/>
		</Container>
	)
}

export default Home