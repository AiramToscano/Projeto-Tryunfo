import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { label, type, name, value, onChange, dataTestid, checked } = this.props;

    return (
      <label htmlFor={ name }>
        {label}
        <input
          type={ type }
          name={ name }
          id={ name }
          value={ value }
          onChange={ onChange }
          data-testid={ dataTestid }
          checked={ checked }
        />
      </label>
    );
  }
}

export default Input;

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.string.isRequired,
  dataTestid: PropTypes.string.isRequired,
  checked: PropTypes.string.isRequired,
};
