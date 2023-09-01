import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, uploadPdfs } from "../actions";

const MergePdfs = () => {
  const dispatch = useDispatch();

  const { error, pdfs, success } = useSelector((state) => state.uploadFiles);

  const [selectedFiles, setSelectedFiles] = useState([]);

  console.log(pdfs);

  const uploadFilesHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();

    selectedFiles.forEach((file) => {
      formData.append("pdfs", file);
    });

    dispatch(uploadPdfs(formData));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (success) {
      setSelectedFiles([]);
    }
  }, [dispatch, error, success]);

  return (
    <>
      <h1>Merge Pdf</h1>
      <p>Select pdf files</p>
      <div>
        <form className="merge-form" onSubmit={uploadFilesHandler}>
          <input
            type="file"
            className="merge-file"
            multiple
            accept=".pdf"
            onChange={handleFileChange}
          />
          <input
            type="submit"
            value="Submit"
            className="submit-pdfs"
            id="fileInput"
          />
        </form>
      </div>
    </>
  );
};

export default MergePdfs;
