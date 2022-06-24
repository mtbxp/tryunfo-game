import React from 'react';
import Input from './Input';
// import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    return (
      <form>
        <h2>Adicionar nova carta</h2>

        <Input
          name="card-name"
          type="text"
          text="Nome"
          dataTestId="name-input"
        />

        <label htmlFor="card-description">
          Descrição
          <textarea name="card-description" data-testid="description-input" />
        </label>

        <Input
          name="card-attr1"
          type="number"
          text="Atributo 1"
          dataTestId="attr1-input"
        />
        <Input
          name="card-attr2"
          type="number"
          text="Atributo 2"
          dataTestId="attr2-input"
        />
        <Input
          name="card-attr3"
          type="number"
          text="Atributo 3"
          dataTestId="attr3-input"
        />

        <Input
          name="card-image"
          type="text"
          text="Imagem"
          dataTestId="image-input"
        />

        <label htmlFor="card-rarity">
          Raridade
          <select name="card-rarity" data-testid="rare-input">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>

        <Input
          name="card-trunfo-check"
          type="checkbox"
          text="Super Trunfo?"
          dataTestId="trunfo-input"
        />

        <button type="submit" data-testid="save-button">Salvar</button>

      </form>
    );
  }
}

// Form.propTypes = {

// };

export default Form;
