import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <div>
            Nome
            <input
              type="text"
              name="name"
              data-testid="name-input"
            />
          </div>
          <div>
            Descrição
            <textarea
              name="description"
              data-testid="description-input"
            />
          </div>
          <div>
            Attr01
            <input
              type="number"
              name="tribute1"
              data-testid="attr1-input"
            />
          </div>
          <div>
            Attr02
            <input
              type="number"
              name="tribute2"
              data-testid="attr2-input"
            />
          </div>
          <div>
            Attr03
            <input
              type="number"
              name="tribute3"
              data-testid="attr3-input"
            />
          </div>
          <div>
            Imagem
            <input
              type="text"
              name="image"
              data-testid="image-input"
            />
          </div>
          <div>
            Raridade
            <select
              name="rare"
              data-testid="rare-input"
            >
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </div>
          <div>
            <input
              type="checkbox"
              name="trunfo"
              data-testid="trunfo-input"
            />
            Super Trybe Trunfo
          </div>
        </form>
        <button
          name="button"
          type="button"
          data-testid="save-button"
        >
          Salvar
        </button>
      </div>
    );
  }
}

export default Form;
