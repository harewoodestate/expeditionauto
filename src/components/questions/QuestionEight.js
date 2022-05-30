import styled from "styled-components";
import { useEffect, useState, useRef } from "react";
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
  const [disabled, setDisabled] = useState(false);
  const error = useRef(true);
  const errorText = useRef("");

  useEffect(() => {
    if (carMakeAnswer === "BMW") {
      switch (false) {
        case carModelAnswer.toLowerCase().startsWith("m"):
          errorText.current = "Model must start with M";
          setDisabled(true);
          console.log(carModelAnswer.substring(1, 3));
          break;
        case carModelAnswer.toLowerCase().endsWith("d") ||
          carModelAnswer.toLowerCase().endsWith("i"):
          errorText.current = "Model must end with d or i";
          setDisabled(true);
          break;
        //TODO
        case carModelAnswer.match(new RegExp()):
          errorText.current = "Model must have 3 numbers e.g. M340i";
          setDisabled(true);
          break;
        default:
          setDisabled(false);
      }
    }
  }, [carModelAnswer, carMakeAnswer]);

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
        onInput={(e) => setCarModelAnswer(e.target.value)}
        placeholder={`Enter your ${carMakeAnswer} Model Number`}
      />
      <p className="message">
        {(numberOfCars && `You have ${numberOfCars} more to enter`) ||
          "Click next to finish"}
      </p>
      <button
        disabled={disabled}
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
      {error && <p className="error-message">{`${errorText.current}`}</p>}
    </StyledForm>
  );
};

export default QuestionEight;
