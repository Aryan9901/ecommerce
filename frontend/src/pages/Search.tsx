import { useState } from "react";
import ProductCard from "../components/ProductCard";

function Search() {
	const [search, setSearch] = useState("");
	const [sort, setSort] = useState("");
	const [maxPrice, setMaxPrice] = useState(100);
	const [category, setCategory] = useState("");

	return (
		<div className="flex flex-col md:flex-row">
			<aside className="w-full md:w-1/4 p-4 bg-gray-100 rounded-md shadow-md">
				<h2 className="text-xl font-semibold mb-4">Filter</h2>
				<div className="mb-4">
					<h4 className="text-lg font-medium mb-2">Sort</h4>
					<select
						name="sort"
						id="sort"
						value={sort}
						onChange={(e) => setSort(e.target.value)}
						className="w-full p-2 border border-gray-300 rounded-md"
					>
						<option value="">None</option>
						<option value="asc">price (low to high)</option>
						<option value="dsc">price (high to low)</option>
					</select>
				</div>
				<div className="mb-4">
					<h4 className="text-lg font-medium mb-2">Max Price: {maxPrice || ""}</h4>
					<input
						type="range"
						min={100}
						max={1000000}
						value={maxPrice}
						onChange={(e) => setMaxPrice(Number(e.target.value))}
						name="maxPrice"
						id="maxPrice"
						className="w-full"
					/>
				</div>
				<div className="mb-4">
					<h4 className="text-lg font-medium mb-2">Category</h4>
					<select
						name="category"
						id="category"
						value={category}
						onChange={(e) => setCategory(e.target.value)}
						className="w-full p-2 border border-gray-300 rounded-md"
					>
						<option value="">All</option>
						<option value="">Sample 1</option>
						<option value="">Sample 2</option>
					</select>
				</div>
			</aside>
			<main className="w-full md:w-3/4 p-4">
				<h1 className="text-2xl font-semibold mb-6">Products</h1>
				<input
					type="text"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					placeholder="Search by name..."
					className="w-full p-2 mb-4 border border-gray-300 rounded-md"
				/>
				<div className="flex items-center justify-center gap-6 flex-wrap">
					<ProductCard
						productdId="adassbd"
						name="Macbook"
						price={4999}
						stock={12}
						addtoCartHandler={() => alert("added to cart")}
						photo="/images/product1.avif"
					/>
					<ProductCard
						productdId="adassbd"
						name="Macbook"
						price={4999}
						stock={12}
						addtoCartHandler={() => alert("added to cart")}
						photo="/images/product1.avif"
					/>
					<ProductCard
						productdId="adassbd"
						name="Macbook"
						price={4999}
						stock={12}
						addtoCartHandler={() => alert("added to cart")}
						photo="/images/product1.avif"
					/>
					<ProductCard
						productdId="adassbd"
						name="Macbook"
						price={4999}
						stock={12}
						addtoCartHandler={() => alert("added to cart")}
						photo="/images/product1.avif"
					/>
				</div>
			</main>
		</div>
	);
}

export default Search;
