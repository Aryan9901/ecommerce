// import Address from "../components/Address";

import { FaEdit, FaMinus, FaPlus } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const cartItem = [
	{
		productId: "prod-1014",
		photo: "/images/product2.avif",
		name: "Lamp",
		price: 3000,
		quantity: 4,
		stock: 10,
	},
	{
		productId: "prod-1015",
		photo: "/images/product1.avif",
		name: "Puma Shoes Nikki",
		price: 4999,
		quantity: 2,
		stock: 3,
	},
];

function Shipping() {
	const navigate = useNavigate();

	const navigateToAddress = () => {
		navigate(`/address/${1101}`);
	};
	return (
		<div className="shipping">
			<div className="shipping_left">
				<div className="shipping_left_address">
					<div className="shipping_left_address--top">
						<h3>Delivery Information</h3>
						<button onClick={navigateToAddress}>
							<FaEdit /> Edit
						</button>
					</div>
					<div className="shipping_left_address--bottom">
						<img src="/images/location-indicator.png" alt="location pin" />
						<div className="shipping_left_address--info">
							<p>Address: (+62) 854-2645-1999, Dhaka, Banasree, Block B, Road 3, California, USA</p>
						</div>
					</div>
				</div>
				<div className="shipping_left_review">
					<h4>Review Item</h4>
					<div className="shipping_left_review_itemContainer">
						{cartItem.map((item, index) => (
							<ReviewItem
								key={index}
								photo={item.photo}
								className="shipping_left_item"
								name={item.name}
								price={item.price}
								quantity={item.quantity}
								stock={item.stock}
							/>
						))}
					</div>
				</div>
			</div>
			<div className="shipping_right">
				<div className="shipping_right_summary">
					<h2>Order Summary</h2>
					<form>
						<div className="checkbox-wrapper-31">
							<input type="radio" name="method" id="online" required />
							<svg viewBox="0 0 35.6 35.6">
								<circle className="background" cx="17.8" cy="17.8" r="17.8"></circle>
								<circle className="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
								<polyline className="check" points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>
							</svg>
							<label htmlFor="online">Online Payment</label>
						</div>
						<div className="checkbox-wrapper-31">
							<input type="radio" name="method" id="cash" required />
							<svg viewBox="0 0 35.6 35.6">
								<circle className="background" cx="17.8" cy="17.8" r="17.8"></circle>
								<circle className="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
								<polyline className="check" points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>
							</svg>
							<label htmlFor="cash">Cash On Delivery</label>
						</div>
						<button type="submit">Confirm</button>
					</form>
					<div className="billDetails">
						<div>
							<h4>SubTotal</h4>
							<h5>₹ 200.67</h5>
						</div>
						<div>
							<h4>Delivery Fee</h4>
							<h5>₹ 200.67</h5>
						</div>
						<div>
							<h4>Discount</h4>
							<h5>₹ 200.67</h5>
						</div>
						<div>
							<h4>GST</h4>
							<h5>₹ 200.67</h5>
						</div>
						<div>
							<h3>Total Amount</h3>
							<h3>₹ 5400.67</h3>
						</div>
					</div>
					<button>Confirm Order</button>
				</div>
			</div>
		</div>
	);
}

export default Shipping;

type ReviewItemProps = {
	className: string;
	photo: string;
	name: string;
	price: number;
	quantity: number;
	stock: number;
};

const ReviewItem = ({ className, photo, name, price, quantity, stock }: ReviewItemProps) => {
	return (
		<div className={className}>
			<img src={photo} alt={`${name} ${price} ${quantity} ${stock}`} />
			<div className={`${className}--details`}>
				<Link to={"/product/101"}>{name}</Link>
				<h4>₹ {price}</h4>
				<h5 className={stock < 5 ? "red" : "green"}>{stock < 5 ? `only ${stock} unit left! hurry Up` : `${stock} unit left`}</h5>
			</div>
			<div className={`${className}--stock`}>
				<FaMinus />
				<p>{quantity}</p>
				<FaPlus />
			</div>
		</div>
	);
};

// rgtbgtb
