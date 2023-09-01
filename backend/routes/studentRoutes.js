const express = require("express");
const { createStudent, getAllStudents, updateStudent, getSingleStudent } = require("../controllers/studentController");
const router = express.Router();

router.route("/").post(createStudent);
router.route("/student/:id").get(getSingleStudent);
router.route("/students").get(getAllStudents);
router.route("/update/:id").put(updateStudent);


module.exports = router