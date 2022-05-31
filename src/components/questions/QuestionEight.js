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
    const bmwRe = /^[m]?\d{3}[i|d]?$/i;
    const mercedesRe = /^[\w]\d{3}$/i;
    const audiRe = /^[aqr][\d]$/i;

    switch (true) {
      case carMakeAnswer === "BMW":
        if (!bmwRe.test(carModelAnswer) && carModelAnswer !== "") {
          errorText.current = "Valid Model formats: M420d/i, 420d/i or 420";
          setDisabled(true);
        } else {
          errorText.current = "";
          setDisabled(false);
        }
        break;
      case carMakeAnswer === "Mercedes":
        if (!mercedesRe.test(carModelAnswer) && carModelAnswer !== "") {
          errorText.current = "Valid Model formats: C300, S500 or E350";
          setDisabled(true);
        } else {
          errorText.current = "";
          setDisabled(false);
        }
        break;
      case carMakeAnswer === "Audi":
        if (!audiRe.test(carModelAnswer) && carModelAnswer !== "") {
          errorText.current = "Valid Model formats: A5, Q5 or R8";
          setDisabled(true);
        } else {
          errorText.current = "";
          setDisabled(false);
        }
        break;
      default:
        errorText.current = "";
        setDisabled(false);
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
