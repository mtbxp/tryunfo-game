import React from 'react';
import Input from './Input';

class Form extends React.Component {
  render() {
    return (
      <form>
        <Input describeLabel="Nome" testid="name-input" type="text" name="name" />

        <textarea data-testid="description-input" name="description" />

        <Input describeLabel="Attr01" testid="attr1-input" type="number" name="attr1" />

        <Input describeLabel="Attr02" testid="attr2-input" type="number" name="attr2" />

        <Input describeLabel="Attr03" testid="attr3-input" type="number" name="attr3" />

        <Input describeLabel="Imagem" testid="image-input" type="text" name="image" />

        <select data-testid="rare-input" name="rare">
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito raro</option>
        </select>

        <Input
          describeLabel="Super Trunfo"
          testid="trunfo-input"
          type="checkbox"
          name="trunfo"
        />

        <button data-testid="save-button" type="submit">Salvar</button>
      </form>
    );
  }
}

export default Form;
