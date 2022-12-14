/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Layout from "../components/Layout";

export default function Home() {
	const today = new Date();
	
	return (
		<div>
			<Head>
				<title>Dentist</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout />
			<div className="p-5 relative overflow-x-auto shadow-md rounded-lg">
				<table className="w-full text-sm text-left text-gray-500 ">
					<thead className="text-xs text-gray-700 uppercase bg-gray-150 ">
						<tr>
							<th scope="col" className="px-1 py-3">
								Luni 
							</th>
							<th scope="col" className="px-1 py-3">
								Marti
							</th>
							<th scope="col" className="px-1 py-3">
								Miercuri
							</th>
							<th scope="col" className="px-1 py-3">
								Joi
							</th>
							<th scope="col" className="px-1 py-3">
								Vineri
							</th>
						</tr>
					</thead>
					<tbody>
						<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
							<td className="font-sans font-medium px-1 py-4">10:00 - 18:00</td>
							<td className="font-sans font-medium px-1 py-4">10:00 - 18:00</td>
							<td className="font-sans font-medium px-1 py-4">10:00 - 18:00</td>
							<td className="font-sans font-medium px-1 py-4">10:00 - 18:00</td>
							<td className="font-sans font-medium px-1 py-4">10:00 - 18:00</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className=" p-4 grid place-items-center ">
				<iframe
					className="md:h-[28rem] md:w-3/4 h-full w-full aspect-video border-solid border-2 border-gray-300 rounded-xl"
					src="https://maps.google.com/maps?q=47.2093,24.7608&amp;z=17&amp;iwloc=near&amp;output=embed"
					// src="https://maps.google.com/maps?q=45.7574886,23.9693869&amp;z=17&amp;iwloc=near&amp;output=embed"
				></iframe>
			</div>
			<div className="p-4 grid lg:grid-cols-2 gap-4 bg-gray-800">
				<div className="p-1 font-sans font-medium text-white border-solid border-2 border-gray-600 rounded-xl">
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; ??n decursul celor 19 ani de
					existen????, echipa din spatele cabinetului stomatologic CMI Dr. Gabor
					Dorela a c????tigat ??ncrederea unui num??r impresionant de pacien??i prin
					calitatea serviciilor oferite ??i profesionalismul cu care sunt trata??i
					clien??ii. Medici cu ani de experien???? practic??, asistente mereu ??n
					ajutor ??i echipamente medicale performante conlucreaz?? la noi pentru a
					forma o atmosfer?? relaxant?? ??i profesional??, av??nd permanent ??n minte
					s??n??tatea oral?? a pacien??ilor. Atunci c??nd vine vorba de s??natate,
					compromisurile nu ????i g??sesc locul sub nici o form??.
					<br></br>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Acest principiu ne ajut?? s??
					ne consiliem pacien??ii ??n ceea ce prive??te prevenirea ??i tratarea
					problemelor dentare, dezvolt??nd ??n acela??i timp planuri de tratament
					pe termen lung specifice fiec??rui caz ??n parte. V?? invit??m s?? vede??i
					ce ??nseamn?? excelen??a ??n stomatologie ??n termeni practici.
				</div>
				<div>
					<img
						className="object-cover w-full h-full aspect-video border-solid border-2 border-gray-300 rounded-xl "
						src="/images/img1.jpg"
					></img>
				</div>
			</div>
			<div className="p-4 grid lg:grid-cols-2 gap-4 ">
				<div className="p-1 font-sans font-medium border-solid border-2 border-gray-600 rounded-xl">
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;Dentistry, also known as dental
					medicine and oral medicine, is a branch of medicine that consists of
					the study, diagnosis, prevention, and treatment of diseases,
					disorders, and conditions of the oral ...Dentistry, also known as
					dental medicine and oral medicine, is a branch of medicine that
					consists of the study, diagnosis, prevention, and treatment of
					diseases, disorders, and conditions of the oral ...
					<br></br>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Dentistry, also known as
					dental medicine and oral medicine, is a branch of medicine that
					consists of the study, diagnosis, prevention, and treatment of
					diseases, disorders, and conditions of the oral ...
				</div>
				<div>
					<img
						className="object-cover w-full h-full aspect-video border-solid border-2 border-gray-300 rounded-xl "
						src="/images/img2.jpg"
					></img>
				</div>
			</div>
		</div>
	);
}
