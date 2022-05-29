import styled from "styled-components";
import React from "react";

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  gap: 1.5em;
`;

const QuestionOne = ({ goToNext }) => {
  const ageAnswer = React.createRef();

  return (
    <StyledForm>
      <label htmlFor="age">What is your age?</label>
      <input name="age" type="number" min="0" max="100" ref={ageAnswer} />

      <button
        onClick={(e) => {
          if (
            Number(ageAnswer.current.value) >= 0 &&
            Number(ageAnswer.current.value) <= 100
          ) {
            goToNext({
              a1: Number(ageAnswer.current.value),
            });
          }
          e.preventDefault();
        }}
      >
        Next
      </button>
    </StyledForm>
  );
};

export default QuestionOne;
