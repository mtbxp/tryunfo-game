import PropType from 'prop-types';
import React from 'react';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;
    return (
      <section>
        <div>
          <p data-testid="name-card">{ cardName }</p>
          <p data-testid="description-card">{ cardDescription }</p>
          <p data-testid="attr1-card">
            { cardAttr1 }
            {' '}
          </p>
          <p data-testid="attr2-card">{ cardAttr2 }</p>
          <p data-testid="attr3-card">{ cardAttr3 }</p>
          <p
            data-testid="image-card"
            src={ cardImage }
            alt={ cardName }
          >
            { cardImage }

          </p>
          <p data-testid="rare-card">{ cardRare }</p>
          <div>
            { cardTrunfo > 0 && <p data-testid="trunfo-card">Super Trunfo</p>}

          </div>
        </div>
      </section>
    );
  }
}

Card.propTypes = {
  cardName: PropType.string.isRequired,
  cardDescription: PropType.string.isRequired,
  cardAttr1: PropType.string.isRequired,
  cardAttr2: PropType.string.isRequired,
  cardAttr3: PropType.string.isRequired,
  cardImage: PropType.string.isRequired,
  cardRare: PropType.string.isRequired,
  cardTrunfo: PropType.string.isRequired,
};

export default Card;
