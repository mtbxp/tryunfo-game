import React from 'react';
import PropTypes from 'prop-types';

class SelectFilterRarity extends React.Component {
  render() {
    const { valueFilterRarity, onInputChange } = this.props;
    return (
      <select
        data-testid="rare-filter"
        value={ valueFilterRarity }
        onChange={ onInputChange }
        name="filterRarity"
      >
        <option value="">todas</option>
        <option>normal</option>
        <option value="raro">raro</option>
        <option>muito raro</option>
      </select>
    );
  }
}

SelectFilterRarity.propTypes = {
  valueFilterRarity: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default SelectFilterRarity;
