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
    const { nome } = this.state;
    return (
      <fieldset>
        <legend>Adicionar nova carta</legend>
        <div className="container">
          <Nome value={ nome } />
        </div>
      </fieldset>
    );
  }
}
