const User = require("../models/user.schema");
// Register a new student profile
const newStudent = async (req, res) => {
    const { firstName, lastName, email, age } = req.body;
    //validate the input
    if (!firstName || !lastName || !email || !age ) {
        return res.status(400).json({ message: "All fields are required" });
    }
    try {
        // check if user already exists
        const existingUser = await User.findOne({email});
        if (existingUser) {
            return res.status(400).json({ message: "Student already exists" });
        }
        //create a new user
        const newUser = new User({
            firstName,
            lastName,
            email,
            age
        });
        await newUser.save();
        res.status(201).json({ message: "Student registered successfully", newUser})
        }catch (error) {
        console.error("Error creating student:", error);
        res.status(500).json({ message: "Internal server error" });
        }
};

// Read all students
const getAllStudents = async(req, res) => {
    try {
        const students = await User.find();
            res.status(200).json(students);
    }catch (error) {
        console.error("Error fetching Students:", error);
        res.status(500).json({message: "internal server error"})
    }
};

// Read a student by ID
const getStudentByID = async (req, res) => {
    const { id } = req.params;
    try {
        const student = await User.findById(id);
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
        res.status(200).json(student);
    } catch (error) {
        console.error("error fetching student:", error);
        res.status(500).json({message: "internal server error"});
        }
};

// Update a student by ID
const updateStudent = async (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, email, age } = req.body;

    if (!firstName && !lastName && !email && !age) {
        return res.status(400).json({ message: "Provide at least one field to update" });
    }
    try {
    // Check if new email already exists for another user
        if (email) {
            const existingEmail = await User.findOne({ email, _id: { $ne: id } });
        if (existingEmail) {
            return res.status(409).json({ message: "Email already exists" });
        }
        }
        const updatedStudent = await User.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedStudent) {
            return res.status(404).json({ message: "Student not found" });
        }
        res.status(200).json({ message: "Student updated successfully", student: updatedStudent });
    } catch (error) {
        console.error("Error updating student:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

//Delete by Id
const deleteStudent = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedStudent = await User.findByIdAndDelete( id );
        if (!deletedStudent) {
            return res.status(404).json({message: "Student not found"});
        }
        res.status(200).json({message: "Student deleted", deletedStudent});
    } catch (error) {
        console.error("error deleting student", error);
        res.status(500).json({message: "internal server error"});
    }
};

// Get Count of All Students (GET)
const getStudentCount = async (req, res) => {
    try {
        const count = await User.countDocuments();
            res.status(200).json({ count });
    } catch (error) {
        console.error("Error fetching student count:", error);
        res.status(500).json({ message: "internal server error" });
    }
};

module.exports = {
    newStudent,
    getAllStudents,
    getStudentByID,
    updateStudent,
    deleteStudent,
    getStudentCount

}