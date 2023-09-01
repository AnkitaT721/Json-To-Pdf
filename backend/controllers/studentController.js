const Student = require("../models/studentModel");
const express = require("express");

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

//get single student
exports.getSingleStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);

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


//upload pdf files to merge
exports.uploadPdfs = async (req, res) => {
  try {
    res.send({
      status: 200,
      success: true,
      files: req.files
    })
  } catch (error) {
    res.send({ status: 400, success: false, message: error.message });
  }
};