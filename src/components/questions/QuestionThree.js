import styled from "styled-components";
import { useState } from "react";

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  gap: 1.5em;
`;

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
      <label htmlFor="yes" className="radio-label">
        <input id="yes" type="radio" name="license" onChange={handleYes} /> Yes
      </label>
      <label htmlFor="no" className="radio-label">
        <input id="no" type="radio" name="license" onChange={handleNo} /> No, I
        prefer using other transport
      </label>
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
