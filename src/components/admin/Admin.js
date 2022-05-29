import Adolescents from "./Adolescents";
import DashboardLayout from "./DashboardLayout";
import FirstTimers from "./FirstTimers";
import Targetables from "./Targetables";
import Unlicensed from "./Unlicensed";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Admin = () => {
  const surveyData = useSelector((state) => state.value);

  console.log(surveyData);

  const [firstTimers, setFirstTimers] = useState(0);

  useEffect(() => {
    const filterByFirstTimers = (item) => {
      if (item.a1 >= 18 && item.a1 <= 25 && item.a4 === "yes") {
        return true;
      }
      return false;
    };

    const arrayByFirstTimer = surveyData.filter(filterByFirstTimers);

    setFirstTimers(arrayByFirstTimer.length);
  }, []);

  useEffect(() => {
    document.body.style.margin = "0em";
    document.body.style.backgroundColor = "#f5f6f8";

    return () => {
      document.body.style.margin = "";
    };
  }, []);
  return (
    <DashboardLayout>
      <Targetables />
      <FirstTimers firstTimers={firstTimers} />
      <Unlicensed />
      <Adolescents />
    </DashboardLayout>
  );
};

export default Admin;
