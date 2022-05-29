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

const QuestionEight = ({ goToNext, carsOwned }) => {
  const [carMakeAnswer, setCarMakeAnswer] = useState("BMW");
  const [carModelAnswer, setCarModelAnswer] = useState("");
  const [carMakeAndModels, setCarMakeAndModels] = useState([]);
  const [numberOfCars, setNumberOfCars] = useState(carsOwned);

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
        onChange={(e) => setCarModelAnswer(e.target.value)}
        placeholder={`Enter your ${carMakeAnswer} Model Number`}
      />
      <p className="message">
        {(numberOfCars && `You have ${numberOfCars} more to enter`) ||
          "Click next to finish"}
      </p>
      <button
        onClick={(e) => {
          let carMakeAndModelsObject = {
            make: `${carMakeAnswer}`,
            model: `${carModelAnswer}`,
          };

          if (numberOfCars) {
            let intermediateArray = carMakeAndModels;

            intermediateArray.push(carMakeAndModelsObject);

            setCarMakeAndModels(intermediateArray);

            setNumberOfCars(Number(numberOfCars - 1));

            setCarModelAnswer("");
          } else {
            goToNext({
              a8: carMakeAndModels,
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

export default QuestionEight;
