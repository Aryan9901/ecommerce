import { useState } from "react";
import { FaSearch, FaShoppingBag, FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const user: {
	role?: string;
	_id?: string;
} = {};

function Header() {
	const [isOpen, setIsopen] = useState<boolean>(false);

	const logoutHandler = () => {
		setIsopen(false);
	};

	return (
		<nav className="navbar">
			<div className="navbar__logo">
				<Link to="/">DreamCoding</Link>
			</div>
			<ul className="navbar__icons">
				<NavLink onClick={() => setIsopen(() => false)} to="/">
					Home
				</NavLink>
				<NavLink onClick={() => setIsopen(() => false)} to="/search">
					<FaSearch />
				</NavLink>
				<NavLink onClick={() => setIsopen(() => false)} to="/cart">
					<FaShoppingBag />
				</NavLink>
				{user?._id ? (
					<>
						<button onClick={() => setIsopen((curr) => !curr)}>
							<FaUser />
						</button>
						<dialog open={isOpen}>
							<div>
								{user?.role === "admin" && (
									<Link onClick={() => setIsopen(() => false)} to="/admin/dashboard">
										Admin
									</Link>
								)}
								<Link to="/orders">Orders</Link>
								<button onClick={logoutHandler}>
									Logout <FaSignOutAlt />
								</button>
							</div>
						</dialog>
					</>
				) : (
					<Link to="login">
						<FaSignInAlt />
					</Link>
				)}
			</ul>
		</nav>
	);
}

export default Header;
