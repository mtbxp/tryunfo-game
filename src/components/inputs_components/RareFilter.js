import React from 'react';
import PropTypes from 'prop-types';

class RareFilter extends React.Component {
  render() {
    const {
      rareFilter,
      onInputChange,
    } = this.props;

    return (
      <label htmlFor="rare-filter">
        <select
          data-testid="rare-filter"
          name="rareFilter"
          value={ rareFilter }
          onChange={ onInputChange }
        >
          <option>todas</option>
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
      </label>
    );
  }
}

RareFilter.propTypes = {
  rareFilter: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default RareFilter;
