import React from 'react';
import '../styles/Filter.css';

class Filter extends React.Component {
  render() {
    return (
      <div className="filter">
        <h4>Filtros de busca</h4>
        <input data-testid="name-filter" type="text" placeholder="Nome da carta" />
        <select data-testid="rare-filter">
          <option value="todas">--- Selecione a Raridade ---</option>
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito Raro</option>
        </select>
        <label htmlFor="trunfo-filter" data-testid="trunfo-filter">
          Super Trybe Trunfo
          <input
            type="checkbox"
            name="Trunfo"
            id="trunfo-filter"
          />
        </label>
      </div>
    );
  }
}

export default Filter;
