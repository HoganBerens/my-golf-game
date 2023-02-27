import React from "react";
import {
  faChevronUp,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import greenPhoto from "../../assets/green.png";
import fairwayPhoto from "../../assets/fairway.png";

const NewScore = () => {
  return (
    <div>
      <img src={fairwayPhoto} />
      <img src={greenPhoto} />
      <FontAwesomeIcon icon={faChevronUp} />
      <FontAwesomeIcon icon={faChevronRight} />
      <FontAwesomeIcon icon={faChevronDown} />
      <FontAwesomeIcon icon={faChevronLeft} />
    </div>
  );
};

export default NewScore;
