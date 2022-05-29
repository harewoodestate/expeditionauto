import styled from "styled-components";

const StyledFWidget = styled.div`
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

const Adolescents = ({ adolescents }) => {
  return (
    <StyledFWidget>
      <Heading>Adolescents</Heading>
      <p>Number of Adolescents: {adolescents}</p>
    </StyledFWidget>
  );
};

export default Adolescents;
