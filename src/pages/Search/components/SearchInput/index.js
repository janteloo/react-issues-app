import React, { useState } from "react";
import { TextField, Container } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import { fetchIssues } from "./services";
import { useErrorHandler } from "react-error-boundary";
import logo from "../../../../assets/github-logo.png";
import { CenteredContainer } from "../../../styles";
import { CenteredAutocomplete, Label, StyledSpan } from "./styles";

const SearchInput = () => {
  const handleError = useErrorHandler();

  const [filterTimeout, setFilterTimeout] = useState(0);
  const [loading, setLoading] = useState(false);
  const [issues, setIssues] = useState([]);
  const [selectedOption, setSelectedOption] = useState({});

  const filterIssues = async (event) => {
    const value = event.target.value;
    if (filterTimeout) clearTimeout(filterTimeout);
    setFilterTimeout(
      setTimeout(async () => {
        await loadData(value);
      }, 500)
    );
  };

  const loadData = async (filter) => {
    setLoading(true);
    if (filter) {
      const response = await fetchIssues(filter);
      if (response.isSuccess) {
        const { data } = response;
        setIssues(
          data.map((item) => {
            return {
              title: item.title,
              url: item.html_url,
              labels: getLabels(item.labels),
            };
          })
        );
      } else {
        handleError(new Error(response.errorMessage));
      }
    } else {
      setIssues([]);
    }
    setLoading(false);
  };

  const getLabels = (labels) => {
    return labels.map((item) => {
      const { name, color } = item;
      return {
        name,
        color,
      };
    });
  };

  const clearSearch = () => {
    setSelectedOption({});
    setIssues([]);
  };

  return (
    <CenteredContainer>
      <img src={logo} alt="Logo" />
      <CenteredAutocomplete
        clearOnEscape={true}
        id="search-react-issues"
        loading={loading}
        onChange={(event, option) => {
          const { value } = event.target;
          if (option) {
            setSelectedOption(option);
            window.open(option.url);
          } else if (!value) {
            clearSearch();
          }
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter" && Object.keys(selectedOption).length > 0) {
            window.open(selectedOption.url);
          }
        }}
        renderOption={(option) => (
          <React.Fragment>
            <Container>
              <StyledSpan>{option.title}</StyledSpan>
              {option.labels.map((label, index) => {
                return (
                  <Label
                    background={label.color}
                    key={`label-chip-${index}`}
                    label={label.name}
                  ></Label>
                );
              })}
            </Container>
          </React.Fragment>
        )}
        getOptionLabel={(option) => option.title}
        options={issues}
        renderInput={(params) => (
          <TextField
            {...params}
            onChange={filterIssues}
            label="Search Issues"
            margin="normal"
            variant="outlined"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
          />
        )}
      />
    </CenteredContainer>
  );
};

export default SearchInput;
