import PropTypes from 'prop-types';
import React from 'react';
import '../styles/form.css';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick,
    } = this.props;

    return (
      <form className="form" onSubmit={ onSaveButtonClick }>
        <h2 className="form-title">Card Info</h2>

        {/* ------------- NAME -------------- */}
        <label htmlFor="Name" className="label">
          Nome do personagem
          <br />
          <input
            type="text"
            className="input"
            name="cardName"
            id="Name"
            value={ cardName }
            data-testid="name-input"
            onChange={ onInputChange }
          />
        </label>

        {/* ------------- DESCRIPTION -------------- */}
        <label htmlFor="description" className="label">
          Frase Memorável
          <br />
          <textarea
            className="input"
            name="cardDescription"
            id="description"
            value={ cardDescription }
            data-testid="description-input"
            onChange={ onInputChange }
          />
        </label>

        <div className="attrs">

          {/* ------------- ATTR1 -------------- */}
          <label htmlFor="attr1" className="label">
            Cool
            <br />
            <input
              type="number"
              className="input attr"
              name="cardAttr1"
              id="attr1"
              value={ cardAttr1 }
              data-testid="attr1-input"
              onChange={ onInputChange }
            />
          </label>

          {/* ------------- ATTR2 -------------- */}
          <label htmlFor="attr2" className="label">
            Fannie
            <br />
            <input
              type="number"
              className="input attr"
              name="cardAttr2"
              id="attr2"
              value={ cardAttr2 }
              data-testid="attr2-input"
              onChange={ onInputChange }
            />
          </label>

          {/* ------------- ATTR3 -------------- */}
          <label htmlFor="attr3" className="label">
            Smart
            <br />
            <input
              type="number"
              className="input attr"
              name="cardAttr3"
              id="attr3"
              value={ cardAttr3 }
              data-testid="attr3-input"
              onChange={ onInputChange }
            />
          </label>
        </div>

        {/* ------------- IMAGE -------------- */}
        <label htmlFor="image" className="label">
          Imagem
          <br />
          <input
            type="text"
            className="input"
            name="cardImage"
            id="image"
            value={ cardImage }
            data-testid="image-input"
            onChange={ onInputChange }
          />
        </label>

        {/* ------------- RARE -------------- */}
        <label htmlFor="rare" className="label">
          Popularidade
          <br />
          <select
            name="cardRare"
            id="rare"
            className="input"
            value={ cardRare }
            data-testid="rare-input"
            onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>

        {/* ------------- TRUNFO -------------- */}
        <label htmlFor="trunfo" className="label">
          <input
            name="cardTrunfo"
            id="trunfo"
            type="checkbox"
            checked={ cardTrunfo }
            data-testid="trunfo-input"
            onChange={ onInputChange }
          />
          Super Trunfo
        </label>

        {/* ------------- BUTTON SALVAR -------------- */}
        <button
          type="button"
          className="btn"
          name="salvar"
          id="salvar"
          disabled={ isSaveButtonDisabled }
          data-testid="save-button"
          onClick={ onSaveButtonClick }
        >
          Salvar Carta
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  onSaveButtonClick: PropTypes.func.isRequired,
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
};

export default Form;
