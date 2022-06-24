import React from 'react';
import Input from './Input';
import Select from './Select';
import Textarea from './Textarea';

class Form extends React.Component {
  render() {
    const options = ['normal', 'raro', 'muito raro'];
    return (
      <>
        <Input name="card-name" text="name" type="text" data-testid="name-input" />
        <Textarea name="card-desc" text="description" data-testid="description-input" />
        <Input
          name="card-attr"
          text="atribute 1"
          type="number"
          data-testid="attr1-input"
        />
        <Input
          name="card-attr"
          text="atribute 2"
          type="number"
          data-testid="attr2-input"
        />
        <Input
          name="card-attr"
          text="atribute 3"
          type="number"
          data-testid="attr3-input"
        />
        <Input name="card-img" text="image" type="text" data-testid="image-input" />
        <Select name="card-rarity" options={ options } data-testid="rare-input" />
        <Input
          name="card-check"
          text="Super Trunfo"
          type="checkbox"
          data-testid="trunfo-input"
        />
        <button type="submit" data-testid="save-button">Salvar</button>
      </>
    );
  }
}

export default Form;
