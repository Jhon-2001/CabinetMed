import connectDB from '../../utils/connectDB';
import Programare from "../../models/programare";

connectDB();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  switch(req.method){
    case "GET":
      await getPosts(req, res);
      break;
    // case 'POST':
    //   await createProduct(req, res);
    //   break;
  }
};

const getPosts = async (req, res) => {
  try {
    const programares = await Programare.find();

    res.json({
      status: 'success',
      result: programares.length,
      programares
    });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};
