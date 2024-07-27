import { FaExternalLinkAlt, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

type ProductProps = {
	productdId: string;
	photo: string;
	name: string;
	price: number;
	stock: number;
	addtoCartHandler: (id: string) => void;
};

// const server = "api/v1/server";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function ProductCard({ productdId, price, photo, name, stock, addtoCartHandler }: ProductProps) {
	return (
		<div className="home_allproducts_card">
			<img src={`${photo}`} alt={name} />
			<h4>{name}</h4>
			<span>₹{price}</span>
			<div>
				<button onClick={() => addtoCartHandler(productdId)}>
					<FaPlus />
				</button>
				<Link to={`/product/${productdId}`}>
					<FaExternalLinkAlt />
				</Link>
			</div>
		</div>
	);
}

export default ProductCard;
