import React, { PropTypes } from 'react';

const ContentWrapper = ({children}) => {

  return (
    <div className="content-wrapper">
        {children}
    </div>
  );
};

ContentWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default ContentWrapper;
