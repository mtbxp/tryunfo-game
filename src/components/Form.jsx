import React, { Component } from 'react';
import Nome from './Nome';
import Descricao from './Descricao';
import Habilidade from './Habilidade';
import Forca from './Forca';
import Vida from './Vida';
import Image from './Image';
import Raridade from './Raridade';
import Checkbox from './Checkbox';
import Button from './Button';

export default class Form extends Component {
  // constructor() {
  //   super();

  //   // this.state = {
  //   //   name: '',
  //   //   text: '',
  //   //   number: '',
  //   // };
  // }

  render() {
    // const { name, text, number } = this.state;
    return (
      <form action="">
        <legend>Adicionar nova carta</legend>
        <div className="container">
          <Nome />
        </div>
        <div className="container">
          <Descricao />
        </div>
        <div className="container">
          <Habilidade />
        </div>
        <div className="container">
          <Forca />
        </div>
        <div className="container">
          <Vida />
        </div>
        <div className="container">
          <Image />
        </div>
        <div className="container">
          <Raridade />
        </div>
        <div className="container">
          <Checkbox />
        </div>
        <div className="container">
          <Button />
        </div>
      </form>
    );
  }
}
