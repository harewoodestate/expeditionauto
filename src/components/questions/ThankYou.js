import styled from "styled-components";
import React from "react";

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  gap: 1.5em;
`;

const ThankYou = ({ goToNext }) => {
  return (
    <StyledForm>
      <p className="thank-you">
        Thank you for taking the time to complete this survey!
      </p>
    </StyledForm>
  );
};

export default ThankYou;
