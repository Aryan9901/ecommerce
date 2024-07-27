import { useEffect, useState } from "react";
import { BsExclamationCircle } from "react-icons/bs";
import { RiCouponFill } from "react-icons/ri";
import { TiTick } from "react-icons/ti";
import CartItem from "../components/CartItems";
import { Link } from "react-router-dom";

const cartItem = [
	{
		productId: "prod-1014",
		photo: "/images/product2.avif",
		name: "Lamp",
		price: 3000,
		quantity: 4,
		stock: 10,
	},
];
const subtotal = 4000;
const tax = Math.round(subtotal * 0.18);
const shippingCharges = 200;
const total = subtotal + tax + shippingCharges;
const discount = 400;

function Cart() {
	const [couponCode, setCouponCode] = useState<string>("");
	const [isvalidCouponCode, setIsvalidCouponCode] = useState<boolean>(false);

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			if (Math.random() > 0.7) {
				setIsvalidCouponCode(true);
			} else {
				setIsvalidCouponCode(false);
			}
		}, 1000);

		return () => {
			clearTimeout(timeoutId);
			setIsvalidCouponCode(false);
		};
	}, [couponCode]);
	return (
		<div className="cartpage">
			<main className="cart">
				{cartItem.length > 0 ? cartItem.map((item, index) => <CartItem key={index} cartItem={item} />) : <h1>No Items Added</h1>}
			</main>
			<aside className="cartaside">
				<h3>Bill Details</h3>
				<p>Subtotal: ₹{subtotal}</p>
				<p>Shipping Charges: ₹{shippingCharges}</p>
				<p>Tax Charges: ₹{tax}</p>
				<p>
					Discount: <em>- ₹{discount}</em>
				</p>
				<p>Total: ₹{total}</p>
				<button>
					<RiCouponFill />
					<input type="text" value={couponCode} onChange={(e) => setCouponCode(e.target.value)} placeholder="Apply Coupon" />
				</button>
				{couponCode &&
					(isvalidCouponCode ? (
						<span className="green">
							₹{discount} off using the coupon code: <code>{couponCode}</code> <TiTick />
						</span>
					) : (
						<span className="red">
							<BsExclamationCircle /> Invalid Coupon!
						</span>
					))}
				{cartItem.length > 0 && <Link to="/shipping">Checkout</Link>}
			</aside>
		</div>
	);
}

export default Cart;
