import React, { useState } from "react";
import "./styles.css";
import StudentName from "./components/StudentName";
import StudentDetail from "./components/StudentDetail";

export default function App() {
  const students = [
    { id: 1, name: "ABCD", details: "Lorem Ipsum ABCD" },
    { id: 2, name: "CDEF", details: "Lorem Ipsum CDEF" },
    { id: 3, name: "FGHI", details: "Lorem Ipsum FGHI" },
    { id: 4, name: "IJKL", details: "Lorem Ipsum IJKL" },
    { id: 5, name: "LMNO", details: "Lorem Ipsum LMNO" },
    { id: 6, name: "OPQR", details: "Lorem Ipsum OPQR" },
    { id: 7, name: "RSTU", details: "Lorem Ipsum RSTU" }
  ];

  const [studentsToShow, setStudentsToShow] = useState(students);

  const [detailStudent, setDetailStudent] = useState(students[0].details);

  function handleNamelick(details) {
    const studentDetail = details;
    setDetailStudent(studentDetail);
  }
  function handleChange(event) {
    setDetailStudent("");
    let searchText = event.target.value;

    const studentList = students.filter((student) => {
      return (
        student.name.toLowerCase().includes(searchText.toLowerCase()) && student
      );
    });

    if (studentList.length === 0) setDetailStudent("No Student Found");

    setStudentsToShow(studentList);
  }

  return (
    <div className="App">
      <input
        className="searchBar"
        type="text"
        placeholder="🔎 Search Name"
        onChange={handleChange}
      />
      <div className="data">
        <div className="nameList">
          <h1 className="top">Students Name</h1>
          {studentsToShow.map((student) => (
            <StudentName
              key={student.id}
              name={student.name}
              details={student.details}
              onClick={() => handleNamelick(student.details)}
            />
          ))}
        </div>
        <div className="detail">
          <h1 className="top">Students Details</h1>
          <StudentDetail detail={detailStudent} />
        </div>
      </div>
    </div>
  );
}
