import React from 'react';
import PropTypes from 'prop-types';

class SelectFilterRarity extends React.Component {
  render() {
    const { valueFilterRarity, onInputChange, isSearchDisabled } = this.props;
    return (
      <select
        data-testid="rare-filter"
        value={ valueFilterRarity }
        onChange={ onInputChange }
        name="filterRarity"
        disabled={ isSearchDisabled }
      >
        <option value="">todas</option>
        <option value="normal">normal</option>
        <option value="raro">raro</option>
        <option value="muito raro">muito raro</option>
      </select>
    );
  }
}

SelectFilterRarity.propTypes = {
  valueFilterRarity: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  isSearchDisabled: PropTypes.bool.isRequired,
};

export default SelectFilterRarity;
