import styled from "styled-components";
import { useState } from "react";

const StyledForm = styled.div``;

const QuestionThree = ({ goToNext }) => {
  const [licenseAnswer, setLicenseAnswer] = useState();

  const handleYes = () => {
    setLicenseAnswer("yes");
  };

  const handleNo = () => {
    setLicenseAnswer("prefer other transport");
  };

  return (
    <StyledForm>
      <label htmlFor="license">Do you own a car driving license?</label>
      <input type="radio" name="license" onChange={handleYes} /> Yes
      <input type="radio" name="license" onChange={handleNo} /> No, I prefer
      using other transport
      <button
        onClick={(e) => {
          goToNext({
            questionThree: "Do you own a car driving license?",
            answerThree: licenseAnswer,
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
