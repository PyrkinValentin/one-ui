"use client"

import Link from "next/link"

import { Container } from "@/shared/ui/layout"
import { Pagination, PaginationItem } from "@/shared/ui/pagination"

const Home = () => {
	return (
		<Container className="pt-12">
			<Pagination
				showControls
				renderItem={({ page, item }) => (
					<PaginationItem
						as={Link}
						href={page === 1 ? "/" : `/?page=${page}`}
						item={item}
					/>
				)}
			/>
		</Container>
	)
}

export default Home