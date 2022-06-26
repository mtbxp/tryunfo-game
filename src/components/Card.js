import React from 'react';
import PropTypes from 'prop-types';
import NameCard from './cards_components/NameCard';
import AttributesCard from './cards_components/AttributesCard';
import ImageCard from './cards_components/ImageCard';
import RareCard from './cards_components/RareCard';
import TrunfoCard from './cards_components/TrunfoCard';
import DescriptionCard from './cards_components/DescriptionCard';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardDescription,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <section>
        <NameCard
          cardName={ cardName }
        />
        <AttributesCard
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
        />
        <DescriptionCard
          cardDescription={ cardDescription }
        />
        <ImageCard
          cardImage={ cardImage }
          cardName={ cardName }
        />
        <RareCard
          cardRare={ cardRare }
        />
        <TrunfoCard
          cardTrunfo={ cardTrunfo }
        />
      </section>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.string.isRequired,
};

export default Card;
