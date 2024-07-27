import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { getNames } from "country-list";
import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

function Address() {
	const [shippingInfo, setShippingInfo] = useState({
		address: "",
		city: "",
		state: "",
		country: "",
		pinCode: "",
	});
	const [countryNames, setCountryNames] = useState<string[]>([]);

	const navigate = useNavigate();

	const changeHandler = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const name = e.target.name;
		const value = e.target.value;
		setShippingInfo((prev) => ({ ...prev, [name]: value }));
	};

	const submitHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(shippingInfo);
		navigate("/shipping");
	};

	useEffect(() => {
		const countries = getNames();
		setCountryNames(countries);
	}, []);
	return (
		<div className="addressDialog">
			<div onClick={() => navigate("/shipping")}>
				<IoMdArrowRoundBack />
			</div>
			<form onSubmit={submitHandler}>
				<h2>Update Shipping Address</h2>
				<div>
					Address <input type="text" name="address" value={shippingInfo.address} onChange={changeHandler} />
				</div>
				<div>
					City: <input type="text" name="city" value={shippingInfo.city} onChange={changeHandler} />
				</div>
				<div>
					State: <input type="text" name="state" value={shippingInfo.state} onChange={changeHandler} />
				</div>
				<div>
					Country:
					<select name="country" required value={shippingInfo.country} onChange={changeHandler}>
						<option key="none" value="">
							Choose Country
						</option>
						{countryNames.map((country) => {
							return (
								<option key={country} value={country}>
									{country}
								</option>
							);
						})}
					</select>
				</div>
				<div>
					Pin Code: <input type="number" name="pinCode" value={shippingInfo.pinCode} onChange={changeHandler} />
				</div>
				<button type="submit">Update Address</button>
			</form>
		</div>
	);
}

export default Address;
