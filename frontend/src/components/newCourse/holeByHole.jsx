import React from "react";

const HoleByHole = () => {
  let course = sessionStorage.getItem("course");

  return (
    <div>
      <form>
        <input id="par-for-hole" placeholder="Par For Hole" className="" />
        <input id="handicap-for-hole" placeholder="Hole Handicap" />
        {console.log(course)}
      </form>
    </div>
  );
};

export default HoleByHole;
