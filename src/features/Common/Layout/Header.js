import React from 'react';
import { Link } from 'react-router';

const Header = () => {

  const brand_logo = '../../assets/img/logo.png';
  const brand_logo_collapsed = '../../assets/img/logo-single.png';

  return (
    <header className="topnavbar-wrapper">
      {/* START Top Navbar */}
      <nav role="navigation" className="navbar topnavbar">
        {/* START navbar header */}
        <div className="navbar-header">
          <a href="#/" className="navbar-brand">
            <div className="brand-logo">
              <img src={brand_logo} alt="App Logo" className="img-responsive" />
            </div>
            <div className="brand-logo-collapsed">
              <img src={brand_logo_collapsed} alt="App Logo" className="img-responsive" />
            </div>
          </a>
        </div>
        {/* END navbar header */}
        {/* START Nav wrapper */}
        <div className="nav-wrapper">
          {/* START Left navbar */}
          <ul className="nav navbar-nav">
            <li>
              {/* Button used to collapse the left sidebar. Only visible on tablet and desktops */}
              <a href="#" data-trigger-resize="" data-toggle-state="aside-collapsed" className="hidden-xs">
                <em className="fa fa-navicon" />
              </a>
              {/* Button to show/hide the sidebar on mobile. Visible on mobile only. */}
              <a href="#" data-toggle-state="aside-toggled" data-no-persist="true" className="visible-xs sidebar-toggle">
                <em className="fa fa-navicon" />
              </a>
            </li>
          </ul>
          {/* END Left navbar */}
          {/* START Right Navbar */}
          <ul className="nav navbar-nav navbar-right">
            {/* Search icon */}
            <li>
              <a href="#" data-search-open="">
                <em className="fa fa-search" />
              </a>
            </li>
            {/* Login/Logout icon */}
            <li>
              <Link to="/login">
                <em className="fa fa-power-off" />
              </Link>
            </li>
          </ul>
          {/* END Right Navbar */}
        </div>
        {/* END Nav wrapper */}
        {/* START Search form */}
        <form role="search" action="search.html" className="navbar-form">
          <div className="form-group has-feedback">
            <input type="text" placeholder="Type and hit enter ..." className="form-control" />
            <div data-search-dismiss="" className="fa fa-times form-control-feedback" />
          </div>
          <button type="submit" className="hidden btn btn-default">Submit</button>
        </form>
        {/* END Search form */}
      </nav>
      {/* END Top Navbar */}
    </header>
  );
};

export default Header;
