import React from 'react';
import PropTypes from 'prop-types';
import FormInputs from './FormInputs';
import Checkbox from './Checkbox';

class Form extends React.Component{
  render(){
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
     cardImage, cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabeld, onInputChange, onSaveButtonClick } =this.props;

     return(
      <form onSubmit={ onSaveButtonClick }>
        <FormInputs
          id="name-input"
          type="text"
          label="Nome da carta:"
          valor={ cardName }
          change={ onInputChange }
          nome="cardName"
          />
          <FormInputs
          id="description-input"
          type="textarea"
          label="Descricao da carta:"
          valor={ cardDescription }
          change={ onInputChange }
          nome="cardDescription"
          />
          <FormInputs
          id="attr1-input"
          type="number"
          label="Atributo 1:"
          valor={ cardAttr1 }
          change={ onInputChange }
          nome="cardAttr1"
          />
          <FormInputs
          id="attr2-input"
          type="number"
          label="Atributo 2:"
          valor={ cardAttr2 }
          change={ onInputChange }
          nome="cardAttr2"
          />
          <FormInputs
          id="attr3-input"
          type="number"
          label="Atributo 3:"
          valor={ cardAttr3 }
          change={ onInputChange }
          nome="cardAttr3"
          />
          <FormInputs
          id="image-input"
          type="text"
          label="Imagem:"
          valor={ cardImage }
          change={ onInputChange }
          nome="cardImage"
          />
          <label htmlFor='rare-input'>
            Raridade:
            <select
              id='rare-input'
              data-testid='rare-input'
              name='cardRare'
              value={ cardRare }
              onChange={ onInputChange }
              >
                <option value='normal'>normal</option>
                <option value='raro'>raro</option>
                <option value='muito raro'>muito raro</option>
              </select>
          </label>
          <Checkbox
            cardTrunfo={ cardTrunfo }
            onInputChange={ onInputChange }
            hasTrunfo={ hasTrunfo }
            />
            <button
              type='submit'
              data-testid='save-button'
              disabled={ isSaveButtonDisabeld }
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

};

export default Form;