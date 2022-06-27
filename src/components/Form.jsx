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
    this.onInputChange = this.onInputChange.bind(this);

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

  onInputChange({ target }) {
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
          value={ cardName }
          onInputChange={ this.onInputChange }
        />

        <Description
          value={ cardDescription }
          onInputChange={ this.onInputChange }
        />

        <Attr
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          onInputChange={ this.onInputChange }
        />

        <CardImage
          value={ cardImage }
          onInputChange={ this.onInputChange }
        />

        <CardRarity
          cardRare={ cardRare }
          onInputChange={ this.onInputChange }
        />

        <SuperTrunfoCheckbox
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.onInputChange }
        />

        <BtnSave />
      </form>
    );
  }
}

export default Form;
