import React from "react";
import SearchInput from "./components/SearchInput";
import { DefaultGrid } from "../styles";

const Search = () => {
  return (
    <DefaultGrid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <SearchInput />
    </DefaultGrid>
  );
};

export default Search;
