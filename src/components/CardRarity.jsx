import React from 'react';
import PropTypes from 'prop-types';

class CardRarity extends React.Component {
  render() {
    const { handlerCardInfo } = this.props;

    return (
      <label htmlFor="card-rarity">
        Rarity:
        <select name="rarity" data-testid="rare-input" onChange={ handlerCardInfo }>
          <option value="normal" selected>Normal</option>
          <option value="raro">Rare</option>
          <option value="muito raro">Epic</option>
        </select>
      </label>
    );
  }
}

CardRarity.propTypes = {
  handlerCardInfo: PropTypes.func.isRequired,
};

export default CardRarity;
