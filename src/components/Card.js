import React from 'react';
import '../index.css';

class Card extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo,
    } = this.props;

    return (
      <div className="conteinerCard">
        <h1 data-testid="name-card" className="titleCard">{`Nome: ${cardName}`}</h1>

        <div className="containerImg">
          <img
            src={ cardImage }
            alt={ cardName }
            data-testid="image-card"
            className="imgCard"
          />
        </div>

        <div className="descCard">
          <span data-testid="description-card">
            {`Descrição: ${cardDescription}`}
          </span>
        </div>

        <div className="conteinerArrtrs">
          <span
            data-testid="attr1-card"
            className="arrtrs"
          >
            {`Atributo: ${cardAttr1}`}

          </span>

          <span
            data-testid="attr2-card"
            className="arrtrs"
          >
            {`Atributo: ${cardAttr2}`}

          </span>

          <span
            data-testid="attr3-card"
            className="arrtrs"
          >
            {`Atributo: ${cardAttr3}`}

          </span>

          <span
            data-testid="rare-card"
            className="arrtrs"
          >
            {`Raridade: ${cardRare}`}

          </span>
        </div>

        {cardTrunfo && <span
          data-testid="trunfo-card"
          className="trunfo"
        >
          Super Trunfo

                       </span>}

      </div>
    );
  }
}

export default Card;
