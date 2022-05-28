import React from "react";

const ControlledFlowQuestion = ({
  children,
  currentIndex,
  onNext,
  onFinish,
}) => {
  const goToNext = (answerData) => {
    onNext(answerData, children.length);
  };
  const currentChild = React.Children.toArray(children)[currentIndex - 1];

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goToNext });
  }
  return currentChild;
};

export default ControlledFlowQuestion;
