import React, { useRef, useState } from "react";
import keemStar from "./fullStar.png";
import halfKeemStar from "./halfStar.png";
import emptyKeemStar from "./emptyStar.png";
import styled from "styled-components";
export default function Rating({ value, setVal, deStars }) {
  const getStars = (value) => {
    const floVal = parseFloat(value);
    const parseValue = Math.round(floVal * 2) / 2;
    const fullStars = Math.floor(parseValue);
    const halfStars = fullStars < parseValue;
    const stars = [];
    for (let i = 1; i <= fullStars; i++) {
      stars.push(<img alt="star" key={i} src={keemStar}></img>);
    }
    if (halfStars) {
      stars.push(<img alt="halfStar" src={halfKeemStar}></img>);
    }
    if (parseValue < 5) {
      const leftStars = 5 - Math.ceil(parseValue);
      for (let i = 1; i <= leftStars; i++) {
        stars.push(<img alt="halfStar" src={emptyKeemStar}></img>);
      }
    }
    console.table(halfStars, parseValue, fullStars);
    return stars;
  };
  const ref = useRef(null);
  const starClick = (e) => {
    const clientPos = e.clientX - 275;
    let starCount = Math.round(clientPos / 45) / 2;
    if (starCount < 0) {
      starCount = 0;
    }
    console.log(clientPos);
    setVal(starCount);
  };
  return (
    <Stars ref={ref} onClick={starClick}>
      <h2>Average Rating is:{deStars}</h2>
      {getStars(value)}
      <h2>User selected Rating is:{value}</h2>
    </Stars>
  );
}

const Stars = styled.div`
  width: 1000px;
`;
