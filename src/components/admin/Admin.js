import Adolescents from "./Adolescents";
import DashboardLayout from "./DashboardLayout";
import FirstTimers from "./FirstTimers";
import Targetables from "./Targetables";
import Unlicensed from "./Unlicensed";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Admin = () => {
  const surveyData = useSelector((state) => state.value);

  const [firstTimers, setFirstTimers] = useState(0);
  const [unlicensed, setUnlicensed] = useState(0);
  const [adolescents, setAdolescents] = useState(0);
  const [targetables, setTargetables] = useState(0);
  const [targetablesAndFuel, setTargetablesAndFuel] = useState(0);
  const [targetablesNotRWD, setTargetablesNotRWD] = useState(0);
  const [averageCarsByFamily, setAverageCarsByFamily] = useState(0);
  const totalSurveys = surveyData.length;

  console.log(surveyData);

  useEffect(() => {
    const filterByFirstTimers = (item) => {
      if (item.a1 >= 18 && item.a1 <= 25 && item.a4 === "yes") {
        return true;
      }
      return false;
    };

    const arrayByFirstTimer = surveyData.filter(filterByFirstTimers);

    setFirstTimers(arrayByFirstTimer.length);

    const filterByUnlicensed = (item) => {
      if (item.a3 === "no") {
        return true;
      }
      return false;
    };
    const arrayByUnlicensed = surveyData.filter(filterByUnlicensed);

    setUnlicensed(arrayByUnlicensed.length);

    const filterByAdolescents = (item) => {
      if (item.a1 < 18) {
        return true;
      }
      return false;
    };

    const arrayByAdolescents = surveyData.filter(filterByAdolescents);

    setAdolescents(arrayByAdolescents.length);

    const filterByTargetables = (item) => {
      if (item.a8) {
        return true;
      }
      return false;
    };

    const arrayByTargetables = surveyData.filter(filterByTargetables);

    setTargetables(arrayByTargetables.length);

    const filterByTargetablesAndFuel = (item) => {
      if (item.a8 && item.a6 === "yes") {
        return true;
      }
      return false;
    };

    const arrayByTargetablesAndFuel = surveyData.filter(
      filterByTargetablesAndFuel
    );

    setTargetablesAndFuel(arrayByTargetablesAndFuel.length);

    const filterByTargetablesNotRWD = (item) => {
      if (item.a8 && (item.a5 === "fwd" || item.a5 === "idk")) {
        return true;
      }
      return false;
    };

    const arrayByTargetablesNotRWD = surveyData.filter(
      filterByTargetablesNotRWD
    );

    setTargetablesNotRWD(arrayByTargetablesNotRWD.length);

    let initialValue = 0;

    let sum = surveyData.reduce(function (previousValue, currentValue) {
      if (currentValue.a7) {
        return previousValue + currentValue.a7;
      }
      return previousValue;
    }, initialValue);

    let count = 0;

    const filterByFamilies = (item) => {
      if (item.a7) {
        return true;
      }
      return false;
    };

    const arrayByFamilies = surveyData.filter(filterByFamilies);

    count = arrayByFamilies.length;

    setAverageCarsByFamily(Math.floor(sum / count));
  }, []);

  useEffect(() => {
    document.body.style.margin = "0em";
    document.body.style.backgroundColor = "#f5f6f8";

    return () => {
      document.body.style.margin = "";
    };
  }, []);
  return (
    <DashboardLayout
      targetablesAndFuel={targetablesAndFuel}
      targetablesNotRWD={targetablesNotRWD}
      averageCarsByFamily={averageCarsByFamily}
    >
      <Targetables targetables={targetables} totalSurveys={totalSurveys} />
      <FirstTimers firstTimers={firstTimers} totalSurveys={totalSurveys} />
      <Unlicensed unlicensed={unlicensed} totalSurveys={totalSurveys} />
      <Adolescents adolescents={adolescents} totalSurveys={totalSurveys} />
    </DashboardLayout>
  );
};

export default Admin;
