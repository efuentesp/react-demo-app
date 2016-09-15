import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const SidebarItem = ({link, title, icon, localize}) => {

  return (
    <li className="">
        <Link to={link} title={title}>
          <em className={icon} />
          <span data-localize={localize}>{title}</span>
        </Link>
    </li>
  );
};

SidebarItem.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  localize: PropTypes.string
};

export default SidebarItem;
