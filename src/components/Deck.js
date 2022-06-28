import React from 'react';
import PropTypes from 'prop-types';
// import Card from './Card';

class Deck extends React.Component {
  constructor() {
    super();

    this.state = {
      nameFilter: '',
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { deck, deleteCard } = this.props;
    const { nameFilter } = this.state;
    return (
      <div>
        <h4>Todas as Cartas</h4>
        <p>Filtros</p>
        <input
          placeholder="Filtro por Nome"
          data-testid="name-filter"
          name="nameFilter"
          value={ nameFilter }
          onChange={ this.handleChange }
          type="text"
        />
        <select
          name="rareFilter"
          onChange={ this.handleChange }
          data-testid="rare-filter"
        >
          <option>todas</option>
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>

        {

          nameFilter.length > 0
            ? deck.filter((card) => card.cardName.match(nameFilter))
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
                    <button
                      name={ cardName }
                      cardTrunfo={ cardTrunfo }
                      type="button"
                      data-testid="delete-button"
                      onClick={ deleteCard }
                    >
                      Excluir
                    </button>
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
                  <button
                    name={ cardName }
                    data-cardtrunfo={ cardTrunfo.toString() }
                    type="button"
                    data-testid="delete-button"
                    onClick={ deleteCard }
                  >
                    Excluir
                  </button>
                </div>);
            })

        }
      </div>
    );
  }
}

Deck.propTypes = {
  deck: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteCard: PropTypes.func.isRequired,
};

export default Deck;
