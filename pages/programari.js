import Head from "next/head";
import { useState, useContext, useEffect } from "react";
import Layout from "../components/Layout";
import { postData } from "../utils/fetchData";

export default function Programari() {
	const initialState = {
		nume: "",
		prenume: "",
		telefon: "",
		email: "",
		ora: "",
		data: "",
		problema: "",
		interventie: "",
		nivel: "",
	};
	const [userData, setUserData] = useState(initialState);
	const { nume, prenume, telefon, email, interventie, nivel, ora, data,problema } = userData;

	const handleChangeInput = (e) => {
		const { name, value } = e.target;
		setUserData({ ...userData, [name]: value });
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(userData);
		const res = await postData("/addprogramare", userData);
	};
	return (
		<div>
			<Head>
				<title>Dentist</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout />
			<form onSubmit={handleSubmit} className="p-5">
				<div className="grid gap-2 md:gap-4 mb-6 md:grid-cols-2">
					<div>
						<label
							htmlFor="first_name"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
						>
							Nume
						</label>

						<input
							type="text"
							id="first_name"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="John"
							value={nume}
							name="nume"
							onChange={handleChangeInput}
							required
						></input>
					</div>
					<div>
						<label
							htmlFor="last_name"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
						>
							Prenume
						</label>
						<input
							type="text"
							id="last_name"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Doe"
							required
							name="prenume"
							value={prenume}
							onChange={handleChangeInput}
						></input>
					</div>
					<div>
						<label
							htmlFor="company"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
						>
							Email
						</label>
						<div className="flex bg-gray-50 border border-gray-300 rounded-md">
							<span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
								<svg
									className="w-5 h-5 text-gray-500 dark:text-gray-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
									<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
								</svg>
							</span>
							<input
								type="text"
								id="company"
								className=" text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Flowbite"
								required
								name="email"
								value={email}
								onChange={handleChangeInput}
							></input>
						</div>
					</div>
					<div>
						<label
							htmlFor="phone"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
						>
							Nr. Telefon
						</label>
						<input
							type="tel"
							id="phone"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="07********"
							required
							name="telefon"
							value={telefon}
							onChange={handleChangeInput}
						></input>
					</div>
					
				
				<div>
						<label
							htmlFor="last_name"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
						>
							Data
						</label>
						<input
							type="date"
							id="last_name"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Doe"
							required
							name="data"
							value={data}
							onChange={handleChangeInput}
						></input>
					</div>
						
				<div className='timepicker relative  '>
				<label
							htmlFor="last_name"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
						>
							Ora
						</label>
						<input
							type="time"
							id="last_name"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Ora"
							required
							name="ora"
							value={ora}
							onChange={handleChangeInput}
						></input>
						</div>
					</div>
					<div>
						<label
							htmlFor="last_name"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
						>
							Problema
						</label>
						<textarea 
							type="textarea"
							rows="5"
							id="last_name"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Descrieti problema ..."
							required
							name="problema"
							value={problema}
							onChange={handleChangeInput}
						></textarea>
					</div>
				<label
					forHtml="default-range"
					className="form-label block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
				>
					Nivel de Urgenta
				</label>
				<input
					min="0"
					max="100"
					// value="2.5"
					step="0.5"
					id="default-range"
					type="range"
					name="nivel"
					value={nivel}
					onChange={handleChangeInput}
					className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
				></input>{" "}
				<label
					forHtml="countries"
					className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
				>
					Tip Interventie
				</label>
				<select
					name="interventie"
					value={interventie}
					onChange={handleChangeInput}
					id="countries"
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				>
					<option selected>Extractie </option>
					<option value="Consultație">Consultație</option>
					<option value="Ortodontie">Ortodontie</option>
					<option value="Implantologie">Implantologie</option>
					<option value="Protetică">Protetică dentară și lucrări dentare</option>
				</select>
				<div className="pt-6 flex items-start mb-6">
					<div className="flex items-center h-6 px-1">
						<input
							id="remember"
							type="checkbox"
							value=""
							className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
							required
						></input>
					</div>
					<label
						htmlFor="remember"
						className=" ml-2 text-sm font-medium text-gray-900 dark:text-gray-400"
					>
						I agree with the{" "}
						<a
							href="#"
							className="text-blue-600 hover:underline dark:text-blue-500"
						>
							terms and conditions
						</a>
						.
					</label>
				</div>
				<button
					type="submit"
					className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					Trimite cerere programare
				</button>
			</form>
		</div>
	);
}
