import styled from "styled-components";
import { useState } from "react";
import React from "react";

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  gap: 1.5em;
`;

const QuestionEight = ({ goToNext }) => {
  const [carMakeAnswer, setCarMakeAnswer] = useState();
  const carModelAnswer = React.createRef();

  return (
    <StyledForm>
      <label htmlFor="carModels">Which car make and model do you drive?</label>
      <select
        value={carMakeAnswer}
        onChange={(e) => setCarMakeAnswer(e.target.value)}
      >
        <option value="BMW">BMW</option>
        <option value="Mercedes">Mercedes</option>
        <option value="Audi">Audi</option>
        <option value="Ferrari">Ferrari</option>
      </select>
      <input
        name="model"
        type="text"
        ref={carModelAnswer}
        placeholder={`Enter ${carMakeAnswer} Model Number`}
      />
      <button
        onClick={(e) => {
          goToNext({
            questionEight: "Which car make and model do you drive?",
            answerEight: `${carMakeAnswer} ${carModelAnswer.current.value}`,
          });
          e.preventDefault();
        }}
      >
        Next
      </button>
    </StyledForm>
  );
};

export default QuestionEight;
