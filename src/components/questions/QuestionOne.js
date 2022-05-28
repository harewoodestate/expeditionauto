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
      <input name="age" type="number" ref={ageAnswer} />

      <button
        onClick={(e) => {
          goToNext({
            questionOne: "What is your age?",
            answerOne: ageAnswer.current.value,
          });
          e.preventDefault();
        }}
      >
        Next
      </button>
    </StyledForm>
  );
};

export default QuestionOne;
