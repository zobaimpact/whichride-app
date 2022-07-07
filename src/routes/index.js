import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import MainView from "../shared/layouts/MainView/MainView";

import Landing from "./Landing";

const AppRoutes = () => {
 

  return (
    <Fragment>
      <Switch>
        <MainView>
        <Route exact path="/" component={Landing} />
        </MainView>
      </Switch>
    </Fragment>
  );
};

export default AppRoutes;
