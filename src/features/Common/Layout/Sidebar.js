import React, { PropTypes } from 'react';
import { Collapse } from 'react-bootstrap';

const Sidebar = ({children, avatar, user_name, user_role}) => {

  return (
    <aside className="aside">
      {/* START Sidebar (left) */}
      <div className="aside-inner">
        <nav data-sidebar-anyclick-close="" className="sidebar">
          {/* START sidebar nav */}
          <ul className="nav">
            {/* START user info */}
            <li className="has-user-block">
              <Collapse id="user-block" in={true}>
                <div className="item user-block">
                  {/* User picture */}
                  <div className="user-block-picture">
                    <div className="user-block-status">
                      <img src={avatar} alt="Avatar" width="60" height="60" className="img-thumbnail img-circle" />
                      <div className="circle circle-success circle-lg" />
                    </div>
                  </div>
                  {/* Name and Job */}
                  <div className="user-block-info">
                    <span className="user-block-name">{user_name}</span>
                    <span className="user-block-role">{user_role}</span>
                  </div>
                </div>
              </Collapse>
            </li>
            {/* END user info */}
            {/* Iterates over all sidebar items */}
            {children}
          </ul>
          {/* END sidebar nav */}
        </nav>
      </div>
      {/* END Sidebar (left) */}
    </aside>
  );
};

Sidebar.propTypes = {
  children: PropTypes.array.isRequired,
  avatar: PropTypes.string.isRequired,
  user_name: PropTypes.string.isRequired,
  user_role: PropTypes.string.isRequired
};

export default Sidebar;
