import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     cardName,
  //     cardDescription,
  //     cardAttr1,
  //     cardAttr2,
  //     cardAttr3,
  //     cardImage,
  //     cardRare,
  //     cardTrunfo,
  //     hasTrunfo,
  //     isSaveButtonDisabled,
  //   };

  //   this.handleChange = this.handleChange.bind(this);
  // }
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
      onSaveButtonClick } = this.props;

    return (
      <fieldset>
        <div>
          <label htmlFor="name">
            Name:
            <input
              type="text"
              data-testid="name-input"
              id="name"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div>
          <label htmlFor="description">
            Textarea
            <textarea
              data-testid="description-input"
              id="description"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div>
          <label htmlFor="attr1">
            <input
              type="number"
              data-testid="attr1-input"
              id="attr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div>
          <label htmlFor="attr2">
            <input
              type="number"
              data-testid="attr2-input"
              id="attr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div>
          <label htmlFor="attr3">
            <input
              type="number"
              data-testid="attr3-input"
              id="attr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div>
          <label htmlFor="image">
            <input
              type="text"
              data-testid="image-input"
              id="image"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div>
          <label htmlFor="rare">
            <select
              data-testid="rare-input"
              id="rare"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
            </select>
          </label>
        </div>

        <div>
          <label htmlFor="trunfo">
            Super Trunfo
            <input
              type="checkbox"
              data-testid="trunfo-input"
              id="trunfo"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <button
          type="button"
          data-testid="save-button"
          onClick={ onSaveButtonClick }
          disabled={ isSaveButtonDisabled }
        >
          Salvar

        </button>

        <p>{ hasTrunfo }</p>

      </fieldset>
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
