import connectDB from "../../utils/connectDB";
import Programare from "../../models/programare";

connectDB();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
	switch (req.method) {
		case "POST":
			await Add(req, res);
			break;
	}
};

const Add = async (req, res) => {
	try {
		const {
			nume,
			prenume,
			telefon,
			email,
			interventie,
			nivel,
			ora,
			data,
			problema,
		} = req.body;
		const newProgramare = new Programare({
			nume,
			prenume,
			telefon,
			email,
			interventie,
			nivel,
			ora,
			data,
			problema,
		});
		await newProgramare.save();
		res.json({ msg: "Register Success !" });
	} catch (err) {
		return res.status(500).json({ err: err.message });
	}
};
