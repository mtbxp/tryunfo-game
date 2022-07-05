import React from 'react';

class CardList extends React.Component {
  state = {
    nameFilter: '',
    rareFilter: 'todas',
    sTfilter: false,
    isDisabled: false,
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.type === 'checkbox'
      ? event.target.checked : event.target.value });
  }

  setChoice = (event) => {
    this.setState({ rareFilter: event.target.value });
  }

  filterSFCheck = (event) => {
    const { sTfilter } = this.state;
    if (sTfilter === true) {
      this.setState({ isDisabled: false });
    }
    if (sTfilter === false) {
      this.setState({ isDisabled: true });
    }
    this.handleChange(event);
  }

  render() {
    const cards = JSON.parse(localStorage.getItem('list'));
    const { nameFilter, rareFilter, sTfilter, isDisabled } = this.state;
    return (
      <>
        <h2>Todas as cartas</h2>
        <label htmlFor="filter">
          Filtros de busca
          <input
            type="text"
            data-testid="name-filters"
            id="filter"
            value={ nameFilter }
            onChange={ this.handleChange }
            name="nameFilters"
            disabled={ isDisabled }
          />
          <select
            id="rare-filters"
            data-testid="rare-filters"
            value={ rareFilter }
            onChange={ this.setChoice }
            disabled={ isDisabled }
          >
            <option value="todas">Todas</option>
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-filters">
          Super Trunfo
          <input
            type="checkbox"
            data-testid="trunfo-filters"
            id="trunfo-filter"
            checked={ sTfilter }
            onChange={ this.filterSFCheck }
            name="sTFilter"
          />
        </label>
        <ul>
          { cards
            ? cards
              .filter((card) => (sTfilter === true
                ? card.cardTrunfo === true : card))
              .filter((card) => (rareFilter === 'todas'
                ? card.cardRare : card.cardRare === rareFilter))
              .filter((card) => card.cardName.includes(nameFilter))
              .map((card) => (
                <li key={ card.cardName }>
                  <h2>{ card.cardName }</h2>
                  <img alt={ card.cardName } src={ card.cardImage } />
                  <p>{ card.cardDescription }</p>
                  <ul>
                    <li>{ card.cardAttr1 }</li>
                    <li>{ card.cardAttr2 }</li>
                    <li>{ card.cardAttr3 }</li>
                    <b>{ card.cardRare }</b>
                  </ul>
                  {
                    card.cardTrunfo
                      ? <p>Super Trunfo</p>
                      : <p />
                  }
                </li>
              ))
            : <p /> }
        </ul>
      </>
    );
  }
}

export default CardList;
