import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Select from './Select';

class Form extends React.Component {
  render() {
    const options = ['normal', 'raro', 'muito raro'];
    const {
      cardName,
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
      <form>
        <Input
          id="cardName"
          name="card-name"
          value={ cardName }
          onInputChange={ onInputChange }
          text="name"
          type="text"
          data="name-input"
        />
        <label htmlFor="form-description">
          Descrição:
          <textarea
            name="form-description"
            data-testid="description-input"
            id="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <Input
          id="cardAttr1"
          name="card-attr"
          value={ cardAttr1 }
          onInputChange={ onInputChange }
          text="atribute 1"
          type="number"
          data="attr1-input"
        />
        <Input
          id="cardAttr2"
          name="card-attr"
          value={ cardAttr2 }
          onInputChange={ onInputChange }
          text="atribute 2"
          type="number"
          data="attr2-input"
        />
        <Input
          id="cardAttr3"
          name="card-attr"
          value={ cardAttr3 }
          onInputChange={ onInputChange }
          text="atribute 3"
          type="number"
          data="attr3-input"
        />
        <Input
          id="cardImage"
          name="card-img"
          value={ cardImage }
          onInputChange={ onInputChange }
          text="image"
          type="text"
          data="image-input"
        />
        <Select
          name="card-rarity"
          value={ cardRare }
          options={ options }
          onInputChange={ onInputChange }
          data="rare-input"
        />
        <Input
          id="cardTrunfo"
          name="card-check"
          checked={ cardTrunfo }
          onInputChange={ onInputChange }
          text="Super Trunfo"
          type="checkbox"
          data="trunfo-input"
        />

        <button
          type="submit"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          data-testid="save-button"
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
