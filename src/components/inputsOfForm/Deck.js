import React from 'react';
import PropTypes from 'prop-types';
import InputSearchName from '../filtersOfDeck/InputSearchName';
import SelectFilterRarity from '../filtersOfDeck/SelectFilterRarity';

class Deck extends React.Component {
  render() {
    const { valueFilterName, valueFilterRarity, onInputChange } = this.props;
    return (
      <div>
        <InputSearchName
          valueFilterName={ valueFilterName }
          onInputChange={ onInputChange }
        />
        <SelectFilterRarity
          onInputChange={ onInputChange }
          valueFilterRarity={ valueFilterRarity }
        />
      </div>);
  }
}

Deck.propTypes = {
  valueFilterName: PropTypes.string.isRequired,
  valueFilterRarity: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Deck;
