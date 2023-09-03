const Student = require("../models/studentModel");
const {mergePdfs} = require("../mergePdf");
const nodeMailer = require("nodemailer");
const path = require("path");

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
    
    const pdf1Path = path.join(__dirname, '..', 'public', 'uploads', req.files[0].filename);
    const pdf2Path = path.join(__dirname, '..', 'public', 'uploads', req.files[1].filename);

    await mergePdfs(pdf1Path, pdf2Path);
    // res.redirect("http://localhost:3000/merged.pdf");

    res.send({
      status: 200,
      success: true,
      files: req.files
    })
  } catch (error) {
    res.send({ status: 400, success: false, message: error.message });
  }
};


//email the merged pdf
exports.sendEmail = async (req, res) => {  //options object: {email, subject, message} 
  try {

    const {mail} = req.body;

    let transporter = nodeMailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false,    //smtp: Simple Mail Transfer Protocol
      auth: {
          user: "clickshop2079@gmail.com",
          pass: "ztlidkrejfvebdtd"
      }
  })

  let mailOptions = {
    from: "clickshop2079@gmail.com",
    to: mail,
    subject: "Merged Pdf",
    text: "This is your merged Pdf",
    attachments: [
      {
        path: path.join(__dirname, "../upload/merged.pdf")
      }
    ]
};

await transporter.sendMail(mailOptions)

res.send({
  status: 200,
  success: true
})

  } catch (error) {
    res.send({ status: 400, success: false, message: error.message });
  }
}