import styled from "styled-components";
import { useState } from "react";

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  gap: 1.5em;
`;

const QuestionFive = ({ goToNext }) => {
  const [drivetrainAnswer, setDrivetrainAnswer] = useState();

  const handleFWD = () => {
    setDrivetrainAnswer("fwd");
  };

  const handleRWD = () => {
    setDrivetrainAnswer("rwd");
  };

  const handleIDK = () => {
    setDrivetrainAnswer("idk");
  };

  return (
    <StyledForm>
      <label htmlFor="license">Which drivetrain do you prefer?</label>
      <label htmlFor="fwd" className="radio-label">
        <input id="fwd" type="radio" name="license" onChange={handleFWD} /> FWD
      </label>
      <label htmlFor="rwd" className="radio-label">
        <input id="rwd" type="radio" name="license" onChange={handleRWD} /> RWD
      </label>
      <label htmlFor="idk" className="radio-label">
        <input id="idk" type="radio" name="license" onChange={handleIDK} /> I
        don't know
      </label>
      <button
        onClick={(e) => {
          goToNext({
            a5: drivetrainAnswer,
          });
          e.preventDefault();
        }}
      >
        Next
      </button>
    </StyledForm>
  );
};

export default QuestionFive;
