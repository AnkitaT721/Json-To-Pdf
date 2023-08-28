const Student = require("../models/studentModel");

//create student
exports.createStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);

    res.status(201).json({
      success: true,
      student,
    });
  } catch (error) {
    res.send({ status: 400, success: false, message: error.message });
  }
};

//get all students
exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();

    res.status(200).json({
      success: true,
      students,
    });
  } catch (error) {
    res.send({
      status: 400,
      success: false,
      message: error.message,
    });
  }
};

//update student details
exports.updateStudent = async (req, res) => {
  try {
    let student = await Student.findById(req.params.id);

    student = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });

    res.status(200).json({
      success: true,
      student,
    });
  } catch (error) {
    res.send({
      status: 400,
      success: false,
      message: error.message,
    });
  }
};
