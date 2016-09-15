import React, { PropTypes } from 'react';

const Footer = ({company_name, initial_year}) => {

  return (
    <footer>
        <span>&copy; {company_name} - {initial_year}</span>
    </footer>
  );
};

Footer.propTypes = {
  company_name: PropTypes.string.isRequired,
  initial_year: PropTypes.string.isRequired
};

export default Footer;
