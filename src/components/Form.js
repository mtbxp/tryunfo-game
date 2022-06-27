import PropTypes from 'prop-types';
import React from 'react';
import '../styles/form.css';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      attr1: 0,
      attr2: 0,
      attr3: 0,
      image: '',
      rare: 'normal',
      trunfo: '',
      errors: {},
    };
  }

  handleChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  validateForm = () => {
    const maxAttr = 10;
    const errAttr = '*Apenas números de 1 a 10 suportados';

    const { name, description, attr1, attr2, attr3, image, rare } = this.state;

    const erros = {};
    let formIsValid = true;

    if (!name.length) {
      formIsValid = false;
      erros.name = '*Preencha o nome da carta';
    }

    if (!description.length) {
      formIsValid = false;
      erros.description = '*Preencha a descrição da carta';
    }

    if (!image.length) {
      formIsValid = false;
      erros.image = '*Preencha a imagem da carta';
    }

    if (!rare.length) {
      formIsValid = false;
      erros.rare = '*Preencha a raridade da carta';
    }

    if (attr1 < 0 || attr1 > maxAttr) {
      formIsValid = false;
      erros.attr1 = errAttr;
    }

    if (attr2 < 0 || attr2 > maxAttr) {
      formIsValid = false;
      erros.attr2 = errAttr;
    }

    if (!attr1 < 0 || attr3 > maxAttr) {
      formIsValid = false;
      erros.attr3 = errAttr;
    }

    this.setState({
      errors: erros,
    });

    return formIsValid;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { addNewCard } = this.props;
    if (this.validateForm()) {
      addNewCard(this.state);

      this.setState({
        name: '',
        description: '',
        attr1: 0,
        attr2: 0,
        attr3: 0,
        image: '',
        rare: 'normal',
        trunfo: '',
      });
    }
  }

  render() {
    const { name,
      description,
      attr1,
      attr2,
      attr3,
      image,
      rare,
      trunfo,
      errors } = this.state;
    return (
      <form className="form" onSubmit={ this.handleSubmit }>
        <label htmlFor="name" className="label">
          Nome
          <br />
          <input
            type="text"
            className="input"
            name="name"
            id="name"
            value={ name }
            data-testid="name-input"
            onChange={ this.handleChange }
          />
        </label>
        <span className="error">{errors.name}</span>
        <label htmlFor="description" className="label">
          Descrição
          <br />
          <textarea
            className="input"
            name="description"
            id="description"
            value={ description }
            data-testid="description-input"
            onChange={ this.handleChange }
          />
        </label>
        <span className="error">{errors.description}</span>
        <label htmlFor="attr1" className="label">
          Cool
          <br />
          <input
            type="number"
            className="input"
            name="attr1"
            id="attr1"
            value={ attr1 }
            data-testid="attr1-input"
            onChange={ this.handleChange }
          />
        </label>
        <span className="error">{errors.attr1}</span>
        <label htmlFor="attr2" className="label">
          Fannie
          <br />
          <input
            type="number"
            className="input"
            name="attr2"
            id="attr2"
            value={ attr2 }
            data-testid="attr2-input"
            onChange={ this.handleChange }
          />
        </label>
        <span className="error">{errors.attr2}</span>
        <label htmlFor="attr3" className="label">
          Smart
          <br />
          <input
            type="number"
            className="input"
            name="attr3"
            id="attr3"
            value={ attr3 }
            data-testid="attr3-input"
            onChange={ this.handleChange }
          />
        </label>
        <span className="error">{errors.attr3}</span>
        <label htmlFor="image" className="label">
          Imagem
          <br />
          <input
            type="text"
            className="input"
            name="image"
            id="image"
            value={ image }
            data-testid="image-input"
            onChange={ this.handleChange }
          />
        </label>
        <span className="error">{errors.image}</span>
        <label htmlFor="rare" className="label">
          Raro
          <br />
          <select
            name="rare"
            id="rare"
            className="input"
            value={ rare }
            data-testid="rare-input"
            onChange={ this.handleChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        <span className="error">{errors.rare}</span>
        <label htmlFor="trunfo" className="label">
          <input
            name="trunfo"
            id="trunfo"
            type="checkbox"
            selected={ trunfo }
            data-testid="trunfo-input"
            onChange={ this.handleChange }
          />
          Trunfo
        </label>
        <div>
          <button
            type="submit"
            className="btn"
            name="salvar"
            id="salvar"
            data-testid="save-button"
          >
            Salvar
          </button>
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  addNewCard: PropTypes.func.isRequired,
};

export default Form;
