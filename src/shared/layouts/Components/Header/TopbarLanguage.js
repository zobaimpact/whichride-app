import React, { useState } from "react";
import { withTranslation } from "react-i18next";
import { Collapse } from "reactstrap";
import DownIcon from "mdi-react/ChevronDownIcon";

const gb = `${process.env.PUBLIC_URL}/assets/img/language/gb.png`;
const fr = `${process.env.PUBLIC_URL}/assets/img/language/fr.png`;

const GbLng = () => (
  <span className="topbar__language-btn-title">
    <img src={gb} alt="gb" />
    <span>EN</span>
  </span>
);

const FrLng = () => (
  <span className="topbar__language-btn-title">
    <img src={fr} alt="fr" />
    <span>FR</span>
  </span>
);

const TopbarLanguage = (props) => {
  const [collapse, setCollapse] = useState(false);
  const [mainButtonContent, setMainButtonContent] = useState(<GbLng />);

  const toggle = () => {
    if (!collapse) {
      setCollapse(true);
    } else {
      setCollapse(false);
    }
  };

  const changeLanguage = (lng) => {
    const { i18n } = props;
    i18n.changeLanguage(lng);
    switch (lng) {
      case "en":
        setMainButtonContent(<GbLng />);
        break;
      case "fr":
        setMainButtonContent(<FrLng />);
        break;

      default:
        setMainButtonContent(<GbLng />);
        break;
    }
  };

  return (
    <div className="topbar__collapse topbar__collapse--language">
      <button className="topbar__btn" type="button" onClick={toggle}>
        {mainButtonContent}
        <DownIcon className="topbar__icon" />
      </button>
      {collapse && (
        <button className="topbar__back" type="button" onClick={toggle} />
      )}
      <Collapse
        isOpen={collapse}
        className="topbar__collapse-content topbar__collapse-content--language"
      >
        <button
          className="topbar__language-btn"
          type="button"
          onClick={() => changeLanguage("en")}
        >
          <GbLng />
        </button>
        <button
          className="topbar__language-btn"
          type="button"
          onClick={() => changeLanguage("fr")}
        >
          <FrLng />
        </button>
      </Collapse>
    </div>
  );
};

export default withTranslation("common")(TopbarLanguage);
