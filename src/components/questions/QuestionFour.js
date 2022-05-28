import styled from "styled-components";
import { useState } from "react";

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  gap: 1.5em;
`;

const QuestionFour = ({ goToNext }) => {
  const [firstCarAnswer, setFirstCarAnswer] = useState();

  const handleYes = () => {
    setFirstCarAnswer("yes");
  };

  const handleNo = () => {
    setFirstCarAnswer("no");
  };

  return (
    <StyledForm>
      <label htmlFor="license">Is this your first car?</label>
      <label htmlFor="yes" className="radio-label">
        <input id="yes" type="radio" name="license" onChange={handleYes} /> Yes
      </label>
      <label htmlFor="no" className="radio-label">
        <input id="no" type="radio" name="license" onChange={handleNo} /> No
      </label>
      <button
        onClick={(e) => {
          goToNext({
            a4: firstCarAnswer,
          });
          e.preventDefault();
        }}
      >
        Next
      </button>
    </StyledForm>
  );
};

export default QuestionFour;
