import React from 'react';
import PropTypes from 'prop-types';

class Trunfo extends React.Component {
  render() {
    const { cardTrunfo, onInputChange } = this.props;
    return (
      <div>
        <label htmlFor="trunfo-input" className="ajuste">
          Super Trybe Trunfo:
          <input
            type="checkbox"
            data-testid="trunfo-input"
            id="trunfo-input"
            name="cardTrunfo"
            value={ cardTrunfo }
            checked={ cardTrunfo }
            onChange={ onInputChange }
            className="check"
          />
        </label>
      </div>
    );
  }
}

Trunfo.propTypes = {
  cardTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
export default Trunfo;
