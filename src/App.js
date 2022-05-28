import { useState, useEffect } from "react";
import styled from "styled-components";
import "./App.css";
import QuestionLayout from "./components/questions/QuestionLayout";
import QuestionImage from "./components/questions/QuestionImage";
import ControlledFlowQuestion from "./components/questions/ControlledFlowQuestion";
import QuestionOne from "./components/questions/QuestionOne";
import QuestionTwo from "./components/questions/QuestionTwo";
import QuestionThree from "./components/questions/QuestionThree";
import QuestionFour from "./components/questions/QuestionFour";

const LogoImage = styled.div`
  background-image: url("/logo.svg");
  background-repeat: no-repeat;
  background-position: center;
  width: 70em;
  height: 8em;
`;

function App() {
  const [answersData, setAnswersData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const onNext = (answerData) => {
    setAnswersData({ ...answersData, ...answerData });
    setCurrentIndex(currentIndex + 1);
  };

  useEffect(() => {
    document.body.style.backgroundColor = "#282C34";
    document.body.style.display = "flex";
    document.body.style.justifyContent = "center";
    document.body.style.alignItems = "flex-end";
    document.body.style.height = "97vh";

    return () => {
      document.body.style.backgroundColor = "#FFFFFF";
      document.body.style.display = "";
      document.body.style.justifyContent = "";
      document.body.style.alignItems = "";
      document.body.style.height = "";
    };
  }, []);

  return (
    <>
      <LogoImage />
      <QuestionLayout>
        <QuestionImage />
        <ControlledFlowQuestion currentIndex={currentIndex} onNext={onNext}>
          <QuestionOne />
          <QuestionTwo />
          <QuestionThree />
          <QuestionFour />
        </ControlledFlowQuestion>
      </QuestionLayout>
    </>
  );
}

export default App;
