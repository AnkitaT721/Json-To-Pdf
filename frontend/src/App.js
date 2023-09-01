import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import StudentPdf from "./component/StudentPdf";
import AllStudents from "./component/AllStudents";
import EditStudent from "./component/EditStudent";
import MergePdfs from "./component/MergePdfs";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student/:id" element={<StudentPdf />} />
        <Route path="/students" element={<AllStudents />} />
        <Route path="/update/:id" element={<EditStudent />} />
        <Route path="/mergepdfs" element={<MergePdfs />} />
      </Routes>
    </>
  );
}

export default App;
