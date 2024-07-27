// **   lib imports  */
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

// **  import components  */
import Loader from "./components/admin/Loader";
import Header from "./components/Header";
// **   importing lazy imports for pages */
const Home = lazy(() => import("./pages/Home"));
const Cart = lazy(() => import("./pages/Cart"));
const Search = lazy(() => import("./pages/Search"));
const Shipping = lazy(() => import("./pages/Shipping"));
const Product = lazy(() => import("./pages/Product"));
const Login = lazy(() => import("./pages/Login"));

//**!  admin routes imports */

const Dashboard = lazy(() => import("./pages/admin/Dashboard"));
const Customers = lazy(() => import("./pages/admin/Customers"));
const Products = lazy(() => import("./pages/admin/Products"));
const Transactions = lazy(() => import("./pages/admin/Transactions"));
const ProductManagemnet = lazy(() => import("./pages/admin/management/ProductManagemnet"));
const TransactionManagement = lazy(() => import("./pages/admin/management/TransactionManagement"));
const NewProduct = lazy(() => import("./pages/admin/management/NewProduct"));
const BarCharts = lazy(() => import("./pages/admin/charts/BarCharts"));
const PieCharts = lazy(() => import("./pages/admin/charts/PieCharts"));
const LineCharts = lazy(() => import("./pages/admin/charts/LineCharts"));
const Coupons = lazy(() => import("./pages/admin/apps/Coupons"));
const Toss = lazy(() => import("./pages/admin/apps/Toss"));
const StopWatch = lazy(() => import("./pages/admin/apps/StopWatch"));
const Address = lazy(() => import("./components/Address"));

function App() {
	return (
		<Router>
			<Header />
			<Suspense fallback={<Loader />}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/search" element={<Search />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/product/:id" element={<Product />} />
					<Route path="/login" element={<Login />} />

					{/*? Logged In Routes */}

					<Route>
						<Route path="/shipping" element={<Shipping />} />
						<Route path="/address/:userid" element={<Address />} />
					</Route>

					{/* admin routes defining */}
					<Route
					// element={<ProtectedRoute isAuthenticated={true} adminRoute={true} />}
					>
						<Route path="/admin/dashboard" element={<Dashboard />} />
						<Route path="/admin/product" element={<Products />} />
						<Route path="/admin/transaction" element={<Transactions />} />
						<Route path="/admin/customer" element={<Customers />} />

						{/* charts */}
						<Route path="/admin/chart/bar" element={<BarCharts />} />
						<Route path="/admin/chart/pie" element={<PieCharts />} />
						<Route path="/admin/chart/line" element={<LineCharts />} />

						{/* apps */}
						<Route path="/admin/app/coupon" element={<Coupons />} />
						<Route path="/admin/app/toss" element={<Toss />} />
						<Route path="/admin/app/stopwatch" element={<StopWatch />} />

						{/* management */}
						<Route path="/admin/product/new" element={<NewProduct />} />
						<Route path="/admin/product/:id" element={<ProductManagemnet />} />
						<Route path="/admin/transaction/:id" element={<TransactionManagement />} />
					</Route>
				</Routes>
			</Suspense>
			{/* footer */}
		</Router>
	);
}

export default App;
