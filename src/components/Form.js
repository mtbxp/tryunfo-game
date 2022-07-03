import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  // constructor(props) {
  //   super(props);

  //   this.handleChange = this.handleChange.bind(this);

  //   this.state = {
  //     cardName: '',
  //     cardDescription: '',
  //     cardAttr1: '',
  //     cardAttr2: '',
  //     cardAttr3: '',
  //     cardImage: '',
  //     cardRare: '',
  //     cardTrunfo: false,
  //     hasTrunfo: false,

  //   };
  // }

  // handleChange({ target }) {
  //   const { name, type } = target;
  //   const value = type === 'checkbox' ? target.checked : target.value;
  //   this.setState({
  //     [name]: value });
  // }

  // handleSubmit(event) {
  //   event.preventDefault();
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
      onSaveButtonClick,
    } = this.props;

    return (
      <div>
        <h1>Adicionar nova carta</h1>

        <form className="new-card-form">

          <label htmlFor="cardName">
            Nome
            <input
              type="text"
              data-testid="name-input"
              name="cardName"
              id="cardName"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="description">
            Descrição
            <input
              type="textarea"
              name="description"
              id="description"
              value={ cardDescription }
              data-testid="description-input"
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="colors">
            Cores
            <input
              type="number"
              name="colors"
              id="colors"
              value={ cardAttr1 }
              data-testid="attr1-input"
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="duration">
            Duração
            <input
              type="number"
              name="duration"
              id="duration"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="crackling">
            Crackling
            <input
              type="number"
              name="crackling"
              id="crackling"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="image">
            Imagem
            <input
              type="text"
              name="image"
              id="image"
              value={ cardImage }
              data-testid="image-input"
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="rare">
            Raridade
            <select
              data-testid="rare-input"
              name="rare"
              id="rare"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
            </select>
          </label>

          <label htmlFor="tryunfo">
            <input
              type="checkbox"
              data-testid="trunfo-input"
              name="tryunfo"
              id="tryunfo"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>

          <button
            type="submit"
            disabled={ isSaveButtonDisabled }
            id="save"
            data-testid="save-button"
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </div>
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
