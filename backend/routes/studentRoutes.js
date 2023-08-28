const express = require("express");
const { createStudent, getAllStudents, updateStudent } = require("../controllers/studentController");
const router = express.Router();

router.route("/").post(createStudent);
router.route("/students").get(getAllStudents);
router.route("/student/:id").put(updateStudent);


module.exports = router