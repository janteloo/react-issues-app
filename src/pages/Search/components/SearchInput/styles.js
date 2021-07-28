import { Chip } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import styled from "styled-components";

export const CenteredAutocomplete = styled(Autocomplete)`
  width: 80%;
  margin: 0 auto;
`;

export const StyledSpan = styled.span`
  margin-right: 10px;
  margin-top: 5px;
  float: left;
`;

export const Label = styled(Chip)`
  margin-top: 2px;
  margin-right: 5px !important;
  float: left;
  background-color: ${(props) => `#${props.background}`} !important;
`;
