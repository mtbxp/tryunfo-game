import React from 'react';
import PropTypes from 'prop-types';

class TrunfoFilter extends React.Component {
  render() {
    const {
      trunfoFilter,
      onInputChange,
    } = this.props;

    return (
      <label htmlFor="trunfo-filter">
        <input
          data-testid="trunfo-filter"
          type="checkbox"
          name="trunfoFilter"
          checked={ trunfoFilter }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

TrunfoFilter.propTypes = {
  trunfoFilter: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default TrunfoFilter;
