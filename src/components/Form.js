import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name">
          Nome:
          <input
            id="name"
            value={ cardName }
            onInputChange={ }
            type="text"
            data-testid="name-input"
          />
        </label>
        <br />
        <label htmlFor="description">
          Descrição:
          <textarea
            id="description"
            value={ cardDescription }
            onInputChange={ }
            type="textarea"
            data-testid="description-input"
          />
        </label>
        <br />
        <label htmlFor="number">
          Atributo 01:
          <input
            id="number"
            value={ cardAttr1 }
            onInputChange={ }
            type="number"
            data-testid="attr1-input"
          />
        </label>
        <br />
        <label htmlFor="number">
          Atributo 02:
          <input
            id="number"
            value={ cardAttr1 }
            onInputChange={ }
            type="number"
            data-testid="attr2-input"
          />
        </label>
        <br />
        <label htmlFor="number">
          Atributo 03:
          <input
            id="number"
            value={ cardAttr1 }
            onInputChange={ }
            type="number"
            data-testid="attr3-input"
          />
        </label>
        <br />
        <label htmlFor="imagem">
          Imagem:
          <input
            id="imagem"
            value={ cardAttr1 }
            onInputChange={ }
            type="text"
            data-testid="image-input"
          />
        </label>
        <br />
        <label htmlFor="select">
          Raridade:
          <select
            id="select"
            value={ cardAttr1 }
            onInputChange={ }
            type="select"
            data-testid="rare-input"
          >
            <option value="normal">
              normal
            </option>
            <option value="raro">
              raro
            </option>
            <option value="muito raro">
              muito raro
            </option>
          </select>
        </label>
        <br />
        <label htmlFor="checkbox"
        >
          Super Trybe Tryunfo:
          <input
            id="checkbox"
            value={ cardAttr1 }
            onInputChange={ }
            type="checkbox"
            data-testid="trunfo-input"
            
          />
        </label>
        <br />
        <button 
        type="button" 
        data-testid="save-button"
        value={ cardAttr1 }
        onInputChange={ }
        >
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;
