import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      name: '',
      description: '',
      colors: 0,
      duration: 0,
      crackling: 0,
      image: '',
      rare: '',
      tryunfo: false,

    };
  }

  handleChange({ target }) {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const {
      name,
      description,
      colors,
      duration,
      crackling,
      image,
      rare,
      tryunfo,
    } = this.state;

    return (
      <div>
        <h1>Adicionar nova carta</h1>

        <form className="new-card-form" onSubmit={ this.handleSubmit }>

          <label htmlFor="name">
            Nome
            <input
              type="text"
              data-testid="name-input"
              name="name"
              id="name"
              value={ name }
              onChange={ this.handleChange }
            />
          </label>

          <label htmlFor="description">
            Descrição
            <input
              type="textarea"
              name="description"
              id="description"
              value={ description }
              data-testid="description-input"
              onChange={ this.handleChange }
            />
          </label>

          <label htmlFor="colors">
            Cores
            <input
              type="number"
              name="colors"
              id="colors"
              value={ colors }
              data-testid="attr1-input"
              onChange={ this.handleChange }
            />
          </label>

          <label htmlFor="duration">
            Duração
            <input
              type="number"
              name="duration"
              id="duration"
              value={ duration }
              data-testid="attr2-input"
              onChange={ this.handleChange }
            />
          </label>

          <label htmlFor="crackling">
            Crackling
            <input
              type="number"
              name="crackling"
              id="crackling"
              value={ crackling }
              data-testid="attr3-input"
              onChange={ this.handleChange }
            />
          </label>

          <label htmlFor="image">
            Imagem
            <input
              type="text"
              name="image"
              id="image"
              value={ image }
              data-testid="image-input"
              onChange={ this.handleChange }
            />
          </label>

          <label htmlFor="rare">
            Raridade
            <select
              data-testid="rare-input"
              name="rare"
              id="rare"
              value={ rare }
              onChange={ this.handleChange }
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
              value={ tryunfo }
              onChange={ this.handleChange }
            />
          </label>

          <button
            type="submit"
            disabled
            id="save"
            data-testid="save-button"
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
