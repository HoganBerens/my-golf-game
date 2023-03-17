import React, { useRef, useState } from 'react';
import './newScore.css';
import {
  faChevronUp,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faCircleQuestion,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import greenPhoto from '../../assets/green.png';
import fairwayPhoto from '../../assets/fairway.png';

const NewScore = () => {
  let fairwayHitRef = useRef('');
  let apprDistanceRef = useRef('');
  let bunkerHitRef = useRef('');
  let greenHitRef = useRef('');
  let puttDistanceRef = useRef('');
  let numberOfPuttsRef = useRef('');
  let holeScoreRef = useRef('');

  let roundScore = [];

  let newScoreSubmitHandler = (event) => {
    event.preventDefault();
    let holeResults = {
      fairwayHit: fairwayHitRef.current,
      approachDistance: apprDistanceRef.current.value,
      bunkerHit: bunkerHitRef.current.value,
      greenHit: greenHitRef.current,
      firstPuttDistance: puttDistanceRef.current.value,
      numberOfPutts: numberOfPuttsRef.current.value,
      holeScore: holeScoreRef.current.value,
    };

    roundScore.push(holeResults);

    fairwayHitRef.current = '';
    apprDistanceRef.current.value = '';
    bunkerHitRef.current.value = '';
    greenHitRef.current = '';
    puttDistanceRef.current.value = '';
    numberOfPuttsRef.current.value = '';
    holeScoreRef.current.value = '';
  };

  let fairwayHitHandler = (event) => {
    fairwayHitRef.current = event.target.id;
  };
  let greenHitHandler = (event) => {
    greenHitRef.current = event.target.id;
  };

  return (
    <div className=" newScore-container container">
      <form className="newScore-form" onSubmit={newScoreSubmitHandler}>
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
        <input
          id="approach-distance"
          placeholder="Approach Distance"
          type="text"
          ref={apprDistanceRef}
        />
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
          <input
            id="bunker-hit"
            placeholder="Did you hit a bunker?"
            type="text"
            ref={bunkerHitRef}
          />
          <input
            id="putt-distance"
            placeholder="First Putt Distance"
            type="text"
            ref={puttDistanceRef}
          />
          <input
            id="number-of-putts"
            placeholder="Number of putts"
            type="text"
            ref={numberOfPuttsRef}
          />
          <input
            id="hole-score"
            placeholder="Hole Score"
            type="text"
            ref={holeScoreRef}
          />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default NewScore;
