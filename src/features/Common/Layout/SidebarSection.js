import React, { PropTypes } from 'react';

const SidebarSection = ({title, localize}) => {

  return (
    <div>
      <li className="nav-heading ">
        <span data-localize={localize}>{title}</span>
      </li>
    </div>
  );
};

SidebarSection.propTypes = {
  title: PropTypes.string.isRequired,
  localize: PropTypes.string
};

export default SidebarSection;
