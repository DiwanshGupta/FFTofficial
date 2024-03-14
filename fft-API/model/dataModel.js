import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
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
const course = mongoose.model("Course", courseSchema);
export default course;
