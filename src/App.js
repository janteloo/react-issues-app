import React from "react";
import { Switch, Redirect } from "react-router-dom";
import AppRoute from "./components/AppRoute";
import MainLayout from "./layouts/MainLayout";
import Search from "./pages/Search";

const App = () => {
  return (
    <Switch>
      <AppRoute exact path="/" layout={MainLayout} component={Search} />
      <Redirect from="*" to="/" />
    </Switch>
  );
};

export default App;
