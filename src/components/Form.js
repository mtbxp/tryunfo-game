import React from 'react';
import PropTypes from 'prop-types';
import Attr1Input from './inputsOfForm/Attr1Input';
import Attr2Input from './inputsOfForm/Attr2Input';
import Attr3Input from './inputsOfForm/Attr3Input';
import InputDescription from './inputsOfForm/InputDescription';
import InputImage from './inputsOfForm/InputImage';
import InputName from './inputsOfForm/InputName';
import InputRare from './inputsOfForm/InputRare';
import InputTrunfo from './inputsOfForm/InputTrunfo';

class Form extends React.Component {
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
      onInputChange,
      onSaveButtonClick,
      isSaveButtonDisabled } = this.props;
    return (
      <form>
        <InputName cardName={ cardName } onChange={ onInputChange } />
        <InputDescription
          cardDescription={ cardDescription }
          onChange={ onInputChange }
        />
        <Attr1Input cardAttr1={ cardAttr1 } onChange={ onInputChange } />
        <Attr2Input cardAttr2={ cardAttr2 } onChange={ onInputChange } />
        <Attr3Input cardAttr3={ cardAttr3 } onChange={ onInputChange } />
        <InputImage cardImage={ cardImage } onChange={ onInputChange } />
        <InputRare cardRare={ cardRare } onChange={ onInputChange } />
        <InputTrunfo cardTrunfo={ cardTrunfo } onChange={ onInputChange } />
        <button
          type="button"
          data-testid="save-button"
          onClick={ onSaveButtonClick }
          disabled={ isSaveButtonDisabled }
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
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
};

export default Form;
