import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getSingleStudent, updateStudent } from "../actions";
import { UPDATE_STUDENT_RESET } from "../constants";
import { useNavigate, useParams } from "react-router-dom";

const EditStudent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  
  const { student, error } = useSelector((state) => state.getStudent);
  const { error: updateError, isUpdated } = useSelector(
    (state) => state.editStudent
  );

  const [name, setName] = useState("");
  const [major, setMajor] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState();
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");

  const updateStudentSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("major", major);

    // Add the address as an object
    myForm.set("address[0][state]", state);
    myForm.set("address[0][zip]", zip);
    myForm.set("address[0][address_1]", address1);
    myForm.set("address[0][address_2]", address2);
    myForm.set("address[0][city]", city);

    dispatch(updateStudent(id, myForm));
  };

  useEffect(() => {
    if (student && student._id !== id) {
      dispatch(getSingleStudent(id));
    } else {
      setName(student.name);
      setMajor(student.major);
      setState(student.address[0].state);
      setZip(student.address[0].zip);
      setAddress1(student.address[0].address_1);
      setAddress2(student.address[0].address_2);
      setCity(student.address[0].city);
    }
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }

    if (updateError) {
      alert(updateError);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      alert("Student Updated Successfully");
      navigate(`/student/${student._id}`);
      dispatch({ type: UPDATE_STUDENT_RESET });
    }
  }, [
    dispatch,
    navigate,
    error,
    updateError,
    student,
    isUpdated,
    id,
    student._id,
  ]);

  return (
    <>
      <section className="student">
        <div className="student-form">
          <h2 className="form-title">Student Data</h2>

          <form onSubmit={updateStudentSubmitHandler}>
            <p>
              Name: <span></span>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="off"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </p>

            <p>
              Major: <span></span>
              <input
                type="text"
                name="major"
                id="major"
                autoComplete="off"
                value={major}
                onChange={(e) => setMajor(e.target.value)}
                placeholder="Major"
              />
            </p>

            <p className="address">
              Address: <span></span>
              <input
                type="text"
                name="state"
                id="state"
                autoComplete="off"
                value={state}
                onChange={(e) => setState(e.target.value)}
                placeholder="State"
              />
              <input
                type="number"
                name="zip"
                id="zip"
                autoComplete="off"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                placeholder="ZipCode"
              />
              <input
                type="text"
                name="address_1"
                id="address_1"
                autoComplete="off"
                value={address1}
                onChange={(e) => setAddress1(e.target.value)}
                placeholder="Address Line 1"
              />
              <input
                type="text"
                name="address_2"
                id="address_2"
                autoComplete="off"
                value={address2}
                onChange={(e) => setAddress2(e.target.value)}
                placeholder="Address Line 2"
              />
              <input
                type="text"
                name="city"
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="City"
              />
            </p>

            <button type="submit">Update Student</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default EditStudent;
