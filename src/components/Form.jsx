import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  constructor() {
    super();
    this.saveButton = this.saveButton.bind(this);
  }

  saveButton() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      onSaveButtonClick,
    } = this.props;

    const card = {
      name: cardName,
      description: cardDescription,
      attr: {
        attr1: cardAttr1,
        attr2: cardAttr2,
        attr3: cardAttr3,
      },
      image: cardImage,
      rare: cardRare,
      isTrunfo: cardTrunfo,
    };

    onSaveButtonClick(card);
  }

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
    } = this.props;
    const inputSuperTrunfo = (hasTrunfo)
      ? <p>Você já tem um Super Trunfo em seu baralho</p>
      : (
        <div id="input-super-trunfo">
          <input
            type="checkbox"
            name="cardTrunfo"
            data-testid="trunfo-input"
            checked={ cardTrunfo }
            onChange={ (event) => onInputChange(event) }
          />
          Super Trunfo
        </div>
      );

    return (
      <form>
        <label htmlFor="cardName">
          Nome:
          <br />
          <input
            type="text"
            name="cardName"
            data-testid="name-input"
            value={ cardName }
            onChange={ (event) => onInputChange(event) }
          />
          <br />
        </label>
        <br />
        <label htmlFor="cardDescription">
          Descrição:
          <br />
          <textarea
            name="cardDescription"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ (event) => onInputChange(event) }
          />
          <br />
        </label>
        <br />
        <label htmlFor="cardAttr1">
          attr1
          <input
            type="number"
            name="cardAttr1"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ (event) => onInputChange(event) }
            min={ 0 }
            max={ 90 }
          />
          <br />
        </label>
        <br />
        <label htmlFor="cardAttr2">
          attr2
          <input
            type="number"
            name="cardAttr2"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ (event) => onInputChange(event) }
            min={ 0 }
            max={ 90 }
          />
          <br />
        </label>
        <br />
        <label htmlFor="cardAttr3">
          attr3
          <input
            type="number"
            name="cardAttr3"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ (event) => onInputChange(event) }
            min={ 0 }
            max={ 90 }
          />
          <br />
        </label>
        <br />
        <label htmlFor="cardImage">
          Imagem:
          <br />
          <input
            type="text"
            name="cardImage"
            data-testid="image-input"
            value={ cardImage }
            onChange={ (event) => onInputChange(event) }
          />
          <br />
        </label>
        <br />
        <label htmlFor="cardRare">
          <select
            name="cardRare"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ (event) => onInputChange(event) }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <br />
        <label htmlFor="cardTrunfo">
          <br />
          { inputSuperTrunfo }
          <br />
        </label>
        <br />
        <button
          type="button"
          name="salvar"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ () => this.saveButton() }
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
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
