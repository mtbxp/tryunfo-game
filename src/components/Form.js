import React from 'react';
import './style.css';

class Form extends React.Component {
  render() {
    // const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
    //     cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled, onInputChange, onSaveButtonClick } = this.props;
    return (
      <div>
        <form className="form">
          <label htmlFor="card">
            Nome:
            <input
              data-testid="name-input"
              name="card"
              type="text"
            />
          </label>

          <label htmlFor="description">
            Descrição:
            <input
              data-testid="description-input"
              name="description"
              type="textarea"
            />
          </label>

          <label htmlFor="value-card-1">
            Atributo 1:
            <input
              data-testid="attr1-input"
              name="value-card-1"
              type="number"
            />
          </label>

          <label htmlFor="value-card-2">
            Atributo 2:
            <input
              data-testid="attr2-input"
              name="value-card-2"
              type="number"
            />
          </label>

          <label htmlFor="value-card-3">
            Atributo 3:
            <input
              data-testid="attr3-input"
              name="value-card-3"
              type="number"
            />
          </label>

          <label htmlFor="url-image">
            Imagem:
            <input
              data-testid="image-input"
              name="url-image"
              type="text"
            />
          </label>

          <label htmlFor="rare">
            Raridade:
            <select
              data-testid="rare-input"
              name="card"
              type="select"
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
            </select>
          </label>

          <label htmlFor="super-trunfo">
            Super Trunfo?
            <input
              data-testid="trunfo-input"
              name="super-trunfo"
              type="checkbox"
            />
          </label>

          <button type="button" data-testid="save-button">Salvar</button>
        </form>
      </div>
    );
  }
}

export default Form;
