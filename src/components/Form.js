import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const {
      onInputChange,
      onSaveButtonClick,
      isSaveButtonDisabled,
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
    } = this.props;
    return (
      <div>
        <h1><b>Adicionar nova Carta</b></h1>
        <br />
        <br />
        <b className="Nome">Nome:</b>
        <input
          type="text"
          className="name-input"
          name="cardName"
          value={ cardName }
          onChange={ onInputChange }
          data-testid="name-input"
        />
        <br />
        <b className="Descricao">Descrição:</b>
        <input
          type="textarea"
          className="description-input"
          name="description-input"
          value={ cardDescription }
          onChange={ onInputChange }
          data-testid="description-input"
        />
        <br />
        <br />

        <b className="1Atb">Primeiro Atributo:</b>
        <input
          type="number"
          className="attr1-input"
          name="attr1-input"
          value={ cardAttr1 }
          onChange={ onInputChange }
          data-testid="attr1-input"
        />
        <br />
        <b className="2Atb">Segundo Atributo:</b>
        <input
          type="number"
          className="attr2-input"
          name="attr2-input"
          value={ cardAttr2 }
          onChange={ onInputChange }
          data-testid="attr2-input"
        />
        <br />
        <b className="3Atb">Terceiro Atributo:</b>
        <input
          type="number"
          className="attr3-input"
          name="attr3-input"
          value={ cardAttr3 }
          onChange={ onInputChange }
          data-testid="attr3-input"
        />
        <br />
        <br />

        <b className="Imagem">Imagem:</b>
        <input
          type="text"
          className="image-input"
          name="image-input"
          value={ cardImage }
          onChange={ onInputChange }
          data-testid="image-input"
        />
        <br />
        <br />

        <b>Raridade:</b>
        <select
          className="rare-input"
          name="rare-input"
          value={ cardRare }
          onChange={ onInputChange }
          data-testid="rare-input"
        >
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
        <br />
        <br />

        <input
          type="checkbox"
          className="trunfo-input"
          name="trunfo-input"
          checked={ cardTrunfo }
          onChange={ onInputChange }
          data-testid="trunfo-input"
        />
        <b>Super Trunfo!</b>
        <br />
        <br />

        <button
          type="button"
          className="save-button"
          name="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          data-testid="save-button"
        >
          Salvar
        </button>
      </div>
    );
  }
}

Form.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
};

export default Form;
