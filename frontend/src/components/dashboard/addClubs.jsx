import React, { useContext } from "react";
import { UserContext } from "../../App";

const AddClubs = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <div>Add clubs here</div> {console.log(user)}
    </div>
  );
};

export default AddClubs;
