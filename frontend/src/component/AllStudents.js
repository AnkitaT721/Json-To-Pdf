import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getAllStudents } from "../actions";
import { DataGrid } from "@mui/x-data-grid";
import { BsPencilSquare } from "react-icons/bs";
import { Link } from "react-router-dom";

const AllStudents = () => {
  const dispatch = useDispatch();

  const [keyword, setKeyword] = useState("");

  const { error, students } = useSelector((state) => state.allStudents);

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }

    dispatch(getAllStudents());
  }, [dispatch, error]);

  const columns = [
    { field: "name", headerName: "Name", minWidth: 200, flex: 0.5 },

    {
      field: "major",
      headerName: "Major",
      minWidth: 200,
      flex: 0.6,
    },

    {
      field: "state",
      headerName: "State",
      minWidth: 180,
      flex: 1,
    },

    {
      field: "zip",
      headerName: "Zip Code",
      minWidth: 180,
      flex: 0.4,
    },

    {
      field: "address_1",
      headerName: "Address Line 1",
      minWidth: 300,
      flex: 0.4,
    },

    {
      field: "address_2",
      headerName: "Address Line 2",
      minWidth: 350,
      flex: 0.4,
    },

    {
      field: "city",
      headerName: "City",
      minWidth: 180,
      flex: 0.4,
    },

    {
      field: "action",
      flex: 0.3,
      headerName: "Action",
      minWidth: 60,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/update/${params.id}`}>
              <BsPencilSquare />
            </Link>
          </>
        );
      },
    },
  ];

  const rows = [];

  students &&
    students
      .filter((student) => {
        return keyword === ""
          ? students
          : (student.name && student.name.toLowerCase().includes(keyword)) ||
              (student.major && student.major.toLowerCase().includes(keyword)) ||
              (student.address[0].state &&
                student.address[0].state.toLowerCase().includes(keyword)) ||
              (student.address[0].zip &&
                student.address[0].zip.toString().includes(keyword)) ||
              (student.address[0].city &&
                student.address[0].city.toLowerCase().includes(keyword));
      })
      .forEach((student) => {
        rows.push({
          id: student._id,
          name: student.name,
          major: student.major,
          state: student.address[0].state,
          zip: student.address[0].zip,
          address_1: student.address[0].address_1,
          address_2: student.address[0].address_2,
          city: student.address[0].city,
        });
      });

      const searchFileHandler = (e) => {
        e.preventDefault();
      };

  return (
    <>
        <form className="searchBox" onSubmit={searchFileHandler}>
          <input
            type="text"
            placeholder="User Input"
            onChange={(e) => setKeyword(e.target.value)}
          />

          <input type="submit" value="search" />
        </form>


      <div>
        {students && students.length > 0 ? (
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            autoHeight
          />
        ) : (
          <h1 className="no-student">No student found</h1>
        )}
      </div>
    </>
  );
};

export default AllStudents;
