const express = require("express");
const { createStudent, getAllStudents, updateStudent, getSingleStudent, uploadPdfs } = require("../controllers/studentController");
const router = express.Router();

const multer = require("multer");

const path = require("path");

const upload = multer({dest: path.join(__dirname, "../uploads")})

router.route("/").post(createStudent);
router.route("/student/:id").get(getSingleStudent);
router.route("/students").get(getAllStudents);
router.route("/update/:id").put(updateStudent);
router.route("/mergepdfs").post(upload.array("pdfs", 2), uploadPdfs);


module.exports = router;