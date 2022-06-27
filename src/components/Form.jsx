import React from 'react';
import CardName from './CardName';
import Description from './Description';
import Attr from './Attr';
import CardImage from './CardImage';
import CardRarity from './CardRarity';
import SuperTrunfoCheckbox from './SuperTrunfoCheckbox';
import BtnSave from './BtnSave';

class Form extends React.Component {
  constructor() {
    super();
    this.handlerCardInfo = this.handlerCardInfo.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    };
  }

  handlerCardInfo({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo } = this.state;

    return (
      <form className="form" onSubmit={ this.handleSubmit }>
        <CardName
          cardName={ cardName }
          handlerCardInfo={ this.handlerCardInfo }
        />

        <Description
          cardDescription={ cardDescription }
          handlerCardInfo={ this.handlerCardInfo }
        />

        <Attr
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          handlerCardInfo={ this.handlerCardInfo }
        />

        <CardImage
          cardImage={ cardImage }
          handlerCardInfo={ this.handlerCardInfo }
        />

        <CardRarity
          cardRare={ cardRare }
          handlerCardInfo={ this.handlerCardInfo }
        />

        <SuperTrunfoCheckbox
          cardTrunfo={ cardTrunfo }
          handlerCardInfo={ this.handlerCardInfo }
        />

        <BtnSave />
      </form>
    );
  }
}

export default Form;
