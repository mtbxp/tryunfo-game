import React, { Component } from 'react';
import Input from './Input';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      nome: '',
      describe: '',
      firstAttribute: 0,
      secondAttribute: 0,
      thirdAttribute: 0,
      card: '',
      superTrunfo: false,
    };
  }

  render() {
    const
      {
        nome,
        card,
        describe,
        firstAttribute,
        secondAttribute,
        thirdAttribute,
        superTrunfo,
      } = this.state;

    const onChange = ({ target }) => {
      const { name, value } = target;
      this.setState(() => ({
        [name]: value,
      }));
    };

    return (
      <div>
        <form>
          <Input
            name="nome"
            type="text"
            value={ nome }
            label="Nome"
            onChange={ onChange }
            testid="name-input"
          />
          <label htmlFor="textarea">
            Descrição
            <textarea
              id="textarea"
              name="describe"
              value={ describe }
              onChange={ onChange }
              data-testid="description-input"
            />
          </label>
          <Input
            name="firstAttribute"
            type="number"
            value={ firstAttribute.toString() }
            label="Força"
            testid="attr1-input"
            onChange={ onChange }
          />
          <Input
            name="secondAttribute"
            type="number"
            value={ secondAttribute.toString() }
            label="Inteligência"
            onChange={ onChange }
            testid="attr2-input"
          />
          <Input
            name="thirdAttribute"
            type="number"
            value={ thirdAttribute.toString() }
            label="Destreza"
            onChange={ onChange }
            testid="attr3-input"
          />
          <Input
            name="card"
            type="text"
            value={ card }
            label="Carta"
            onChange={ onChange }
            testid="image-input"
          />
          <select data-testid="rare-input">
            <option name="normal">normal</option>
            <option name="raro">raro</option>
            <option name="muitoRaro">muito raro</option>
          </select>
          <Input
            name="superTrunfo"
            type="checkbox"
            value={ superTrunfo }
            label="Super Trunfo"
            onChange={ onChange }
            testid="trunfo-input"
          />
          <button type="button" data-testid="save-button">
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
