import styled from "styled-components";
import DoughnutChart from "../../charts/DoughnutChart";

const StyledFWidget = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 1em;
  height: 100%;
`;

const Heading = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, sans-serif;
  color: #3d5170;
  font-size: 1.625em;
  padding: 0 0 0.6em 1em;
  border-bottom: 1px solid #e1e5eb;
`;

const Text = styled.p`
  font-family: "Roboto Mono", Menlo, Monaco, Consolas, "Liberation Mono",
    "Courier New", monospace;
  text-align: center;
`;

const Percentage = styled.p`
  font-family: "Roboto Mono", Menlo, Monaco, Consolas, "Liberation Mono",
    "Courier New", monospace;
  text-align: center;
  font-size: 3em;
  font-weight: bold;
  align-self: center;
  justify-self: center;
`;

const ChartWrapper = styled.div`
  display: flex;
  width: 14em;
  gap: 1em;
  justify-self: center;
  margin-left: 2em;
`;

const Unlicensed = ({ unlicensed, totalSurveys }) => {
  const data = {
    labels: ["First Timers", "Other"],
    datasets: [
      {
        data: [unlicensed, totalSurveys - unlicensed],
        backgroundColor: ["#3d5170", "#dddddd"],
      },
    ],
  };
  return (
    <StyledFWidget>
      <Heading>Unlicensed</Heading>
      <Text>Unlicensed: {unlicensed}</Text>
      <Text>Percentage of Unlicensed:</Text>
      <ChartWrapper>
        <DoughnutChart data={data} />
        <Percentage>
          {Math.floor((unlicensed / totalSurveys) * 100)}%
        </Percentage>
      </ChartWrapper>
    </StyledFWidget>
  );
};

export default Unlicensed;
