import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { name, options } = this.props;
    return (
      <select name={ name } id={ name }>
        {options.map((opt) => <option key={ opt } value={ opt }>{opt}</option>)}
      </select>
    );
  }
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default Select;
