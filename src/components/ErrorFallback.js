import React from "react";
import { FullWidthDiv, StyledAlert, StyledButton } from "./styles";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <FullWidthDiv>
      <StyledAlert severity="error">{`Woops! Something went wrong: ${error.message} `}</StyledAlert>
      <StyledButton
        variant="contained"
        color="primary"
        onClick={resetErrorBoundary}
      >
        Try Again
      </StyledButton>
    </FullWidthDiv>
  );
};

export default ErrorFallback;
