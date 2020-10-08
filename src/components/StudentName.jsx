import React from "react";

function StudentName(props) {
  const { details, name, onClick } = props;
  return (
    <div className="name">
      <h1 onClick={() => onClick({ details })}>{name}</h1>
    </div>
  );
}

export default StudentName;
