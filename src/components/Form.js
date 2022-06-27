import React from 'react';

class Form extends React.Component {
  render() {
    // constructor() {
    //   super();

    //   this.state = {
    //
    //   };

    // }
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form className="form">
        <h3>Adicionar Nova Carta</h3>
        <label htmlFor="name">
          <input
            type="text"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
            placeholder="NOME DA CARTA"
          />
        </label>
        <br />
        <label htmlFor="description">
          <textarea
            data-testid="description-input"
            cols="30"
            rows="7"
            maxLength="500"
            value={ cardDescription }
            onChange={ onInputChange }
            placeholder="DESCRIÇÃO DA CARTA"
          />
        </label>
        <br />
        <label htmlFor="Attribute1">
          <input
            type="number"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
            placeholder="FORÇA"
          />
        </label>
        <br />
        <label htmlFor="Attribute2">
          <input
            type="number"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
            placeholder="AGILIDADE"
          />
        </label>
        <br />
        <label htmlFor="Attribute3">
          <input
            type="number"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
            placeholder="RESISTÊNCIA"
          />
        </label>
        <br />
        <label htmlFor="imageUrl">
          <input
            type="text"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
            placeholder="URL DA IMAGEM"
          />
        </label>
        <br />
        <label htmlFor="rarity">
          Raridade:
          <select
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">NORMAL</option>
            <option value="raro">RARO</option>
            <option value="muito raro">MUITO RARO</option>
          </select>
        </label>
        <br />
        <label htmlFor="checkbox">
          Super Tryunfo
          <input
            type="checkbox"
            data-testid="trunfo-input"
            value={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
