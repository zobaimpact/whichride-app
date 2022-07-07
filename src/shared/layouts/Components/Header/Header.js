import React, { useState } from "react";

import brandIcon from "../../../assets/icon/brand.svg";

const Header = ({ changeMobileSidebarVisibility, changeSidebarVisibility }) => {
  return (
    <div className="topbar">
      <div className="topbar__wrapper">
        <div className="topbar__center">
          <div className="topbar__left-pagename">
            <img src={brandIcon} className="topbar__right-icons-msg" />
            <span className="topbar__left-brandname">
              whichride
              </span >
          </div>
        </div>

        <div className="topbar__right">
          <span className="topbar__right-links">The App</span>
          <span className="topbar__right-links">About Us</span>
          <span className="topbar__right-links">Get in Touch</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
