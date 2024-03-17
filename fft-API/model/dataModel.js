import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema(
  {
    subject: String,
    img: String,
    pyq: [String],
    mustdo: String,
    mostRepeated: String,
    units: [
      {
        topics: [
          {
            topicName: String,
            solution: String,
            notes: String,
          },
        ],
      },
    ],
    price: Number,
  },
  { timestamps: true }
);
const subject = mongoose.model("Subject", subjectSchema);
export default subject;
