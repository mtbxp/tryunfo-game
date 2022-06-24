import React from 'react';
import '../styles/form.css';

class Form extends React.Component {
  render() {
    return (
      <form onSubmit={ () => { } }>
        <h2>Adicionar Nova Carta</h2>
        <label htmlFor="card-name">
          Nome:
          <input
            type="text"
            data-testid="name-input"
            name="card-name"
            id="card-name"
            value=""
            onChange={ () => { } }
          />
        </label>
        <label htmlFor="card-description">
          Descrição:
          <textarea
            data-testid="description-input"
            name="card-description"
            id="card-description"
            value=""
            onChange={ () => { } }
          />
        </label>
        <label htmlFor="card-image">
          Link Imagem:
          <input
            type="text"
            data-testid="image-input"
            name="card-image"
            id="card-image"
            value=""
            onChange={ () => { } }
          />
        </label>
        <label htmlFor="card-attr1" className="line-adjust">
          Vitórias:
          <input
            type="number"
            data-testid="attr1-input"
            name="card-attr1"
            id="card-attr1"
            value=""
            onChange={ () => { } }
          />
        </label>
        <label htmlFor="card-attr2" className="line-adjust">
          Pole Positions:
          <input
            type="number"
            data-testid="attr2-input"
            name="card-attr2"
            id="card-attr2"
            value=""
            onChange={ () => { } }
          />
        </label>
        <label htmlFor="card-attr3" className="line-adjust">
          Melhores Voltas:
          <input
            type="number"
            data-testid="attr3-input"
            name="card-attr3"
            id="card-attr3"
            value=""
            onChange={ () => { } }
          />
        </label>
        <label htmlFor="card-rare" className="line-adjust">
          Raridade:
          <select
            data-testid="rare-input"
            name="card-rare"
            id="card-rare"
            onChange={ () => { } }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-card" className="line-checkbox">
          <input
            type="checkbox"
            data-testid="trunfo-input"
            name="trunfo-card"
            id="trunfo-card"
            value=""
            onChange={ () => { } }
          />
          Super Tryunfo
        </label>
        <button
          type="submit"
          data-testid="save-button"
          disabled
          className="submit-btn"
        >
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;
