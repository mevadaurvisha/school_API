import Student from "../models/Student/student-model.js";

export const addStudent = async (req, res) => {
    try {
        const newStudent = new Student(req.body);
        await newStudent.save();
        res.status(201).json({ message: "Student added successfully", newStudent });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const viewStudent = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
