import { useSelector } from "react-redux";

const Data = () => {
  const surveyData = useSelector((state) => state.value);
  return (
    <>
      <h1>Survey Data</h1>
      <pre>{JSON.stringify({ surveyData }, null, 2)}</pre>
    </>
  );
};

export default Data;
