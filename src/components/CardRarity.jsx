import React from 'react';
import PropTypes from 'prop-types';

class CardRarity extends React.Component {
  render() {
    const { onInputChange } = this.props;

    return (
      <label htmlFor="card-rarity" className="cardRarity">
        Rarity:
        <select name="cardRare" data-testid="rare-input" onChange={ onInputChange }>
          <option value="normal" selected>Normal</option>
          <option value="raro">Rare</option>
          <option value="muito raro">Epic</option>
        </select>
      </label>
    );
  }
}

CardRarity.propTypes = {
  onInputChange: PropTypes.func.isRequired,
};

export default CardRarity;
