import React from 'react';
import PropTypes from 'prop-types';
import Trunfo from './Trunfo';

class Form extends React.Component {
  render() {
    const { onInputChange, onSaveButtonClick } = this.props;
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, isSaveButtonDisabled, hasTrunfo,
    } = this.props;
    return (
      <form className="carde">
        <h1 className="texto-h1">Tryunfo</h1>
        <label htmlFor="name-input" className="ajuste">
          Nome:
          <input
            type="text"
            data-testid="name-input"
            id="name-input"
            value={ cardName }
            name="cardName"
            onChange={ onInputChange }
            placeholder="Nome"
            required="required"
            className="botao"
          />

        </label>
        <label htmlFor="description-input" className="container-foto ajuste">
          Descrição:
          <textarea
            type="textarea"
            data-testid="description-input"
            id="description-input"
            value={ cardDescription }
            name="cardDescription"
            placeholder="Descrição"
            onChange={ onInputChange }
            className="botao"
          />
        </label>

        <label htmlFor="attr1-input" className="ajuste">
          Attr1:
          <input
            type="number"
            data-testid="attr1-input"
            name="cardAttr1"
            id="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
            min="0"
            max="90"
          />

        </label>
        <label htmlFor="attr2-input" className="ajuste">
          Attr2:
          <input
            type="number"
            data-testid="attr2-input"
            id="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
            min="0"
            max="90"
            name="cardAttr2"
          />

        </label>
        <label htmlFor="attr3-input" className="ajuste">
          Attr3:
          {' '}
          <input
            type="number"
            data-testid="attr3-input"
            value={ cardAttr3 }
            id="attr3-input"
            name="cardAttr3"
            onChange={ onInputChange }
            min="0"
            max="90"
          />

        </label>
        <label htmlFor="image-input" className="ajuste">
          Imagem:
          {' '}
          <input
            type="text"
            data-testid="image-input"
            id="image-input"
            value={ cardImage }
            name="cardImage"
            onChange={ onInputChange }
            className="botao"
          />

        </label>
        <label htmlFor="rare-input" className="ajuste">
          Raridade:
          {' '}
          <select
            data-testid="rare-input"
            value={ cardRare }
            id="rare-input"
            name="cardRare"
            onChange={ onInputChange }
          >
            <option name="normal" value="normal">Normal</option>
            <option name="raro" value="raro">Raro</option>
            <option name="muito-raro" value="muito raro">Muito Raro</option>
          </select>

        </label>
        {
          (!hasTrunfo)
            ? <Trunfo cardTrunfo={ cardTrunfo } onInputChange={ onInputChange } />
            : <p>Você já tem um Super Trunfo em seu baralho </p>
        }

        <button
          id="save-button"
          data-testid="save-button"
          type="submit"
          onClick={ onSaveButtonClick }
          disabled={ isSaveButtonDisabled }
          className="botao"
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
};
export default Form;
