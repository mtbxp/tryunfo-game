import React from 'react';
import './Form.css';
import PropTypes from 'prop-types';

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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    function trunfoInput() {
      return (
        <div className="trunfo">
          <input
            data-testid="trunfo-input"
            type="checkbox"
            name="cardTrunfo"
            id=""
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
          <span> A carta será um trunfo?</span>
        </div>);
    }
    return (
      <form onSubmit={ onSaveButtonClick }>
        {/* {console.log(this.props)} */}
        <input
          data-testid="name-input"
          type="text"
          name="cardName"
          placeholder="Nome da carta"
          id=""
          value={ cardName }
          onChange={ onInputChange }
        />
        <textarea
          data-testid="description-input"
          value={ cardDescription }
          onChange={ onInputChange }
          name="cardDescription"
          placeholder="Descrição da carta"
          id=""
          cols="30"
          rows="10"
        />
        <input
          value={ cardAttr1 }
          onChange={ onInputChange }
          data-testid="attr1-input"
          min={ 10 }
          max={ 90 }
          type="number"
          placeholder="Atributo da carta"
          name="cardAttr1"
          id=""
        />
        <input
          value={ cardAttr2 }
          onChange={ onInputChange }
          data-testid="attr2-input"
          min={ 10 }
          max={ 90 }
          placeholder="Atributo da carta"
          type="number"
          name="cardAttr2"
          id=""
        />

        <input
          value={ cardAttr3 }
          onChange={ onInputChange }
          data-testid="attr3-input"
          min={ 10 }
          max={ 90 }
          placeholder="Atributo da carta"
          type="number"
          name="cardAttr3"
          id=""
        />
        <input
          data-testid="image-input"
          type="text"
          name="cardImage"
          placeholder="Imagem da carta"
          id=""
          value={ cardImage }
          onChange={ onInputChange }
        />
        <select
          data-testid="rare-input"
          name="cardRare"
          id=""
          value={ cardRare }
          onChange={ onInputChange }
        >
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito Raro</option>
        </select>

        {
          hasTrunfo === false
            ? trunfoInput()
            : <>Você já tem um Super Trunfo em seu baralho</>
        }

        <input
          data-testid="save-button"
          type="submit"
          value="Salvar"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        />
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
