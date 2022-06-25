import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { onInputChange, onSaveButtonClick } = this.props;
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, isSaveButtonDisabled,
    } = this.props;
    return (
      <form className="texto">
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
            placeholder="1-90"
            required="required"
            min="1"
            max="90"
          />

        </label>
        <label htmlFor="attr2-input" className="ajuste">
          Attr2:
          <input
            type="number"
            data-testid="attr2-input"
            name="cardAttr2"
            id="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
            placeholder="1-90"
            required="required"
            min="1"
            max="90"
          />

        </label>
        <label htmlFor="attr3-input" className="ajuste">
          Attr3:
          {' '}
          <input
            type="number"
            data-testid="attr3-input"
            value={ cardAttr3 }
            name="cardAttr3"
            htmlFor="attr2-input"
            onChange={ onInputChange }
            placeholder="1-90"
            required="required"
            min="1"
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
            placeholder="img.jpeg"
            required="required"
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
            placeholder="Clique e escolha"
            required="required"
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>

        </label>
        <label htmlFor="trunfo-input" className="ajuste">
          Super Trybe Trunfo:
          <input
            type="checkbox"
            data-testid="trunfo-input"
            id="trunfo-input"
            name="cardTrunfo"
            value={ cardTrunfo }
            checked={ cardTrunfo }
            onChange={ onInputChange }
            required="required"
            className="check"
          />
        </label>
        <label htmlFor="save-button">
          <input
            type="submit"
            data-testid="save-button"
            id="save-button"
            value="Salvar"
            name="salvar"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          />
        </label>
      </form>
    );
  }
}

Form.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
export default Form;
