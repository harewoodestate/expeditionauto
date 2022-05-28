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
import QuestionFive from "./components/questions/QuestionFive";
import QuestionSix from "./components/questions/QuestionSix";
import QuestionSeven from "./components/questions/QuestionSeven";
import QuestionEight from "./components/questions/QuestionEight";
import ThankYou from "./components/questions/ThankYou";

const LogoImage = styled.div`
  background-image: url("/logo.svg");
  background-repeat: no-repeat;
  background-position: center;
  width: 70em;
  height: 8em;
`;

function App() {
  const [answersData, setAnswersData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(1);
  const onNext = (answerData, childrenCount) => {
    const updatedData = { ...answersData, ...answerData };
    setAnswersData(updatedData);
    if (currentIndex < childrenCount) {
      setCurrentIndex(currentIndex + 1);
      console.log("Index", currentIndex);
    }
    // Logic compensates for Thank you component which makes children 9
    if (currentIndex === childrenCount - 1) {
      onFinish(updatedData);
    }
  };

  const onFinish = (data) => {
    console.log(data);
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
        <ControlledFlowQuestion
          currentIndex={currentIndex}
          onNext={onNext}
          onFinish={onFinish}
        >
          <QuestionOne />
          <QuestionTwo />
          <QuestionThree />
          <QuestionFour />
          <QuestionFive />
          <QuestionSix />
          <QuestionSeven />
          <QuestionEight />
          <ThankYou />
        </ControlledFlowQuestion>
      </QuestionLayout>
    </>
  );
}

export default App;
