"use client"

import Link from "next/link"
import { Container } from "@/shared/ui/layout"
import { Pagination, PaginationItem } from "@/shared/ui/pagination_2"

const Home = () => {
	return (
		<Container className="pt-12">
			<Pagination
				loop
				renderItem={(props) => (
					<PaginationItem
						as={Link}
						href={`/?page=${props.page}`}
						{...props}
					/>
				)}
			/>
		</Container>
	)
}

export default Home