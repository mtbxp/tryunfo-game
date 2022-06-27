import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Select from './Select';
import Textarea from './Textarea';

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
      <>
        <Input
          name="card-name"
          value={ cardName }
          onInputChange={ onInputChange }
          text="name"
          type="text"
          data="name-input"
        />
        <Textarea
          name="card-desc"
          value={ cardDescription }
          onInputChange={ onInputChange }
          text="description"
          data="description-input"
        />
        <Input
          name="card-attr"
          value={ cardAttr1 }
          onInputChange={ onInputChange }
          text="atribute 1"
          type="number"
          data="attr1-input"
        />
        <Input
          name="card-attr"
          value={ cardAttr2 }
          onInputChange={ onInputChange }
          text="atribute 2"
          type="number"
          data="attr2-input"
        />
        <Input
          name="card-attr"
          value={ cardAttr3 }
          onInputChange={ onInputChange }
          text="atribute 3"
          type="number"
          data="attr3-input"
        />
        <Input
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
          name="card-check"
          value={ cardTrunfo }
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
      </>
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
