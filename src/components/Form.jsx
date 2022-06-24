import React, { Component } from 'react';
import Nome from './Nome';

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      nome: '',
    };
  }

  render() {
    return (
      <fieldset>
        <legend>Adicionar nova carta</legend>
        <div className="container">
          <Nome value={ this.state.nome } />
        </div>

      </fieldset>
    );
  }
}
