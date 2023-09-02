const express = require("express");
const { createStudent, getAllStudents, updateStudent, getSingleStudent, uploadPdfs, sendEmail } = require("../controllers/studentController");
const router = express.Router();

const multer = require("multer");

const path = require("path");

const upload = multer({dest: path.join(__dirname, "../public/uploads")})

router.route("/").post(createStudent);
router.route("/student/:id").get(getSingleStudent);
router.route("/students").get(getAllStudents);
router.route("/update/:id").put(updateStudent);
router.route("/mergepdfs").post(upload.array("pdfs", 2), uploadPdfs);
router.route("/sendmail").post(sendEmail);


module.exports = router;