import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const TopbarMenuLinks = props => {
  const { title, icon, path } = props;

  return (
    <Link className="topbar__link" to={path}>
      <span className={`topbar__link-icon lnr lnr-${icon}`} />
      <p className="topbar__link-title">{title}</p>
    </Link>
  );
};

TopbarMenuLinks.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
};

export default TopbarMenuLinks;
