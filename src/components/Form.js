import PropTypes from 'prop-types';
import React from 'react';

class Form extends React.Component {
  render() {
    const { cardName,
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

    return (
      <form className="form" onSubmit={ this.handleSubmit }>
        <h1 className="titulos-compo">Adicionar nova carta</h1>
        <label htmlFor="name">
          <b>Nome</b>
          <br />
          <input
            className="input bottom"
            name="name"
            type="text"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
            placeholder="Placeholder"
          />
        </label>
        <label htmlFor="describe">
          <b>Descrição</b>
          <br />
          <textarea
            className="input bottom"
            name="describe"
            type="textarea"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr1">
          <b>Attr01</b>
          <input
            className="attrs"
            name="attr1"
            type="number"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
            min={ 0 }
            max={ 90 }
          />
        </label>
        <label htmlFor="attr2">
          <b>Attr02</b>
          <input
            className="attrs"
            name="attr2"
            type="number"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
            min={ 0 }
            max={ 90 }
          />
        </label>
        <label htmlFor="attr3">
          <b>Attr03</b>
          <input
            className="attrs"
            name="attr3"
            type="number"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
            min={ 0 }
            max={ 90 }
          />
        </label>
        <label htmlFor="image">
          <b>Imagem</b>
          <input
            className="input-img"
            name="image"
            type="text"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <label className="input-rari" htmlFor="select">
          <b>Raridade</b>
          <br />
          <select
            className="input"
            name="select"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
            placeholder="Placeholder"
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        {hasTrunfo ? (
          'Você já tem um Super Trunfo em seu baralho'
        ) : (
          <label className="check" htmlFor="check">
            <b>Super Trybe Trunfo</b>
            <input
              className="check"
              name="check"
              type="checkbox"
              data-testid="trunfo-input"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>
        )}
        <div>
          <button
            className="bt"
            name="bt"
            type="button"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar

          </button>
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.number,
  cardAttr2: PropTypes.number,
  cardAttr3: PropTypes.number,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;
