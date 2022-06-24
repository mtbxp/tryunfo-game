import React, { Component } from 'react';
import Nome from './Nome';
import Descricao from './Descricao';

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      text: '',
    };
  }

  render() {
    const { name, text } = this.state;
    return (
      <fieldset>
        <legend>Adicionar nova carta</legend>
        <div className="container">
          <Nome value={ name } />
        </div>
        <div className="container">
          <Descricao value={ text } />
        </div>
      </fieldset>
    );
  }
}
