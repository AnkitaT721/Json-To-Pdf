import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import StudentPdf from "./component/StudentPdf";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student/:id" element={<StudentPdf />} />
      </Routes>
    </>
  );
}

export default App;
