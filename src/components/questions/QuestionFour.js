import styled from "styled-components";
import { useState } from "react";

const StyledForm = styled.div``;

const QuestionThree = ({ goToNext }) => {
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
      <input type="radio" name="license" onChange={handleYes} /> Yes
      <input type="radio" name="license" onChange={handleNo} /> No
      <button
        onClick={(e) => {
          goToNext({
            questionFour: "Is this your first car?",
            answerFour: firstCarAnswer,
          });
          e.preventDefault();
        }}
      >
        Next
      </button>
    </StyledForm>
  );
};

export default QuestionThree;
