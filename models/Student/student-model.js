import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    grade: { type: String, required: true },
    assignedTeacher: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const studentModel = mongoose.model("student", studentSchema);


export default studentModel;