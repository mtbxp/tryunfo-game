import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { cardAttr1, cardAttr2, cardAttr3, cardDescription, cardImage, cardRare,
      cardName, cardTrunfo } = this.props;

    const HTMLElements = [
      {
        Tag: 'h2',
        name: 'cardName',
        dataTestid: 'name-card',
        inner: cardName,
      },
      {
        Tag: 'p',
        name: 'cardDescription',
        dataTestid: 'description-card',
        inner: cardDescription,
      },
      {
        Tag: 'p',
        name: 'cardAttr1',
        dataTestid: 'attr1-card',
        inner: cardAttr1,
      },
      {
        Tag: 'p',
        name: 'cardAttr2',
        dataTestid: 'attr2-card',
        inner: cardAttr2,
      },
      {
        Tag: 'p',
        name: 'cardAttr3',
        dataTestid: 'attr3-card',
        inner: cardAttr3,
      },
      {
        Tag: 'img',
        name: 'cardImage',
        dataTestid: 'image-card',
        src: cardImage,
        alt: cardName,
      },
      {
        Tag: 'h2',
        name: 'cardRare',
        dataTestid: 'rare-card',
        inner: cardRare,
      },
      {
        Tag: 'h3',
        name: 'cardTrunfo',
        dataTestid: 'trunfo-card',
        trunfo: cardTrunfo,
        inner: 'Super Trunfo',
      },
    ];
    // console.log(this.props.cardTrunfo)
    return (
      <div>
        { HTMLElements.map(({ Tag, name, dataTestid, trunfo, inner }, index) => (
          <Tag
            key={ index }
            data-testid={ dataTestid }
            name={ name }
          >
            {Tag !== 'h3' || trunfo ? inner : null}
          </Tag>
        )) }
      </div>
    );
  }
}

Card.defaultProps = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardImage: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  cardRare: PropTypes.string,
};

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardImage: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  cardRare: PropTypes.string,
};

export default Card;
