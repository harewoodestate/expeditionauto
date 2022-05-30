import styled from "styled-components";

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

const General = ({
  targetablesAndFuel,
  targetablesNotRWD,
  averageCarsByFamily,
}) => {
  return (
    <StyledFWidget>
      <Heading>General</Heading>
      <Text>
        Targetables who also care about fuel emissions: {targetablesAndFuel}
      </Text>

      <Text>
        Targetables who chose FWD or I don't know for drivetrain:{" "}
        {targetablesNotRWD}
      </Text>
      <Text>Average cars by family: {averageCarsByFamily}</Text>
    </StyledFWidget>
  );
};

export default General;
