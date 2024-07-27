/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

type cartItemProps = {
	cartItem: any;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function CartItems({ cartItem }: cartItemProps) {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { photo, productId, name, price, quantity, stock } = cartItem;

	return (
		<div className="cartItem">
			<img src={photo} alt={name} />
			<section className="cartContent">
				<article>
					<Link to={`/product/${productId}`}>{name}</Link>
					<span>₹{price}</span>
				</article>
				<div>
					<div>
						<button>-</button>
						<p>{quantity}</p>
						<button>+</button>
					</div>
					<button>
						<FaTrash />
					</button>
				</div>
			</section>
		</div>
	);
}

export default CartItems;
