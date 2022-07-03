import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      description: '',
      attr1: '',
      attr2: '',
      attr3: '',
      image: '',
      rare: 'normal',
      trunfo: false,
      hasTrunfo: false,
      button: true,
      arrayInforCard: [],
    };
  }

  habilitButton = () => {
    const { name, description, image, rare, attr1, attr2, attr3 } = this.state;

    const inputsText = [name, description, image, rare];
    const textArea = inputsText.every((area) => area.length > 0);

    const minPoint = 0;
    const maxPointAttr = 90;
    const maxPointAllsAttr = 210;
    const attrText = [Number(attr1), Number(attr2), Number(attr3)];
    const attrArea = Number(attr1) + Number(attr2) + Number(attr3);
    const attrSum = attrText.every((attr) => attr >= minPoint
    && attr <= maxPointAttr && attrArea <= maxPointAllsAttr);

    this.setState({
      button: !(textArea && attrSum),
    });
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState(({
      [name]: value,
    }),

    () => this.habilitButton());
  }

  saveInforms = () => {
    const { name, description, image, rare, trunfo, attr1, attr2,
      attr3, arrayInforCard } = this.state;
    const objInf = {
      name,
      description,
      attr1,
      attr2,
      attr3,
      image,
      rare,
      trunfo,
    };

    this.setState((prevState) => ({
      name: '',
      description: '',
      attr1: 0,
      attr2: 0,
      attr3: 0,
      image: '',
      rare: 'normal',
      arrayInforCard: [...prevState.arrayInforCard, objInf],
      hasTrunfo: arrayInforCard.some((item) => item.trunfo),
    }));
  }

  render() {
    const { name, description, attr1, attr2,
      attr3, image, rare, trunfo, hasTrunfo, button, arrayInforCard } = this.state;

    return (
      <div className="appJs">
        <h1>Tryunfo</h1>
        <Form
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ trunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ button }
          onSaveButtonClick={ this.saveInforms }
          onInputChange={ this.onInputChange }
        />
        <Card
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ trunfo }
          onInputChange={ this.onInputChange }
        />
        {arrayInforCard.map((card) => (
          <Card
            key={ card.name }
            cardName={ card.name }
            cardDescription={ card.description }
            cardAttr1={ card.attr1 }
            cardAttr2={ card.attr2 }
            cardAttr3={ card.attr3 }
            cardImage={ card.image }
            cardRare={ card.rare }
            cardTrunfo={ card.trunfo }
          />
        ))}
      </div>
    );
  }
}

export default App;
