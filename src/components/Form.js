import React from 'react';
import '../styles/form.css';
import ProoTypes from 'prop-types';

class Form extends React.Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    console.log(hasTrunfo);

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
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="card-description">
          Descrição:
          <textarea
            data-testid="description-input"
            name="card-description"
            id="card-description"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="card-image">
          Link Imagem:
          <input
            type="text"
            data-testid="image-input"
            name="card-image"
            id="card-image"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="card-attr1" className="line-adjust">
          Vitórias:
          <input
            type="number"
            data-testid="attr1-input"
            name="card-attr1"
            id="card-attr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="card-attr2" className="line-adjust">
          Pole Positions:
          <input
            type="number"
            data-testid="attr2-input"
            name="card-attr2"
            id="card-attr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="card-attr3" className="line-adjust">
          Melhores Voltas:
          <input
            type="number"
            data-testid="attr3-input"
            name="card-attr3"
            id="card-attr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="card-rare" className="line-adjust">
          Raridade:
          <select
            data-testid="rare-input"
            name="card-rare"
            id="card-rare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-card" className="line-checkbox">
          <input
            type="checkbox"
            data-testid="trunfo-input"
            name="trunfo-card"
            id="trunfo-card"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
          Super Tryunfo
        </label>
        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          className="submit-btn"
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: ProoTypes.string.isRequired,
  cardDescription: ProoTypes.string.isRequired,
  cardAttr1: ProoTypes.string.isRequired,
  cardAttr2: ProoTypes.string.isRequired,
  cardAttr3: ProoTypes.string.isRequired,
  cardImage: ProoTypes.string.isRequired,
  cardRare: ProoTypes.string.isRequired,
  cardTrunfo: ProoTypes.bool.isRequired,
  hasTrunfo: ProoTypes.bool.isRequired,
  isSaveButtonDisabled: ProoTypes.bool.isRequired,
  onInputChange: ProoTypes.func.isRequired,
  onSaveButtonClick: ProoTypes.func.isRequired,
};

export default Form;
