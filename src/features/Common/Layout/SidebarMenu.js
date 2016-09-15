import React, { PropTypes } from 'react';

const SidebarMenu = ({children, title, icon, localize}) => {

  return (
    <li className="">
      <div className="nav-item">
        <em className={icon} />
        <span data-localize={localize}>{title}</span>
      </div>
      {children}
    </li>
  );
};

SidebarMenu.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  localize: PropTypes.string
};

export default SidebarMenu;
