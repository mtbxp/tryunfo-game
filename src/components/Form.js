import React, { Component } from 'react';
import PropTypes from 'prop-types';

// const limitU = 90;
// const limitG = 210;

class Form extends Component {
  // saveButtonOpen1() {
  //   if (cardAttr1.target.value >= 0 && cardAttr1.target.value <= limitU) return true;
  //   return false;
  // }

  // saveButtonOpen2() {
  //   if (cardAttr2.target.value >= 0 && cardAttr2.target.value <= limitU) return true;
  //   return false;
  // }

  // saveButtonOpen3() {
  //   if (cardAttr3.target.value >= 0 && cardAttr3.target.value <= limitU) return true;
  //   return false;
  // }

  // saveButtonOpen4() {
  //   const cd1 = cardAttr1.target.value;
  //   const cd2 = cardAttr2.target.value;
  //   const cd3 = cardAttr3.target.value;
  //   if (cd1 + cd2 + cd3 <= limitG) return true;
  //   return false;
  // }

  // saveButtonOpen5() {
  //   if (cardName.target.value.length > 0) return true;
  //   return false;
  // }

  // saveButtonOpen6() {
  //   if (cardDescription.target.value.length > 0) return true;
  //   return false;
  // }

  // saveButtonOpen7() {
  //   if (cardImage.target.value.length > 0) return true;
  //   return false;
  // }

  // isSaveButtonDisabled() {
  //   const op1 = this.saveButtonOpen1();
  //   const op2 = this.saveButtonOpen2();
  //   const op3 = this.saveButtonOpen3();
  //   const op4 = this.saveButtonOpen4();
  //   const op5 = this.saveButtonOpen5();
  //   const op6 = this.saveButtonOpen6();
  //   const op7 = this.saveButtonOpen7();
  //   if (!op1 || !op2 || !op3 || !op4 || !op5 || !op6 || !op7) return false;
  //   return true;
  // }

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
      <div id="divForm">
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
          name="cardDescription"
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
          name="cardAttr1"
          value={ cardAttr1 }
          onChange={ onInputChange }
          data-testid="attr1-input"
        />
        <br />
        <b className="2Atb">Segundo Atributo:</b>
        <input
          type="number"
          className="attr2-input"
          name="cardAttr2"
          value={ cardAttr2 }
          onChange={ onInputChange }
          data-testid="attr2-input"
        />
        <br />
        <b className="3Atb">Terceiro Atributo:</b>
        <input
          type="number"
          className="attr3-input"
          name="cardAttr3"
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
          name="cardImage"
          value={ cardImage }
          onChange={ onInputChange }
          data-testid="image-input"
        />
        <br />
        <br />

        <b>Raridade:</b>
        <select
          className="rare-input"
          name="cardRare"
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
          name="cardTrunfo"
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
