import React, { Component } from 'react';
import Nome from './Nome';
import Descricao from './Descricao';
import Atributo1 from './Atributo1';
import Atributo2 from './Atributo2';
import Atributo3 from './Atributo3';
import Image from './Image';
import Raridade from './Raridade';
import Checkbox from './Checkbox';

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      text: '',
      number: '',
    };
  }

  render() {
    const { name, text, number } = this.state;
    return (
      <fieldset>
        <legend>Adicionar nova carta</legend>
        <div className="container">
          <Nome value={ name } />
        </div>
        <div className="container">
          <Descricao value={ text } />
        </div>
        <div className="container">
          <Atributo1 value={ number } />
        </div>
        <div className="container">
          <Atributo2 value={ number } />
        </div>
        <div className="container">
          <Atributo3 value={ number } />
        </div>
        <div className="container">
          <Image value={ text } />
        </div>
        <div className="container">
          <Raridade value={ text } />
        </div>
        <div className="container">
          <Checkbox />
        </div>
      </fieldset>
    );
  }
}
