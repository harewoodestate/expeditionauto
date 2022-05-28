import React from "react";

const ControlledFlowQuestion = ({
  children,
  currentIndex,
  onNext,
  onFinish,
}) => {
  const goToNext = (answerData) => {
    onNext(answerData);
  };
  const currentChild = React.Children.toArray(children)[currentIndex];

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goToNext });
  }
  return currentChild;
};

export default ControlledFlowQuestion;
