import { Toolbar, Typography } from "@material-ui/core";
import { MainBar } from "./styles";
import React from "react";

const MainLayout = (props) => {
  return (
    <>
      <MainBar position="static">
        <Toolbar>
          <Typography>React Issues Finder</Typography>
        </Toolbar>
      </MainBar>
      {props.children}
    </>
  );
};

export default MainLayout;
