import { getData } from "../utils/fetchData";
import { useState } from "react";
import Layout from "../components/Layout"
const Admin = (props) => {
	const [programares, setprogramares] = useState(props.programares);

	return (
		<div>
		<Layout />

			<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
				<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
						<tr>
							<th scope="col" className="px-1 py-3">
								Nume si Prenume 
							</th>
							<th scope="col" className="px-1 py-3">
								telefon
							</th>
							<th scope="col" className="px-1 py-3">
								email
							</th>
							<th scope="col" className="px-1 py-3">
								Interventie
							</th>
							<th scope="col" className="px-1 py-3">
								Data si Ora
							</th>
							{/* <th scope="col" className="px-6 py-3">
								Descriere
							</th> */}
						
							<th scope="col" className="px-6 py-3">
								<span className="sr-only">Edit</span>
							</th>
						</tr>
					</thead>
					<tbody>
          {programares.map((item) => (
				<tr key={programares._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
        >
         {item.nume} {item.prenume}
        </th>
        <td className="px-1 py-4 font-medium text-gray-900">{item.telefon}</td>
        <td className="px-1 py-4 font-medium text-gray-900">{item.email}</td>
        <td className="px-1 py-4 font-medium text-gray-900">{item.interventie}</td>
        <td className="px-1 py-4 font-medium text-gray-900">{item.data} {item.ora}</td>

        {/* <td className="px-6 py-4 font-medium text-gray-900">{item.problema}</td> */}

        <td className="px-6 py-4 text-right">
          <a
            href="#"
            className="px-2 font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Edit
          </a>
          <a
            href="#"
            className="font-medium text-red-600 dark:text-blue-500 hover:underline"
          >
            Remove
          </a>
					
        </td>
				
      </tr>
			))}
						
						Total Programari {props.result}
					</tbody>
				</table>
			</div>
		
		</div>
	);
};

export async function getServerSideProps() {
	const res = await getData("getprogramari");
	return {
		props: {
			programares: res.programares,
			result: res.result,
		},
	};
}

export default Admin;
