import styled from "styled-components";
import { useState } from "react";

const StyledForm = styled.div``;

const QuestionTwo = ({ goToNext }) => {
  const [genderAnswer, setGenderAnswer] = useState();

  const handleChangeMale = () => {
    setGenderAnswer("male");
  };

  const handleChangeFemale = () => {
    setGenderAnswer("female");
  };

  const handleChangeOther = () => {
    setGenderAnswer("other");
  };

  return (
    <StyledForm>
      <label htmlFor="gender">What is your gender?</label>
      <input type="radio" name="gender" onChange={handleChangeMale} /> Male
      <input type="radio" name="gender" onChange={handleChangeFemale} /> Female
      <input type="radio" name="gender" onChange={handleChangeOther} /> Other
      <button
        onClick={(e) => {
          goToNext({
            questionTwo: "What is your gender?",
            answerTwo: genderAnswer,
          });
          e.preventDefault();
        }}
      >
        Next
      </button>
    </StyledForm>
  );
};

export default QuestionTwo;
