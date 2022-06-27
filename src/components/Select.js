import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { name, options, data, value, onInputChange } = this.props;
    return (
      <select
        name={ name }
        value={ value }
        onChange={ onInputChange }
        id={ name }
        data-testid={ data }
      >
        {options.map((opt) => <option key={ opt } value={ opt }>{opt}</option>)}
      </select>
    );
  }
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  data: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Select;
