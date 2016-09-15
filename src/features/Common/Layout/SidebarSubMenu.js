import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Collapse } from 'react-bootstrap';

const SidebarSubMenu = ({route, title}) => {

  return (
    <Collapse in={true} timeout={100}>
      <ul id={route} className="nav sidebar-subnav">
        <li className="sidebar-subnav-header">{title}</li>
        <li className="">
          <Link to={route} title={title}>
            <span>{title}</span>
          </Link>
        </li>
      </ul>
    </Collapse>
  );
};

SidebarSubMenu.propTypes = {
  route: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default SidebarSubMenu;
