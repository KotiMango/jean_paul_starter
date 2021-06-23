import React, { useState } from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";
export default function Rating({ value }) {
  const [flyVal, setFly] = useState(null);
  const [valState, setVal] = useState(value);
  const starArray = Array(5).fill(0);
  const starClick = (starNum) => setVal(starNum);
  const starHover = (flyStarNum) => setFly(flyStarNum);
  const hoverEnd = () => setFly(null);
  return (
    <Stars>
      <div>
        {starArray.map((x, indx) => {
          return (
            <FaStar
              key={indx}
              onClick={() => starClick(indx + 1)}
              onMouseOver={() => starHover(indx + 1)}
              onMouseLeave={hoverEnd}
              color={(flyVal || valState) > indx ? "eed202" : "AAAFB4"}
            />
          );
        })}
      </div>
      <ResetBtn onClick={() => setVal(0)}>RESET</ResetBtn>
    </Stars>
  );
}

const Stars = styled.div`
  width: 1000px;
`;
const ResetBtn = styled.button`
  width: 8%;
  font-weight: bold;
  background: transparent;
  border: 2px solid #bae0ff;
  padding: 1rem 1rem;
  color: #0a3a40;
  text-align: center;
  margin-top: 5px;
  cursor: pointer;
  &:hover {
    background-color: #bae0ff;
    color: white;
  }
`;
