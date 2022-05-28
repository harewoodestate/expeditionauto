import styled from "styled-components";
import { useState } from "react";

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  gap: 1.5em;
`;

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
      <label htmlFor="male" className="radio-label">
        <input
          id="male"
          type="radio"
          name="gender"
          onChange={handleChangeMale}
        />{" "}
        Male
      </label>
      <label htmlFor="female" className="radio-label">
        <input
          id="female"
          type="radio"
          name="gender"
          onChange={handleChangeFemale}
        />
        Female
      </label>
      <label htmlFor="other" className="radio-label">
        <input
          id="other"
          type="radio"
          name="gender"
          onChange={handleChangeOther}
        />{" "}
        Other
      </label>

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
