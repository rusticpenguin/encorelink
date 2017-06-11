import React, { PropTypes } from 'react';

const FormattedFormField = ({ title, children, field }) => (
  <div className="row">
    <div className="small-3 medium-2 columns">
      <label>{ title }</label>
    </div>
    <div className="small-9 medium-10 columns">
      { children }
    </div>
  </div>
);

FormattedFormField.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default FormattedFormField;
