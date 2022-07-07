import React, { useState } from "react";
import DownIcon from "mdi-react/ChevronDownIcon";
import { Collapse } from "reactstrap";
import TopbarMenuLink from "./TopbarMenuLink";
// import userIcon from "../../../assets/icon/user.svg";

const HeaderProfile = ({ onClickHandler }) => {
  const [collapse, setCollapse] = useState(false);

  const toggle = () => {
    setCollapse(!collapse);
  };

  return (
    <div className="topbar__profile">
      <button type="button" className="topbar__avatar" onClick={toggle}>
        {/* <img src={userIcon} className="topbar__avatar-img" alt="avatar" /> */}

        <DownIcon className="topbar__icon" />
      </button>
      {collapse && (
        <button type="button" className="topbar__back" onClick={toggle} />
      )}
      <Collapse isOpen={collapse} className="topbar__menu-wrap">
        <div className="topbar__menu">
          <div className="topbar__menu-divider" />
          <div onClick={onClickHandler}>
            <TopbarMenuLink
              title="Log Out"
              onClick={onClickHandler}
              icon="exit"
              path="/"
            />
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default HeaderProfile;
