import styled from "styled-components";
import { useState } from "react";

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  gap: 1.5em;
`;

const QuestionSix = ({ goToNext }) => {
  const [fuelEmissionsAnswer, setFuelEmissionsrAnswer] = useState();

  const handleYes = () => {
    setFuelEmissionsrAnswer("yes");
  };

  const handleNo = () => {
    setFuelEmissionsrAnswer("no");
  };

  return (
    <StyledForm>
      <label htmlFor="license">Are you worried about fuel emissions?</label>
      <label htmlFor="yes" className="radio-label">
        <input id="yes" type="radio" name="license" onChange={handleYes} /> Yes
      </label>
      <label htmlFor="no" className="radio-label">
        <input id="no" type="radio" name="license" onChange={handleNo} /> No
      </label>
      <button
        onClick={(e) => {
          goToNext({
            questionSix: "Are you worried about fuel emissions?",
            answerSix: fuelEmissionsAnswer,
          });
          e.preventDefault();
        }}
      >
        Next
      </button>
    </StyledForm>
  );
};

export default QuestionSix;
