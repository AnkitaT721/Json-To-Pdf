import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { clearErrors, getSingleStudent } from "../actions";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const StudentPdf = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  const { error, student } = useSelector((state) => state.getStudent);

  const [loader, setLoader] = useState(false);

  const downloadPDF = () => {
    const capture = document.querySelector(".student-data");
    setLoader(true);
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      const doc = new jsPDF({orientation: "vertical"});
      doc.text(75, 20, 'Student Information');
      doc.addImage(imgData, 'PNG', 16, 30);
      setLoader(false);
      doc.save("student.pdf");
    });
  };

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }

    dispatch(getSingleStudent(id));
  }, [dispatch, error, id]);

  return (
    <>
      <div className="student-data">
        <div className="data">
          <h2>Name:</h2>
          <p>{student.name}</p>
        </div>

        <div className="data">
          <h2>Major:</h2>
          <p>{student.major}</p>
        </div>

        {student.address && student.address.length > 0 && (
          <div className="data">
            <h2>Address</h2>

            <div>
              <h3>State:</h3>
              <p>{student.address[0].state}</p>
            </div>

            <div>
              <h3>Zip Code:</h3>
              <p>{student.address[0].zip}</p>
            </div>

            <div>
              <h3>Address Line 1:</h3>
              <p>{student.address[0].address_1}</p>
            </div>

            <div>
              <h3>Address Line 2:</h3>
              <p>{student.address[0].address_2}</p>
            </div>

            <div>
              <h3>City:</h3>
              <p>{student.address[0].city}</p>
            </div>
          </div>
        )}
      </div>

      <button
        className="download-btn"
        onClick={downloadPDF}
        disabled={!(loader === false)}
      >
        {loader ? <span>Loading Pdf...</span> : <span>Download Pdf</span>}
      </button>
    </>
  );
};

export default StudentPdf;
