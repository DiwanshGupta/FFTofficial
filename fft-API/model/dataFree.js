import mongoose from "mongoose";

const unitsSchema = new mongoose.Schema(
  {
    subject: String,
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
  },
  { timestamps: true }
);

const UnitsModel = mongoose.model("DataFree", unitsSchema);

module.exports = UnitsModel;
