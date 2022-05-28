import styled from "styled-components";
import React from "react";

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  gap: 1.5em;
`;

const QuestionSeven = ({ goToNext }) => {
  const carsOwnedAnswer = React.createRef();

  return (
    <StyledForm>
      <label htmlFor="carsOwned">
        How many cars do you have in your family?
      </label>
      <input name="carsOwned" type="number" ref={carsOwnedAnswer} />

      <button
        onClick={(e) => {
          goToNext({
            a7: carsOwnedAnswer.current.value,
          });
          e.preventDefault();
        }}
      >
        Next
      </button>
    </StyledForm>
  );
};

export default QuestionSeven;
