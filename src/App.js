import { useState } from "react";
import QuestionLayout from "./components/questions/QuestionLayout";
import QuestionImage from "./components/questions/QuestionImage";
import ControlledFlowQuestion from "./components/questions/ControlledFlowQuestion";
import QuestionOne from "./components/questions/QuestionOne";
import QuestionTwo from "./components/questions/QuestionTwo";
import QuestionThree from "./components/questions/QuestionThree";
import QuestionFour from "./components/questions/QuestionFour";

function App() {
  const [answersData, setAnswersData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const onNext = (answerData) => {
    setAnswersData({ ...answersData, ...answerData });
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <QuestionLayout>
      <QuestionImage />
      <ControlledFlowQuestion currentIndex={currentIndex} onNext={onNext}>
        <QuestionOne />
        <QuestionTwo />
        <QuestionThree />
        <QuestionFour />
      </ControlledFlowQuestion>
    </QuestionLayout>
  );
}

export default App;
