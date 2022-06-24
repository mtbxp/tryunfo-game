import React from 'react';
// import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    return (

      <form>

        <h2>Adicionar nova carta</h2>

        <label htmlFor="name">
          Nome da carta
          <input
            data-testid="name-input"
            type="text"
            name="name"
            id="name"
            // value={ cardName }
            // onChange={ this.onInputChange }
          />
        </label>

        <label htmlFor="description">
          Descrição
          <textarea
            data-testid="description-input"
            name="description"
            id="description"
            // value={ cardDescription }
            // onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr1">
          Attr01
          <input
            data-testid="attr1-input"
            type="number"
            name="attr1"
            id="attr1"
            // value={ cardAttr1 }
            // onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr2">
          Attr02
          <input
            data-testid="attr2-input"
            type="number"
            name="attr2"
            id="attr2"
            // value={ cardAttr2 }
            // onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr3">
          Attr03
          <input
            data-testid="attr3-input"
            type="number"
            name="attr3"
            id="attr3"
            // value={ cardAttr3 }
            // onChange={ onInputChange }
          />
        </label>

        <label htmlFor="image">
          Imagem
          <input
            data-testid="image-input"
            type="text"
            name="image"
            id="image"
            // value={ cardImage }
            // onChange={ onInputChange }
          />
        </label>

        <label htmlFor="rare">
          Raridade
          <select
            data-testid="rare-input"
            name="rare"
            id="rare"
            defaultChecked=""
            // value={ cardRare }
            // onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>

        <label htmlFor="trunfo">
          Super Trybe Trunfo
          <input
            data-testid="trunfo-input"
            type="checkbox"
            name="trunfo"
            id="trunfo"
            // value={ cardTrunfo }
            // onChange={ onInputChange }
          />
        </label>
        <button
          data-testid="save-button"
          type="submit"
        //   disabled={ isSaveButtonDisabled }
        //   onClick={ onSaveButtonClick }
        >
          Salvar

        </button>

      </form>

    );
  }
}

// Form.propTypes = {

//   cardName: PropTypes.string,
//   cardDescription: PropTypes.string,
//   cardAttr1: PropTypes.string,
//   cardAttr2: PropTypes.string,
//   cardAttr3: PropTypes.string,
//   cardImage: PropTypes.string,
//   cardRare: PropTypes.string,
//   cardTrunfo: PropTypes.bool,
//   //   hasTrunfo: PropTypes.bool,
//   isSaveButtonDisabled: PropTypes.bool,
//   //   onInputChange: PropTypes.func.,
//   //   onSaveButtonClick: PropTypes.func,
// }.isRequired;

export default Form;
