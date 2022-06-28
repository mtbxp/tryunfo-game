import React from 'react';
import PropTypes from 'prop-types';
import InputSearchName from '../filtersOfDeck/InputSearchName';
import SelectFilterRarity from '../filtersOfDeck/SelectFilterRarity';
import InputFilterSuperTrunfo from '../filtersOfDeck/InputFilterSuperTrunfo';

class Deck extends React.Component {
  render() {
    const {
      valueFilterName,
      valueFilterRarity,
      onInputChange,
      valueFilterSuperTrunfo } = this.props;
    return (
      <div>
        <InputSearchName
          valueFilterName={ valueFilterName }
          onInputChange={ onInputChange }
          isSearchDisabled={ valueFilterSuperTrunfo }
        />
        <SelectFilterRarity
          onInputChange={ onInputChange }
          valueFilterRarity={ valueFilterRarity }
          isSearchDisabled={ valueFilterSuperTrunfo }
        />
        <InputFilterSuperTrunfo
          valueFilterSuperTrunfo={ valueFilterSuperTrunfo }
          onInputChange={ onInputChange }
        />
      </div>);
  }
}

Deck.propTypes = {
  valueFilterName: PropTypes.string.isRequired,
  valueFilterRarity: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  valueFilterSuperTrunfo: PropTypes.bool.isRequired,
};

export default Deck;
