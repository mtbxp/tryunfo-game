import React from 'react';

class Card extends React.Component {
  showRarity = (callback) => {
    if (callback) {
      return <p className="super-trunfo" data-testid="trunfo-card">Super Trunfo</p>;
    }
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardAttr4,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;
    return (
      <div className="card">
        <p data-testid="name-card">{ cardName }</p>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <p data-testid="description-card">{ cardDescription }</p>
        <p data-testid="attr1-card" className="yellow">
          FORÇA:
          { ` ${cardAttr1}` }
        </p>
        <p data-testid="attr1-card" className="red">
          ATAQUE:
          { ` ${cardAttr2}` }
        </p>
        <p data-testid="attr1-card" className="green">
          DEFESA:
          { ` ${cardAttr3}` }
        </p>
        <p className="orange">
          AGILIDADE:
          { ` ${cardAttr4}` }
        </p>
        <p data-testid="rare-card">{ cardRare }</p>
        { this.showRarity(cardTrunfo) }
      </div>
    );
  }
}

export default Card;
