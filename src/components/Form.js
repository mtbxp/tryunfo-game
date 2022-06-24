import React from 'react';
import Input from './Input';
import Select from './Select';
import Textarea from './Textarea';

class Form extends React.Component {
  render() {
    const options = ['normal', 'raro', 'muito raro'];
    return (
      <>
        <Input name="card-name" text="name" type="text" data="name-input" />
        <Textarea name="card-desc" text="description" data="description-input" />
        <Input
          name="card-attr"
          text="atribute 1"
          type="number"
          data="attr1-input"
        />
        <Input
          name="card-attr"
          text="atribute 2"
          type="number"
          data="attr2-input"
        />
        <Input
          name="card-attr"
          text="atribute 3"
          type="number"
          data="attr3-input"
        />
        <Input name="card-img" text="image" type="text" data="image-input" />
        <Select name="card-rarity" options={ options } data="rare-input" />
        <Input
          name="card-check"
          text="Super Trunfo"
          type="checkbox"
          data="trunfo-input"
        />
        <button type="submit" data-testid="save-button">Salvar</button>
      </>
    );
  }
}

export default Form;
