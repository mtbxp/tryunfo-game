import React from 'react';
import PropTypes from 'prop-types';
// import Card from './Card';

class Deck extends React.Component {
  constructor() {
    super();

    this.state = {
      valueFilter: '',
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { deck } = this.props;
    const { valueFilter } = this.state;
    return (
      <div>
        <h4>Todas as Cartas</h4>
        <p>Filtros</p>
        <input
          data-testid="name-filter"
          name="valueFilter"
          value={ valueFilter }
          onChange={ this.handleChange }
          type="text"
        />

        {

          valueFilter.length > 0
            ? deck.filter((card) => card.cardName.match(valueFilter))
              .map((card) => {
                const {
                  cardName,
                  cardDescription,
                  cardAttr1,
                  cardAttr2,
                  cardAttr3,
                  cardImage,
                  cardRare,
                  cardTrunfo,
                } = card;
                return (
                  <div key={ cardName }>
                    <h3>{cardName}</h3>
                    <img src={ cardImage } alt={ cardName } />
                    <p>{cardDescription}</p>
                    <p>{cardAttr1}</p>
                    <p>{cardAttr2}</p>
                    <p>{cardAttr3}</p>
                    <p>{cardRare}</p>
                    {cardTrunfo ? <p>Super Trunfo</p> : ''}
                    <button type="button" data-testid="delete-button">Excluir</button>
                  </div>);
              }) : deck.map((card) => {
              const {
                cardName,
                cardDescription,
                cardAttr1,
                cardAttr2,
                cardAttr3,
                cardImage,
                cardRare,
                cardTrunfo,
              } = card;
              return (
                <div key={ cardName }>
                  <h3>{cardName}</h3>
                  <img src={ cardImage } alt={ cardName } />
                  <p>{cardDescription}</p>
                  <p>{cardAttr1}</p>
                  <p>{cardAttr2}</p>
                  <p>{cardAttr3}</p>
                  <p>{cardRare}</p>
                  {cardTrunfo ? <p>Super Trunfo</p> : ''}
                  <button type="button" data-testid="delete-button">Excluir</button>
                </div>);
            })

        }
      </div>
    );
  }
}

Deck.propTypes = {
  deck: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Deck;
