import React, { useRef, useState, useEffect } from "react";
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
  const [missedFairway, setMissedFairway] = useState(false);
  const [missedGreen, setMissedGreen] = useState(false);
  const [roundScore, setRoundScore] = useState([]);
  const element = document.getElementById("holeTitle");
  let user = sessionStorage.getItem("user");
  let userObj = JSON.parse(user);
  let clubs = userObj.clubs;
  let missedFairwayLieOptions = [
    "Rough",
    "Bunker",
    "In trees",
    "Hazard",
    "Other",
  ];
  let missedGreenLieOptions = [
    "Fairway cut",
    "Rough",
    "Bunker",
    "In trees",
    "Hazard",
    "Other",
  ];

  let clubHitOffTeeRef = useRef("");
  let fairwayHitRef = useRef("");
  let missedFairwayLieRef = useRef("");
  let apprDistanceRef = useRef("");
  let apprClubRef = useRef("");
  let greenHitRef = useRef("");
  let missedGreenLieRef = useRef("");
  let secondPuttDistanceRef = useRef("");
  let numberOfPuttsRef = useRef("");
  let holeScoreRef = useRef("");

  let newScoreSubmitHandler = (event) => {
    event.preventDefault();
    let holeResults = {
      clubHitOffTee: clubHitOffTeeRef.current.value,
      fairwayHit: fairwayHitRef.current,
      missedFairwayLie: missedFairwayLieRef.current.value,
      approachDistance: apprDistanceRef.current.value,
      apprClub: apprClubRef.current.value,
      greenHit: greenHitRef.current,
      missedGreenLie: missedGreenLieRef.current.value,
      secondPuttDistance: secondPuttDistanceRef.current,
      numberOfPutts: numberOfPuttsRef.current,
      holeScore: holeScoreRef.current.value,
    };

    setRoundScore((roundScore) => [...roundScore, holeResults]);

    element.scrollIntoView(true);

    clubHitOffTeeRef.current.value = "";
    fairwayHitRef.current = "";
    missedFairwayLieRef = "";
    apprDistanceRef.current.value = "";
    apprClubRef.current = "";
    greenHitRef.current = "";
    missedGreenLieRef.current = "";
    secondPuttDistanceRef.current = "";
    numberOfPuttsRef.current = "";
    holeScoreRef.current.value = "";

    console.log(holeResults);
  };

  let fairwayHitHandler = (event) => {
    fairwayHitRef.current = event.target.id;
    fairwayHitRef.current !== "fairway"
      ? setMissedFairway(true)
      : setMissedFairway(false);
  };
  let greenHitHandler = (event) => {
    greenHitRef.current = event.target.id;
    greenHitRef.current !== "green"
      ? setMissedGreen(true)
      : setMissedGreen(false);
  };

  let holeNumber = "";

  for (let i = 0; i <= roundScore.length; i++) {
    holeNumber = i + 1;
  }

  return (
    <div className=" newScore-container container">
      <h1 id="holeTitle" className="newScore-title">
        Hole: {holeNumber}
      </h1>
      <form className="newScore-form" onSubmit={newScoreSubmitHandler}>
        <select ref={clubHitOffTeeRef} name="selectedClubOffTee">
          <option hidden={true} value="">
            Select the club you hit off the tee
          </option>
          {clubs.map((club, index) => (
            <option key={index}>{club}</option>
          ))}
        </select>
        <div>Where did you tee shot go?</div>
        <div className="newScore-fairway-container">
          <img
            onClick={fairwayHitHandler}
            className="fairway-photo "
            id="fairway"
            src={fairwayPhoto}
          />
          <FontAwesomeIcon
            onClick={fairwayHitHandler}
            icon={faChevronUp}
            id="up"
            className=" fairway-chevron-up fa-3x"
          />
          <FontAwesomeIcon
            onClick={fairwayHitHandler}
            id="right"
            icon={faChevronRight}
            className=" fairway-chevron-right  fa-3x"
          />
          <FontAwesomeIcon
            onClick={fairwayHitHandler}
            id="down"
            icon={faChevronDown}
            className=" fairway-chevron-down fa-3x"
          />
          <FontAwesomeIcon
            onClick={fairwayHitHandler}
            id="left"
            icon={faChevronLeft}
            className=" fairway-chevron-left fa-3x"
          />
        </div>
        {missedFairway ? (
          <select>
            <option hidden={true}>
              What kind of lie did you have off the tee?
            </option>
            {missedFairwayLieOptions.map((lieOption, index) => (
              <option ref={missedFairwayLieRef} key={index}>
                {lieOption}
              </option>
            ))}
          </select>
        ) : (
          <div></div>
        )}
        <input
          id="approach-distance"
          placeholder="Approach Distance"
          type="text"
          ref={apprDistanceRef}
        />
        <select>
          <option hidden={true}>What club are you hitting?</option>
          {clubs.map((club, index) => (
            <option ref={apprClubRef} key={index}>
              {club}
            </option>
          ))}
        </select>
        <div>Where did your approach shot go?</div>
        <div className="newScore-green-container">
          <img
            onClick={greenHitHandler}
            id="green"
            className=" green-photo "
            src={greenPhoto}
          />
          <FontAwesomeIcon
            id="long"
            onClick={greenHitHandler}
            icon={faChevronUp}
            className=" green-chevron-up fa-3x"
          />
          <FontAwesomeIcon
            id="right"
            onClick={greenHitHandler}
            icon={faChevronRight}
            className=" green-chevron-right  fa-3x"
          />
          <FontAwesomeIcon
            id="short"
            onClick={greenHitHandler}
            icon={faChevronDown}
            className=" green-chevron-down fa-3x"
          />
          <FontAwesomeIcon
            id="left"
            onClick={greenHitHandler}
            icon={faChevronLeft}
            className=" green-chevron-left fa-3x"
          />
        </div>
        {missedGreen ? (
          <select>
            <option hidden={true}>
              What kind of lie did you have around the green?
            </option>
            {missedGreenLieOptions.map((greenLieOption, index) => (
              <option ref={missedGreenLieRef} key={index}>
                {greenLieOption}
              </option>
            ))}
          </select>
        ) : (
          <div></div>
        )}
        <input
          className="input-putt-distance"
          id="second-putt-distance"
          placeholder="First Putt Distance"
          type="text"
          ref={secondPuttDistanceRef}
        />
        <input
          className="input-hole-score"
          id="hole-score"
          placeholder="Hole Score"
          type="text"
          ref={holeScoreRef}
        />
        <button type="submit">Continue to Next Hole</button>
      </form>
    </div>
  );
};

export default NewScore;
