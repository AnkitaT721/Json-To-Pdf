import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getMailAddress, uploadPdfs } from "../actions";

const MergePdfs = () => {
  const dispatch = useDispatch();

  const { error } = useSelector((state) => state.uploadFiles);
  const { error:mailError, success } = useSelector((state) => state.getEmail);

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [mail, setMail] = useState("");

  const uploadFilesHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();

    selectedFiles.forEach((file) => {
      formData.append("pdfs", file);
    });

    dispatch(uploadPdfs(formData));

    const myForm = new FormData();

    myForm.set("mail", mail);
    dispatch(getMailAddress(myForm));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  };

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }
    if (success) {
      alert("Email sent successfully");
    }

    if (mailError) {
      alert(mailError);
      dispatch(clearErrors());
    }
  }, [dispatch, error, success, mailError]);

  return (
    <>
    <div className="main-container" id="main">
      <h1>Merge Pdf</h1>
      <p className="info">Select pdf files</p>
      <div>
        <form className="merge-form" onSubmit={uploadFilesHandler}>
          <input
            type="file"
            className="merge-file"
            multiple
            accept=".pdf"
            onChange={handleFileChange}
          />
          <p className="info">Provide email address to send the merged file</p>
          <input className="email" type="email" value={mail} placeholder="Email" onChange={(e) => setMail(e.target.value)}/>
          <input
            type="submit"
            value="Merge and Send"
            className="submit-pdfs"
            id="fileInput"
          />
        </form>
      </div>
      </div>
    </>
  );
};

export default MergePdfs;
