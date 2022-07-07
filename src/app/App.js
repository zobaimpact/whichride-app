import React, { useState, useEffect, Fragment } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import "bootstrap/dist/css/bootstrap.css";
import "../scss/app.scss";

import store from "../redux/store";
import { config as i18nextConfig } from "../translations";

import ScrollToTop from "./ScrollToTop";
import MainWrapper from "./MainWrapper";
import Routes from "../routes";

i18next.init(i18nextConfig);
export const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <I18nextProvider i18n={i18next}>
          <ScrollToTop>
            <Fragment>
              <MainWrapper>
                <Routes />
              </MainWrapper>
            </Fragment>
          </ScrollToTop>
        </I18nextProvider>
      </Router>
    </Provider>
  );
};

export default App;
