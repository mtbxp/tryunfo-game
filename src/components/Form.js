import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <lebel>
            Nome:
            <input type="text" data-testid="name-input" />
          </lebel>
          <lebel>
            Descrição
            <input data-testid="description-input" />
          </lebel>
          <lebel>
            attr1
            <input type="number" data-testid="attr1-input" />
          </lebel>
          <lebel>
            attr2
            <input type="number" data-testid="attr2-input" />
          </lebel>
          <lebel>
            attr3
            <input type="number" data-testid="attr3-input" />
          </lebel>
          <lebel>
            Image:
            <input type="text" data-testid="image-input" />
          </lebel>
          <lebel>
            Raridade
            <select data-testid="rare-input">
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </lebel>
          <lebel>
            Super Trunfo?
            <input type="checkbox" data-testid="trunfo-input" />
          </lebel>
        </form>
        <button type="submit" data-testid="save-button"> Salvar </button>
      </div>
    );
  }
}

export default Form;
