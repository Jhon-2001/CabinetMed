import mongoose from "mongoose";

const programareSchema = new mongoose.Schema(
  {
    nume: { type: String, required: true },
    prenume: { type: String, required: true },
    telefon: { type: String, required: true },
    email: { type: String },
    interventie: { type: String, required: true },
    nivel: { type: Number },
    data:{ type: String },
    ora:{ type: String },
    problema: { type: String },


  },
  {
    timestamps: true,
  }
);
let Programare =
  mongoose.models.Programare || mongoose.model("Programare", programareSchema);
export default Programare;
