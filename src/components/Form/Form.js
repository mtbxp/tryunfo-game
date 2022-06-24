import React from 'react';
import './styles.css';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardAttr1,
      cardDescription,
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
      <form>
        <label htmlFor="name-input">
          nome
          <input
            value={ cardName }
            className="default-input"
            type="text"
            data-testid="name-input"
          />
        </label>
        <label htmlFor="description-input">
          descrição
          <textarea
            value={ cardDescription }
            className="default-input"
            data-testid="description-input"
          />
        </label>
        <section className="atr-content">
          <label className="atr-camp1" htmlFor="attr1-input">
            atributo
            <input
              value={ cardAttr1 }
              type="number"
              data-testid="attr1-input"
            />
          </label>
          <label className="atr-camp" htmlFor="attr2-input">
            atributo
            <input
              value={ cardAttr2 }
              type="number"
              data-testid="attr2-input"
            />
          </label>
          <label className="atr-camp" htmlFor="attr3-input">
            atributo
            <input
              value={ cardAttr3 }
              type="number"
              data-testid="attr3-input"
            />
          </label>
        </section>
        <label className="image-area" htmlFor="image-input">
          imagem
          <input
            value={ cardImage }
            type="text"
            data-testid="image-input"
          />
        </label>
        <label className="raridade-container" htmlFor="rare-input">
          reridade
          <select
            value={ cardRare }
            data-testid="rare-input"
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label className="thunfo-check" htmlFor="trunfo-input">
          <input
            checked={ cardTrunfo }
            type="checkbox"
            data-testid="trunfo-input"
          />
          super trunfo
        </label>
        <button
          value={ isSaveButtonDisabled }
          type="submit"
          data-testid="save-button"
          className="save-btn"
        >
          salvar
        </button>
      </form>
    );
  }
}

export default Form;
