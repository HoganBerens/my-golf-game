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
    <div className=" newScore-container container">
      <div className="newScore-fairway-container">
        <img className="fairway-photo " src={fairwayPhoto} />
        <FontAwesomeIcon
          icon={faChevronUp}
          className=" fairway-chevron-up fa-3x"
        />
        <FontAwesomeIcon
          icon={faChevronRight}
          className=" fairway-chevron-right  fa-3x"
        />
        <FontAwesomeIcon
          icon={faChevronDown}
          className=" fairway-chevron-down fa-3x"
        />
        <FontAwesomeIcon
          icon={faChevronLeft}
          className=" fairway-chevron-left fa-3x"
        />
      </div>
      <div>How far did you have in?</div>
      <div className="newScore-green-container">
        <img className=" green-photo " src={greenPhoto} />
        <FontAwesomeIcon
          icon={faChevronUp}
          className=" green-chevron-up fa-3x"
        />
        <FontAwesomeIcon
          icon={faChevronRight}
          className=" green-chevron-right  fa-3x"
        />
        <FontAwesomeIcon
          icon={faChevronDown}
          className=" green-chevron-down fa-3x"
        />
        <FontAwesomeIcon
          icon={faChevronLeft}
          className=" green-chevron-left fa-3x"
        />
      </div>
    </div>
  );
};

export default NewScore;
