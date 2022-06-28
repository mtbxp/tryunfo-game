import React from 'react';
import PropType from 'prop-types';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: false,
    };
  }

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  onSaveButtonClick = () => {};

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

    return (
      <div>
        <form>
          <label htmlFor="nome">
            Nome
            <input
              data-testid="name-input"
              name="nome"
              id="nome"
              value={ cardName }
              onChange={ onInputChange }
              type="text"
            />
          </label>

          <label htmlFor="descricao">
            Descrição
            <textarea
              name="descricao"
              id="descricao"
              value={ cardDescription }
              onChange={ onInputChange }
              data-testid="description-input"
            />
          </label>

          <label htmlFor="attr01">
            Attr01
            <input
              name="attr01"
              id="attr01"
              value={ cardAttr1 }
              onChange={ onInputChange }
              type="number"
              data-testid="attr1-input"
            />
          </label>

          <label htmlFor="attr02">
            Attr02
            <input
              name="attr02"
              id="attr02"
              value={ cardAttr2 }
              onChange={ onInputChange }
              type="number"
              data-testid="attr2-input"
            />
          </label>

          <label htmlFor="attr03">
            Attr03
            <input
              name="attr03"
              id="attr03"
              value={ cardAttr3 }
              onChange={ onInputChange }
              type="number"
              data-testid="attr3-input"
            />
          </label>

          <label htmlFor="imagem">
            Imagem
            <input
              name="imagem"
              id="imagem"
              value={ cardImage }
              onChange={ onInputChange }
              type="text"
              data-testid="image-input"
            />
          </label>

          <select
            value={ cardRare }
            onChange={ onInputChange }
            data-testid="rare-input"
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
          Super Tryunfo

          <label htmlFor="check-trunfo">
            <input
              name="check-trunfo"
              id="check-trunfo"
              data-testid="trunfo-input"
              onChange={ onInputChange }
              type="checkbox"
              checked={ cardTrunfo }
            />
          </label>

          <button
            value={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
            type="submit"
            disabled={ isSaveButtonDisabled }
            data-testid="save-button"
          >
            Salvar
          </button>
        </form>
      </div>

    );
  }
}

Form.propTypes = {
  cardName: PropType.string.isRequired,
  cardDescription: PropType.string.isRequired,
  cardAttr1: PropType.string.isRequired,
  cardAttr2: PropType.string.isRequired,
  cardAttr3: PropType.string.isRequired,
  cardImage: PropType.string.isRequired,
  cardRare: PropType.bool.isRequired,
  cardTrunfo: PropType.bool.isRequired,
  hasTrunfo: PropType.bool.isRequired,
  isSaveButtonDisabled: PropType.func.isRequired,
  onInputChange: PropType.func.isRequired,
  onSaveButtonClick: PropType.func.isRequired,
};

export default Form;
