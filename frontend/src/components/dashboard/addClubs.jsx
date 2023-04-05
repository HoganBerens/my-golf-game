import React from "react";

const AddClubs = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));

  return (
    <div>
      <div>Add clubs here</div> {console.log(user)}
    </div>
  );
};

export default AddClubs;
