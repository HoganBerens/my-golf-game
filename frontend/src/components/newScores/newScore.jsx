import React from "react";
import "./newScore.css";
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
    <div className="container-fluid vh-100 vw-100 d-flex justify-content-center align-items-center ">
      <FontAwesomeIcon icon={faChevronUp} className="fa-4x" />
      <img className="col-sm-5" src={fairwayPhoto} />
      <FontAwesomeIcon icon={faChevronRight} className="fa-4x" />
      <FontAwesomeIcon icon={faChevronDown} className="fa-4x" />
      <FontAwesomeIcon icon={faChevronLeft} className="fa-4x" />
    </div>
  );
};

export default NewScore;
