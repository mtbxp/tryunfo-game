import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  // constructor() {
  //   super();
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
  //     isSaveButtonDisabled: true,
  //     // onInputChange: () => { },
  //     // onSaveButtonClick: () => { },
  //   };
  // }

  // handleChangeName = ({ target }) => {
  //   this.setState({
  //     cardName: target.value,
  //   });
  // }

  // handleChangeDescription = ({ target }) => {
  //   this.setState({
  //     cardDescription: target.value,
  //   });
  // }

  // handleChangeCardAttr1 = ({ target }) => {
  //   this.setState({
  //     cardAttr1: target.value,
  //   });
  // }

  // handleChangeCardAttr2 = ({ target }) => {
  //   this.setState({
  //     cardAttr2: target.value,
  //   });
  // }

  // handleChangeCardAttr3 = ({ target }) => {
  //   this.setState({
  //     cardAttr3: target.value,
  //   });
  // }

  // handleChangeCardImage = ({ target }) => {
  //   this.setState({
  //     cardImage: target.value,
  //   });
  // }
  onInputChange = () => { };

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
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <div>
        <form className="form" onSubmit={ () => {} }>
          <label htmlFor="name-input">
            Nome
            <input
              name="name-input"
              type="text"
              data-testid="name-input"
              value={ cardName }
              onChange={ onInputChange }

            />
          </label>
          <label htmlFor="description-input">
            Descrição
            <input
              name="description-input"
              type="textarea"
              data-testid="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr1-input">
            Atributo 1
            <input
              name="attr1-input"
              type="number"
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr2-input">
            Atributo 2
            <input
              name="attr2-input"
              type="number"
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr3-input">
            Atributo 3
            <input
              name="attr3-input"
              type="number"
              data-testid="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="image-input">
            Imagem
            <input
              name="image-input"
              type="text"
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="rare-input">
            Selecione a raridade
            <select
              name="rare-input"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>
          <label htmlFor="trunfo-input">
            Super Trunfo
            <input
              name="trunfo-input"
              type="checkbox"
              data-testid="trunfo-input"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>
          <button
            name="save-button"
            type="button"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
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
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
