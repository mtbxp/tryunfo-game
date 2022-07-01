import React from 'react';
import Description from './Description';
import FirstAttribute from './FirstAttribute';
import Image from './Image';
import Name from './Name';
import Rarity from './Rarity';
import SecondAttribute from './SecondAttribute';
import SuperTrump from './SuperTrump';
import ThirdAttribute from './ThirdAttribute';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form className="form">
          <h2>Adicionar nova carta</h2>
          <Name />
          <Description />
          <FirstAttribute />
          <SecondAttribute />
          <ThirdAttribute />
          <Image />
          <Rarity />
          <SuperTrump />
          <button data-testid="save-button" type="submit">Salvar</button>
        </form>
      </div>
    );
  }
}

export default Form;
