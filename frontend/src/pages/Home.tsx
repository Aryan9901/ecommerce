// Import Swiper React components
import { Link } from "react-router-dom";
import { FaExternalLinkAlt, FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import ProductCard from "../components/ProductCard";

function Home() {
	const addtoCartHandler = (id: string) => {
		alert(id + " added to cart");
	};

	return (
		<main className="home">
			<section className="home_hero_section w-full px-7">
				<img src="/images/heroHome.png" alt="hero landing" className="w-full" />
			</section>
			<section className="home_latest_product">
				<div className="home_latest_heading">
					<h2>Latest Products</h2>
					<Link to="/search">
						More <FaExternalLinkAlt />
					</Link>
				</div>
				<div className="home_latest_container">
					<LatestCard likes={7} price={996} heading="Prime Barstool" color="#f5fafd" img="/public/images/latest_prod1.png" />
					<LatestCard likes={9} price={2567} heading="Laptop Accessories" color="#fdfbf5" img="/public/images/latest_prod2.png" />
					<LatestCard likes={0} price={1596} heading="Puma Shoes" color="#fafdf5" img="/public/images/latest_prod3.png" />
					<LatestCard likes={12} price={3499} heading="Boat Nirvana Smartwatch" color="#fdf5f5" img="/public/images/latest_prod4.png" />
					<LatestCard likes={0} price={32499} heading="Samsung Galaxy S4" color="#f6f7fd" img="/public/images/latest_prod5.png" />
					<LatestCard likes={2} price={5249} heading="LG LED TV 52 INCH " color="#f5fbfd" img="/public/images/latest_prod6.png" />
				</div>
			</section>
			<section className="home_allproducts">
				<div className="home_allproducts_heading">
					<h2>All Products</h2>
					<Link to="/search">
						More <FaExternalLinkAlt />
					</Link>
				</div>
				<div className="home_allproducts_container">
					<ProductCard
						productdId="prod-1011"
						name="Samsung Galaxy X4"
						price={34_699}
						stock={12}
						photo="/images/product1.avif"
						addtoCartHandler={addtoCartHandler}
					/>
					<ProductCard
						productdId="prod-1012"
						name="Samsung Galaxy X4"
						price={34_699}
						stock={12}
						photo="/images/product3.avif"
						addtoCartHandler={addtoCartHandler}
					/>
					<ProductCard
						productdId="prod-1013"
						name="Samsung Galaxy X4"
						price={34_699}
						stock={12}
						photo="/images/product2.avif"
						addtoCartHandler={addtoCartHandler}
					/>
					<ProductCard
						productdId="prod-1014"
						name="Samsung Galaxy X4"
						price={34_699}
						stock={12}
						photo="/images/product3.avif"
						addtoCartHandler={addtoCartHandler}
					/>
				</div>
			</section>
		</main>
	);
}

export default Home;

const LatestCard = ({
	img,
	color,
	heading,
	price,
	likes,
	addtoCartHandler,
}: {
	img: string;
	color: string;
	heading: string;
	price: number;
	likes: number;
	addtoCartHandler?: () => void;
}) => {
	return (
		<section className="home_latest_card" style={{ backgroundColor: color }}>
			<div className="home_latest_card_content">
				<h3>{heading}</h3>
				<img src={img} alt="product 1" />
				<div className="card_footer">
					<h5>{price} $</h5>
					<div className="buttons">
						{likes > 0 ? (
							<span>
								{likes} <FaHeart style={{ color: "red" }} />
							</span>
						) : (
							<FaHeart />
						)}
						<FaCartShopping onClick={addtoCartHandler} />
					</div>
				</div>
			</div>
		</section>
	);
};
