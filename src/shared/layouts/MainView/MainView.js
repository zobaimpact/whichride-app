import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import classNames from "classnames";

import {
  changeThemeToDark,
  changeThemeToLight,
} from "../../../redux/actions/themeActions";
import {
  changeMobileSidebarVisibility,
  changeSidebarVisibility,
} from "../../../redux/actions/sidebarActions";

import Header from "../Components/Header/Header";

const MainView = ({
  changeSidebarVisibility,
  changeMobileSidebarVisibility,
  sidebar,
  changeThemeToDark,
  changeThemeToLight,
  children,
}) => {
  const onChangeSidebarVisibility = () => {
    changeSidebarVisibility();
  };

  const onChangeMobileSidebarVisibility = () => {
    changeMobileSidebarVisibility();
  };

  const onChangeToDark = () => {
    changeThemeToDark();
  };

  const onChangeToLight = () => {
    changeThemeToLight();
  };

  const layoutClass = classNames({
    layout: true,
    "layout--collapse": sidebar.collapse,
  });

  return (
    <div>
      <div className={layoutClass}>
        <Header
          changeMobileSidebarVisibility={onChangeMobileSidebarVisibility}
          changeSidebarVisibility={onChangeSidebarVisibility}
        />
      </div>
      <div className="container__wrap">{children}</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  sidebar: state.sidebar,
});

const mapDispatchToProps = {
  changeSidebarVisibility,
  changeMobileSidebarVisibility,
  changeThemeToDark,
  changeThemeToLight,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MainView)
);
