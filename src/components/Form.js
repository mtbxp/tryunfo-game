import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: '',
      cardTrunfo: '',
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const { onInputChange } = this.props;
    onInputChange(this.state);
  }

  render() {
    const {
      cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo, hasTrunfo,
      isSaveButtonDisabled, onInputChange, onSaveButtonClick } = this.props;

    // const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo } = this.state;

    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <label htmlFor="name">
            Nome:
            <input
              data-testid="name-input"
              name="cardName"
              type="text"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="description">
            Description:
            <textarea
              data-testid="description-input"
              name="cardDescription"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr1">
            Atributo Num 1:
            <input
              data-testid="attr1-input"
              name="cardAttr1"
              type="number"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr2">
            Atributo Num 2:
            <input
              data-testid="attr2-input"
              name="cardAttr2"
              type="number"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr3">
            Atributo Num 3:
            <input
              data-testid="attr3-input"
              name="cardAttr3"
              type="number"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="image">
            Image URL:
            <input
              data-testid="image-input"
              name="image"
              type="text"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="rareCard">
            Raridade
            <select
              htmlFor="rare-input"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
              name="input-raridade"
            >
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>
          <label htmlFor="checkBox">
            Super trunfo
            <input
              type="checkbox"
              data-testid="trunfo-input"
              value={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>
          <button
            type="submit"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </div>
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
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
