import React from 'react';
import PropTypes from 'prop-types';

class Cartas extends React.Component {
  render() {
    const { cartinha } = this.props;
    return (
      <div>
        <h1>Cartas</h1>
        <p>
          {`Nome: ${cartinha.cardName} `}
        </p>
        <img src={ cartinha.cardImage } alt={ cartinha.cardName } />
        <p>
          {`Descrição: ${cartinha.cardDescription} `}
        </p>
        <p>
          {`Poder: ${cartinha.cardAttr1} `}
        </p>
        <p>
          {`Vida: ${cartinha.cardAttr2} `}
        </p>
        <p>
          {`Resistencia: ${cartinha.cardAttr3} `}
        </p>
        <p>
          {`Raridade: ${cartinha.cardRare} `}
        </p>
        {
          cartinha.cardTrunfo ? <p>Super Trunfo</p> : ''
        }
      </div>
    );
  }
}

Cartas.propTypes = {
  cartinha: PropTypes.string.isRequired,
};

export default Cartas;
