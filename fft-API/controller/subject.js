import Subject from "../model/dataModel.js";
import Teacher from "../model/teacher.js";


const CreateSubject = async (req, res) => {
    try {
        const { subject, pyq, mustdo, mostRepeated, units, price, img } = req.body;
        const { id: teacherId } = req.params;

        // Check if the teacher exists
        const teacher = await Teacher.findById(teacherId);
        if (!teacher) {
            return res
                .status(404)
                .json({ success: false, message: "Teacher not found" });
        }
        const newSubject = new Subject({
            subject,
            pyq,
            mustdo,
            mostRepeated,
            units,
            img,
            price,
        });
        await newSubject.save();
        teacher.subject.push(newSubject._id);
        await teacher.save();

        // Send a success response
        res
        .status(201)
        .json({ success: true, message: "Course uploaded successfully",data:newSubject });
    } catch (error) {
        // If there's an error, send an error response
        console.error(error);
        res
        .status(500)
        .json({ success: false, message: "Failed to upload course" });
    }
};
const updateSubject = async (req, res) => {
  try {
    const subjectData = req.body;
    const {id:subjectId}  = req.params;

    const updatedSubject = await Subject.findByIdAndUpdate(
        subjectId,
        subjectData,
        { new: true }
    );
    if (!updatedSubject) {
        return res.status(404).json({ message: "Subject not found" });
    }
    res.status(200).json(updatedSubject);
    // Check if the course exists
    // const existingSubject = await Subject.findById(subjectId);
    // if (!existingSubject) {
    //   return res
    //     .status(404)
    //     .json({ success: false, message: "Subject not found",otherMessage:existingSubject });
    // }

    // // Update Subject fields with new data from request body
    // existingSubject.subject = subject;
    // existingSubject.pyq = pyq;
    // existingSubject.mustdo = mustdo;
    // existingSubject.mostRepeated = mostRepeated;
    // existingSubject.units = units;
    // existingSubject.price = price;

    // // Save the updated Subject to the database
    // await existingSubject.save();

    // Send a success response
    // res
    //   .status(200)
    //   .json({ success: true, message: "Subject updated successfully" });
  } catch (error) {
    // If there's an error, send an error response
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Failed to update Subject" });
  }
};
const deleteSubject = async (req, res) => {
    try {
        const subjectId = req.params.id;

        // Check if the course exists
        const existingSubject = await Subject.findById(subjectId);
        if (!existingSubject) {
            return res
                .status(404)
                .json({ success: false, message: "Course not found" });
        }

        // Delete the course from the database
        await existingSubject.deleteOne();

        // Send a success response
        res
        .status(200)
        .json({ success: true, message: "Course deleted successfully" });
    } catch (error) {
        // If there's an error, send an error response
        console.error(error);
        res
        .status(500)
        .json({ success: false, message: "Failed to delete course" });
    }
};
const getallSubject = async (req, res) => {
  try {
    // Search all course
    const users = await Subject.find();
    // Send a success response
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Controller function to add units to a subject
const addUnits = async (req, res) => {
    try {
        const { units } = req.body;
        const {id:subjectId}  = req.params;
        const updatedSubject = await Subject.findByIdAndUpdate(
            subjectId,
            { $push: { units: { $each: units } } },
            { new: true }
        );
        res.status(200).json(updatedSubject);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
// Controller function to add topics to a unit within a subject
const addTopics = async (req, res) => {
    try {
        const { unitIndex, topics } = req.body;
        const {id:subjectId}  = req.params;
        const updatedSubject = await Subject.findByIdAndUpdate(
            subjectId,
            { $push: { [`units.${unitIndex}.topics`]: { $each: topics } } },
            { new: true }
        );
        res.status(200).json(updatedSubject);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
// Controller function to get all units of a subject
const getUnits = async (req, res) => {
    try {
        const {id:subjectId}  = req.params;
        const subjectData = await Subject.findById(subjectId);
        if (!subjectData) {
            return res.status(404).json({ message: "Subject not found" });
        }
        const units = subjectData.units;
        res.status(200).json(units);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
// Controller function to get all topics of a specific unit within a subject
const getTopics = async (req, res) => {
    try {
        const { unitIndex } = req.params;
        const {id:subjectId}  = req.params;
        const subjectData = await Subject.findOne(subjectId);
        if (!subjectData) {
            return res.status(404).json({ message: "Subject not found" });
        }
        const unit = subjectData.units[unitIndex];
        if (!unit) {
            return res.status(404).json({ message: "Unit not found" });
        }
        const topics = unit.topics;
        res.status(200).json(topics);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
// Controller function to update units of a subject
const updateUnits = async (req, res) => {
    try {
        const {id:subjectId}  = req.params;
        const { updatedUnits } = req.body;
        const updatedSubject = await Subject.findByIdAndUpdate(
            subjectId,
            { units: updatedUnits },
            { new: true }
        );
        res.status(200).json(updatedSubject);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
// Controller function to delete units from a subject
const deleteUnits = async (req, res) => {
    try {
        const { unitIndexes } = req.body;
        const {id:subjectId}  = req.params;
        let updateQuery = {};
        unitIndexes.forEach((index) => {
            updateQuery[`units.${index}`] = 1;
        });
        const updatedSubject = await Subject.findByIdAndUpdate(
            subjectId,
            { $unset: updateQuery },
            { new: true }
        );
        res.status(200).json(updatedSubject);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
// Controller function to update a topic within a unit of a subject
const updateTopic = async (req, res) => {
    try {
        const { topicName, solution, notes,unitIndex, topicIndex } = req.body;
        const {id:subjectId}  = req.params;
        const updatedSubject = await Subject.findByIdAndUpdate(
            subjectId,
            { $set: { [`units.${unitIndex}.topics.${topicIndex}`]: { topicName, solution, notes } } },
            { new: true }
        );
        res.status(200).json(updatedSubject);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
// Controller function to delete a topic within a unit of a subject
const deleteTopic = async (req, res) => {
    try {
        const { subjectName, unitIndex, topicIndex } = req.body;
        const {id:subjectId}  = req.params;
        const updatedSubject = await Subject.findByIdAndUpdate(
            subjectId,
            { $unset: { [`units.${unitIndex}.topics.${topicIndex}`]: 1 } },
            { new: true }
        );
        res.status(200).json(updatedSubject);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export { 
    CreateSubject, 
    getallSubject, 
    updateSubject, 
    deleteSubject,
    addUnits,
    getUnits,
    getTopics,
    addTopics,
    updateTopic,
    deleteTopic,
    updateUnits,
    deleteUnits
};
