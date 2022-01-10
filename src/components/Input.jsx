import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { label, type, name, value, onChange, dataTestid,
      checked, id, max, min } = this.props;
    return (
      <label htmlFor={ id }>
        {label}
        <input
          type={ type }
          name={ name }
          id={ id }
          value={ value }
          onChange={ onChange }
          data-testid={ dataTestid }
          checked={ checked }
          max={ max }
          min={ min }
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
  id: PropTypes.string.isRequired,
  max: PropTypes.string.isRequired,
  min: PropTypes.string.isRequired,
};
